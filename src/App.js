import { useEffect } from "react";
import {
  Render,
  Sandbox,
 } from "./components";
import {
  useApp,
  AppContext,
} from './hooks';

export default function App() {
  const [state, dispatch] = useApp();
  return (
    <AppContext.Provider value={{
      dispatch,
      state,
    }}>
      <div className="bg-gray-50 w-full h-screen relative">
        <Render documents={state.page.documents} />
        <Sandbox />
      </div>
    </AppContext.Provider>
  );
}
