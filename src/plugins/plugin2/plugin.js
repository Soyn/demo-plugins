API.UI.showUI(__html__, {
  position: 'fixed',
  bottom: '1em',
  left: '1em',
  width: '340px',
  height: '300px',
});
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
API.UI.onMessage = (event) => {
  const { 
    data
  } = event;
  const {
    type,
  } = JSON.parse(data);
  switch(type) {
    case 'add1kBlock': {
      for(let i = 0; i < 1000; i += 1) {
        API.addBlock({
          children: [],
          style: {
          bgColor: getRandomColor(),
          width: '100px',
          height: '100px',
        }});
      }
      break;
    }
    case 'add1kCircle': {
      for(let i = 0; i < 1000; i += 1) {
        API.addCircle({
          children: [],
          style: {
          bgColor: getRandomColor(),
          width: '100px',
          height: '100px',
        }});
      }
      break;
    }
    case 'addTreeNodes': {
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
      API.addBlock(nodes[0]);
      break;
    }
    case 'clear': {
      API.setDocuments([]);
      break;
    }
  }
  API.closePlugin();
}