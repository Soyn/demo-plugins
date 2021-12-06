class API {
  constructor() {
    
  }

  loadScene() {
    window.postMessage('{type: load}', window.parent);
  }
}