const addShape = () => {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const createBtn = () => {
    const btn = document.createElement('button');
    btn.className = 'shadow-md border rounded-lg my-1 bg-white hover:bg-black hover:text-white hover:shadow-none';
    return btn;
  }
  const add1kBlocks = createBtn();
  add1kBlocks.innerHTML = 'Add 1000 Blocks';
  add1kBlocks.addEventListener('click', async () => {
    await App.loadScene();
    for (let i = 0; i < 1000; i += 1) {
      App.addBlock({
        children: [],
        style: {
        bgColor: getRandomColor(),
        width: '100px',
        height: '100px',
      }});
    }
    await App.updateScene();
  });

  const add1kCircles = createBtn();
  add1kCircles.innerHTML = 'Add 1000 Circle';
  add1kCircles.addEventListener('click', () => {
    App.loadScene().then(() => {
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
  });

  const addTreeNodes = createBtn();
  addTreeNodes.classList.add('hover:bg-red-600');
  addTreeNodes.innerHTML = 'Add Tree Nodes';
  addTreeNodes.addEventListener('click', async () => {
    const shapes = [
      'block',
      'circle',
    ];
    const buildTree = (nodesCount, level) => {
      if (level <= 0) return [];
      let res = []
      const indentX = nodesCount * 2;
      const w = level * 100;
      const h = level * 100;
      for (let i = 0; i < nodesCount; i += 1) {
        const node = {
          id: `${level}-${i}`,
          type: shapes[(Math.floor(Math.random() * 10)) % 2],
          style: {
            bgColor: getRandomColor(),
            width: `${w}px`,
            height: `${h}px`,
            transform: `translate(${indentX}px,${indentX}px)`
          },
          children: buildTree(nodesCount + 1, level - 1),
        };
        res.push(node);
      }
      return res;
    }
    const nodes = buildTree(1, 6);
    await App.loadScene();
    App.addBlock(nodes[0]);
    await App.updateScene();
  });

  const clearBtn = createBtn();
  clearBtn.innerHTML = 'Clear';
  clearBtn.classList.add('hover:bg-blue-600');
  clearBtn.addEventListener('click', async () => {
    await App.loadScene();
    App.setDocuments([]);
    await App.updateScene();
  });
  const container = document.createElement('div');
  container.className = 'flex flex-col px-8 h-full justify-center';
  container.appendChild(add1kBlocks);
  container.appendChild(add1kCircles);
  container.appendChild(addTreeNodes);
  container.appendChild(clearBtn);

  window.document.body.append(container);
}

document.head.innerHTML ='<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">';
addShape();