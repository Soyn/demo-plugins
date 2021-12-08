import {
  nanoid,
} from 'nanoid';
export class API {
  constructor(state, sandboxGlobal) {
    this.state = state;
    this._global = sandboxGlobal;
  }
  _messageHandler = (event, res, rej) => {
    const { data } = event;
    try {
      const JSONData = JSON.parse(data);
      const {
        type,
        payload,
      } = JSONData;
      switch (type) {
        case 'loadScene': {
          this.state = payload;
          res();
          break;
        }
        case 'updateScene': {
          this.state = payload;
          res();
          break;
        }
      }
    } catch (e) {
      rej();
    }
  }
  async loadScene() {
    return new Promise((res, rej) => {
      this._global.parent.postMessage(JSON.stringify({ type: 'loadScene' }));
      const listener = (event) => {
        this._messageHandler(event, res, rej);
        this._global.removeEventListener('message', listener);
      };
      this._global.addEventListener('message', listener);
    });
  }
  async updateScene() {
    const payload = {
      type: 'updateScene',
      payload: this.state,
    };
    return new Promise((res, rej) => {
      this._global.parent.postMessage(JSON.stringify(payload));
      const listener = (event) => {
        this._messageHandler(event, res, rej);
        this._global.removeEventListener('message', listener);
      };
      this._global.addEventListener('message', listener);
    });
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