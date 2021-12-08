import {
  Render,
 } from "./components";
 import {
  Sandbox,
 } from './components/Sandbox2'
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
      <div className="bg-gray-50 w-full h-full relative">
        {state.page.documents.length > 0
          ? <Render documents={state.page.documents} />
          : <span>No Shape!</span>}
        <Sandbox />
      </div>
    </AppContext.Provider>
  );
}
