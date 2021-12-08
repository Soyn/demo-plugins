import {
  nanoid,
} from 'nanoid';

class UI {
  constructor() {
    this._iframe = document.createElement('iframe');
    this._document = this._iframe.contentDocument;
    this._global = this._iframe.contentWindow;
    this._listeners = [];
    this.onMessage = () => {};
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
    this.onMessage = fn
  }
}
export class API {
  constructor(state) {
    this.state = state;
    this._ui = new UI();
  }
  get UI() {
    return this._ui;
  }
  addBlock({ style, children }) {
    this.state.documents.push({
      type: 'block',
      id: nanoid(),
      style,
      children: children,
    })
  }
  addCircle({ style, children }) {
    this.state.documents.push({
      type: 'circle',
      id: nanoid(),
      style,
      children: children,
    })
  }
  addText(text = '', style = {}) {
    this.state.documents.push({
      type: 'text',
      id: nanoid(),
      style,
      text,
      children: [],
    })
  }
  getDocuments() {
    return this.state.documents;
  }
  setDocuments(docs) {
    this.state.documents = docs;
  }
}