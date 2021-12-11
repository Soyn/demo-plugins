class API {
  constructor(state) {
    this.state = state;
    this._global = window;
  }
  _messageHandler = (event, res, rej) => {
    const { data } = event;
    try {
      const {
        type,
        payload,
      } = data;
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
  loadScene() {
    return new Promise((res, rej) => {
      this._global.parent.postMessage({ type: 'loadScene' }, "http://localhost:3000");
      const listener = (event) => {
        this._messageHandler(event, res, rej);
        this._global.removeEventListener('message', listener);
      };
      this._global.addEventListener('message', listener);
    });
  }
  updateScene() {
    const payload = {
      type: 'updateScene',
      payload: this.state,
    };
    return new Promise((res, rej) => {
      this._global.parent.postMessage(payload, "http://localhost:3000");
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
      id: `test-${Math.random()*10}`,
      style,
      children: children,
    })
  }
  addCircle({ style, children }) {
    this.state.documents.push({
      type: 'circle',
      id: `test-${Math.random()*10}`,
      style,
      children: children,
    })
  }
  addText(text = '', style = {}) {
    this.state.documents.push({
      type: 'text',
      id: `test-${Math.random()*10}`,
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
window.App = new API();