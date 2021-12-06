import { useState } from "react";
import { Render } from "./components/Render";

const block = {
  id: "block-1",
  type: "block",
  style: {
    bgColor: "red",
    color: "yellow",
    opacity: "0.5",
    width: "200px",
    height: "100px"
  },
  children: [
    {
      id: "text-1",
      type: "text",
      style: {
        bgColor: "red",
        color: "yellow",
        opacity: "0.5",
        width: "200px",
        height: "100px"
      },
      text: "Text",
      children: [],
    }
  ]
};

export default function App() {
  const [store, setStore] = useState({
    documents: [block]
  });
  return (
    <div className="bg-gray-50 w-full h-screen">
      <Render documents={store.documents} />
    </div>
  );
}
