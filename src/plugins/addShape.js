const addShape = () => {
  window.App.loadScene();
  const addBlock = document.createElement('button');
  addBlock.innerHTML = 'Add Block';

  console.log(window);
  addBlock.addEventListener('click', () => {
    window.App.Scenes.add({
      type: 'block',
      stye: {
        bgColor: '#cbe5a2'
      }
    });
  });
  const addCircle = document.createElement('button');
  addCircle.innerHTML = 'Add Circle';
  addCircle.addEventListener('click', () => {
    window.App.Scenes.add({
      type: 'circle',
      stye: {
        bgColor: '#cbe5a2'
      }
    });
    window.App.updateScene();
  });
  const container = document.createElement('div');
  container.appendChild(addBlock);
  container.appendChild(addCircle);
  window.document.body.append(container);
}
addShape();