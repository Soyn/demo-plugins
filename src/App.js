import { Render } from "./components/Render";
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
      <div className="bg-gray-50 w-full h-screen">
        <Render documents={store.page.documents} />
      </div>
    </AppContext.Provider>
  );
}
