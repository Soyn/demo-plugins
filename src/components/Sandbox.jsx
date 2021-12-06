import { React, useEffect, useRef } from "react";

export const Sandbox = (props) => {
  const sandboxRef = useRef(null);
  useEffect(() => {
    const global = sandboxRef.current.contentWindow;
    console.log(global);
    global.App = {};
    global.App.loadScene = () => {};
    global.App.updateScene = () => {};
    if (global) {
      const script = document.createElement("script");
      script.src = 'http://127.0.0.1:5500/src/plugins/addShape.js';

      // script.append(`const addShape = () => {
      //   window.App.loadScene();
      //   const addBlock = document.createElement('button');
      //   addBlock.innerHTML = 'Add Block';
      
      //   addBlock.addEventListener('click', () => {
      //     window.App.Scenes.add({
      //       type: 'block',
      //       stye: {
      //         bgColor: '#cbe5a2'
      //       }
      //     });
      //   });
      //   const addCircle = document.createElement('button');
      //   addCircle.innerHTML = 'Add Circle';
      //   addCircle.addEventListener('click', () => {
      //     window.App.Scenes.add({
      //       type: 'circle',
      //       stye: {
      //         bgColor: '#cbe5a2'
      //       }
      //     });
      //     window.App.updateScene();
      //   });
      //   const container = document.createElement('div');
      //   container.appendChild(addBlock);
      //   container.appendChild(addCircle);
      //   window.document.body.append(container);
      // }
      // addShape();`);
      global.document.body.append(script);
    }
  }, []);
  return (
    <div className="w-80 h-40 border border-blue-500 absolute bottom-1 left-2 border-2">
      <iframe ref={sandboxRef} />
    </div>
  );
};
