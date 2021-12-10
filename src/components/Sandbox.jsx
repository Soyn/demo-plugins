import {
  React,
  useEffect,
  useRef,
  useContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { AppContext } from "../hooks/appContext";

export const Sandbox = () => {
  const [sandboxSrc, setSrc] = useState("");
  const sandboxRef = useRef(null);
  const { state: appState, dispatch } = useContext(AppContext);
  const pluginApi = useRef(null);

  useEffect(() => {
    window
      .fetch("http://127.0.0.1:5501/src/plugins/iframe.html")
      .then((res) => res.text())
      .then((data) => {
        const content = `data:text/html;base64,${btoa(data)}`;
        setSrc(content);
      });
  }, []);

  useEffect(() => {
    const listener = (event) => {
      const { data } = event;
      try {
        const json = JSON.parse(data);
        const { type, payload } = json;
        switch (type) {
          case "updateScene": {
            dispatch({
              type: "setPage",
              payload,
            });
            const msg = {
              type: "updateScene",
              payload: appState.page,
            };
            sandboxRef.current.contentWindow.postMessage(
              JSON.stringify(msg),
              "*"
            );
            break;
          }
          case "loadScene": {
            const msg = {
              type: "loadScene",
              payload: appState.page,
            };
            sandboxRef.current.contentWindow.postMessage(
              JSON.stringify(msg),
              "*"
            );
          }
        }
      } catch (e) {}
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }, [appState]);
  return (
    <>
      {sandboxSrc ? (
        <iframe
          className="w-full fixed bottom-1 left-1"
          src={sandboxSrc}
          ref={sandboxRef}
        />
      ) : (
        <div className="flex jusitify-center">Loading...</div>
      )}
    </>
  );
};
