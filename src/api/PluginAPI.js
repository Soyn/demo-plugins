import {
  nanoid,
} from 'nanoid';
export class API {
  constructor(state, sandboxGlobal) {
    this.state = state;
    this._global = sandboxGlobal;
    sandboxGlobal.addEventListener('message', (event) => {
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
            break;
          }
        }
      } catch (e) { }
    });
  }
  _messageHandler = (event) => {
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
          break;
        }
        case 'updateScene': {
          this.state = payload;
          break;
        }
      }
    } catch (e) {}
  }
  async loadScene() {
    return new Promise((res, rej) => {
      window.postMessage(JSON.stringify({ type: 'loadScene' }));
      window.addEventListener('message', this._messageHandler)
    });
  }
  async updateScene() {
    const payload = {
      type: 'updateScene',
      payload: this.state,
    };
    return new Promise((res, rej) => {
      window.postMessage(JSON.stringify(payload))
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
}