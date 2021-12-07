
const addShape = () => {
  App.loadScene();
  const addBlock = document.createElement('button');
  addBlock.innerHTML = 'Add Block';
  addBlock.addEventListener('click', () => {
    App.addBlock({
        bgColor: '#cbe5a2',
        width: '100px',
        height: '100px',
        'margin-top': '0.5em',
    });
    App.updateScene();
  });
  const addCircle = document.createElement('button');
  addCircle.innerHTML = 'Add Circle';
  addCircle.addEventListener('click', () => {
    App.addCircle({
        bgColor: '#cbe5a2',
        'margin-top': '0.5em',
    });
    App.updateScene();
  });
  const container = document.createElement('div');
  container.appendChild(addBlock);
  container.appendChild(addCircle);
  window.document.body.append(container);
}
addShape();