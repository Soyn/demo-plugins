import { React, useEffect, useRef, useContext } from "react";
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
        const payload = {
          type: 'stateChanged',
          payload: appState.page,
        }
        global.postMessage(JSON.stringify(payload));
      });
    }
    window.addEventListener('message', (event) => {
      const { data } = event;
      try {        
        const json = JSON.parse(data);
        const { type, payload } = json;
        if (type === 'updateScene') {
          dispatch({
            type: 'setPage',
            payload,
          });
        }
      } catch(e){}
    })
  }, []);
  useEffect(() => {
    global.postMessage(`{type: stateChanged, payload: ${JSON.stringify(appState.page)}}`);
  }, [appState]);
  return (
    <div className="w-80 h-40 border border-blue-500 absolute bottom-1 left-2 border-2">
      <iframe ref={sandboxRef} />
    </div>
  );
};
