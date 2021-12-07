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
        if (type === 'stateChanged') {
          this.state = payload;
        }
      } catch(e) {
        console.log(e);
      }
    });
  }
  loadScene() {
    window.postMessage(JSON.stringify({ type: 'load' }));
  }
  updateScene() {
    const payload = {
      type: 'updateScene',
      payload: this.state,
    };
    
    window.postMessage(JSON.stringify(payload))
  }

  addBlock(style = {}) {
    this.state.documents.push({
      type: 'block',
      id: nanoid(),
      style,
      children: [],
    })
  }
  addCircle(style={}) {
    this.state.documents.push({
      type: 'circle',
      id: nanoid(),
      style,
      children: [],
    })
  }
  addText(text = '', style={}) {
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