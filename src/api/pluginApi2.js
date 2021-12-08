import {
  nanoid,
} from 'nanoid';
import {
  createVM
} from '../components/VM/vm'
class UI {
  constructor(vm) {
    this._vm = vm;
    const frameBox = document.createElement('iframe');
    document.body.append(frameBox);
    frameBox.contentWindow.parent.document.body.append(frameBox);

    this._uiFrame = frameBox;
    this._document = frameBox.contentDocument;
    this._global = frameBox.contentWindow;
    this._listeners = this._vm.getArray();
    this.onMessage = () => { };
  }
  showUI(html, layout = {}) {
    const {
      position,
      left,
      right,
      top,
      bottom,
      width,
      height,
    } = layout;
    if (Object.keys(layout).length) {
      let style = this._uiFrame.style;
      if (position) style.position = position;
      if (left) style.left = left;
      if (right) style.right = right;
      if (top) style.top = top;
      if (bottom) style.bottom = bottom;
      if (width) style.width = width;
      if (height) style.height = height;
    }
    this._global.open();
    this._document.write(html);
    this._global.close();
    this._messageHandler = () => {};
    this._document.addEventListener('message', (e) => this._messageHandler(e.data));
  }
  set onMessage(fn) {
    this._global.parent.document.removeEventListener('message', this._messageHandler);
    this._messageHandler = this._vm.createFunction(fn);
    this._global.parent.document.addEventListener('message', this._messageHandler);
  }
}
export class API {
  constructor(state, syncState) {
    this._vm = createVM();
    this.state = this._vm.createObject(state);
    this._ui = new UI(this._vm);
    this._syncState = syncState;
  }
  get vm()  {
    return this._vm
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
  closePlugin() {
    this._syncState(this.state);
  }
}