import { useEffect, useRef, useContext, useCallback } from "react";
import { AppContext } from "../hooks/appContext";
import { API } from "../api/pluginApi2";

export const Sandbox = () => {
  const realmRef = useRef(null);
  const { state, dispatch } = useContext(AppContext);
  const syncPage = useCallback(
    (s) => {
      dispatch({
        type: "setPage",
        payload: s,
      });
    },
    [dispatch]
  );
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "http://127.0.0.1:5500/src/plugins/plugin2/lib/realms-shim.umd.js";
    s.onload = async () => {
      const api = new API(state, syncPage);
      const getMainFestInfo = async (url) => {
        return fetch(url).then(res => res.json()).then(d => d);
      };
      const getPluginUI = async (url) => {
        return fetch(url).then(res => res.text()).then(d => d);
      }
      const getPluginCode = async (url) => {
        return fetch(url).then(res => res.text()).then(d => d);
      }
      try {
        let data = await getMainFestInfo("http://127.0.0.1:5500/src/plugins/plugin2/mainfest.json");
        const { 
          html: UIURL,
          code: codeURL,
        } = data;
        console.log(data);
        const safeObjPass = api.vm.evaluate(`(v) => {
          return Object.create(v);
        }`);
        const safeStrPass = api.vm.evaluate(`(ui) => {
          return ui;
        }`);
        
        let ui = "";
        if (UIURL) {
          ui = await getPluginUI(UIURL);
        }
        let code = '';
        if (codeURL) {
          code = await getPluginCode(codeURL);
          api.vm.evaluate(`log(API);${code}`, {
            API: safeObjPass(api),
            __html__: ui,
          });
        }
      } catch(e) {
        console.log(e);
      }
    };
    document.head.append(s);
  }, []);
  return null;
};
