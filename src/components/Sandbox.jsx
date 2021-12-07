import { React, useEffect, useRef, useContext, useState } from "react";
import {
  API,
} from '../api/PluginAPI.js';
import {
  AppContext,
} from '../hooks/appContext';

export const Sandbox = () => {
  const sandboxRef = useRef(null);
  const { state: appState, dispatch } = useContext(AppContext);
  const pluginApi = useRef(null);
  
  useEffect(() => {
    const global = sandboxRef.current.contentWindow;
    pluginApi.current = new API({}, global);
    global.App = pluginApi.current;
    if (global) {
      window.fetch('http://127.0.0.1:5500/src/plugins/addShape.js').then((res) => res.text()).then(data => {
        const script = global.document.createElement("script");
        script.append(data);
        global.document.body.append(script);
      });
    }
    window.addEventListener('message', (event) => {
      const { data } = event;
      try {  
        const json = JSON.parse(data);
        const { type, payload } = json;
        switch (type) {
          case 'updateScene': {
            dispatch({
              type: 'setPage',
              payload,
            });
            const msg = {
              type: 'updateScene',
              payload: appState.page
            };
            global.postMessage(JSON.stringify(msg))
            break;
          }
          case 'loadScene': {
            const msg = {
              type: 'loadScene',
              payload: appState.page
            };
            global.postMessage(JSON.stringify(msg))
          }
        }
      } catch(e){}
    })
  }, []);
  return (
    <div className="w-80 h-40 border border-blue-500 fixed bottom-1 left-2 border-4 bg-green-50">
      <iframe ref={sandboxRef} />
    </div>
  );
};
