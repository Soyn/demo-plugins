import { useEffect, useRef, useContext } from "react";
import { AppContext } from "../hooks/appContext";
import { API } from "../api/pluginApi2";

export const Sandbox = () => {
  const realmRef = useRef(null);
  const { state } = useContext(AppContext);
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "http://127.0.0.1:5500/src/plugins/plugin2/lib/realms-shim.umd.js";
    s.onload = () => {
      const api = new API(state);
    };
    document.head.append(s);
  }, []);
  return (
    <div className="w-80 h-40 border border-blue-500 fixed bottom-1 left-2 border-4 bg-blue-50"></div>
  );
};
