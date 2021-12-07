
const addShape = () => {
  App.loadScene();
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const add1kBlocks = document.createElement('button');
  add1kBlocks.innerHTML = 'Add 1000 Blocks';
  add1kBlocks.addEventListener('click', () => {
    for (let i = 0; i < 1000; i += 1) {
      App.addBlock({
        children: [],
        style: {
        bgColor: getRandomColor(),
        width: '100px',
        height: '100px',
      }});
    }
    App.updateScene();
  });

  const add1kCircles = document.createElement('button');
  add1kCircles.innerHTML = 'Add 1000 Circle';
  add1kCircles.addEventListener('click', () => {
    for (let i = 0; i < 1000; i += 1) {
      App.addCircle({
        style: {
        bgColor: getRandomColor(),
        width: '100px',
        height: '100px',
      }, children: []});
    }
    App.updateScene();
  });

  const addTreeNodes = document.createElement('button');
  addTreeNodes.innerHTML = 'Add Tree Nodes';
  addTreeNodes.addEventListener('click', () => {
    const shapes = [
      'block',
      'circle',
    ];
    const buildTree = (nodesCount, level) => {
      if (level < 0) return [];
      let res = []
      for (let i = 0; i < nodesCount; i += 1) {
        const node = {
          id: `${level}-${i}`,
          type: shapes[(Math.floor(Math.random() * 10)) % 2],
          style: {
            bgColor: getRandomColor(),
            width: '100px',
            height: '100px',
          },
          children: buildTree(nodesCount + 1, level - 1),
        };
        res.push(node);
      }
      return res;
    }
    const nodes = buildTree(1, 5);
    App.addBlock(nodes[0]);
    App.updateScene();
  });
  const container = document.createElement('div');
  container.appendChild(add1kBlocks);
  container.appendChild(add1kCircles);
  container.appendChild(addTreeNodes);

  window.document.body.append(container);
}
addShape();