import {
  Render,
  Sandbox,
 } from "./components";
import {
  useApp,
  AppContext,
} from './hooks';

export default function App() {
  const [store, dispatch] = useApp();
  return (
    <AppContext.Provider value={{
      dispatch,
    }}>
      <div className="bg-gray-50 w-full h-screen relative">
        <Render documents={store.page.documents} />
        <Sandbox />
      </div>
    </AppContext.Provider>
  );
}
