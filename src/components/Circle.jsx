import React from "react";
import { useStyle } from "../hooks/useStyle";

export const Circle = (props) => {
  const style = useStyle(props.style || {});
  return (
    <div className="rounded-full m-1" style={style}>
      {props.children}
    </div>
  );
};
