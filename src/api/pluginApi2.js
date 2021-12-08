import {
  nanoid,
} from 'nanoid';
import {
  createVM
} from '../components/VM/vm'
class UI {
  constructor(vm) {
    this._vm = vm;
    this._iframe = document.createElement('iframe');
    this._document = this._iframe.contentDocument;
    this._global = this._iframe.contentWindow;
    this._listeners = this._vm.getArray();
    this.onMessage = this._vm.createFunction(() => { });
  }
  showUI(html) {
    this._global.open();
    this._document.write(html);
    this._global.close();
    document.append(uiIframe);
    this._global.addEventListener('message', (e) => this.onMessage(e.data));
  }
  get onMessage() {
    return this.onMessage;
  }
  set onMessage(fn) {
    // @TODO: make fn works
    // this.onMessage = this._vm.createFunction(fn);
  }
}
export class API {
  constructor(state) {
    this._vm = createVM();
    this.state = this._vm.createObject(state);
    this._ui = new UI(this._vm);
  }
  get UI() {
    return this._ui;
  }
  addBlock({ style, children }) {
    this.state.documents.push(this._vm.createObject({
      type: 'block',
      id: nanoid(),
      style,
      children: children,
    }))
  }
  addCircle({ style, children }) {
    this.state.documents.push(this._vm.createObject({
      type: 'circle',
      id: nanoid(),
      style,
      children: children,
    }))
  }
  addText(text = '', style = {}) {
    this.state.documents.push(this._vm.createObject({
      type: 'text',
      id: nanoid(),
      style,
      text,
      children: [],
    }))
  }
  setDocuments(docs) {
    this.state.documents = docs;
  }
}