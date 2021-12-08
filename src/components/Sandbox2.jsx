import { useEffect, useRef } from "react";
import {
  API,
} from '../api/pluginApi2';
export const Sandbox = () => {
  const realmRef = useRef(null);
  useEffect(() => {
    fetch('http://127.0.0.1:5500/src/plugins/plugin2/lib/realms-shim.umd.js').then((res) => res.text()).then((data) => {
      const s = document.createElement('script');
      s.append(data)
      document.head.append(s);
      s.onload = () => {
        realmRef.current  = Realm.makeRootRealm();
      }
    });
  }, []);
  return (
    <div className="w-80 h-40 border border-blue-500 fixed bottom-1 left-2 border-4 bg-blue-50"></div>
  );
};
