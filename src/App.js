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
      <div className="bg-gray-50 w-full h-screen relative">
        {state.page.documents.length > 0
          ? <Render documents={state.page.documents} />
          : <div className="flex flex-col h-screen items-center justify-center text-2xl">
            <span className="text-blue-400">No Shape!</span>
          </div>}
        <Sandbox />
      </div>
    </AppContext.Provider>
  );
}
