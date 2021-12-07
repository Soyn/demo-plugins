import React from "react";
import { useStyle } from "../hooks/useStyle";

export const Block = (props = {}) => {
  const style = useStyle(props.style || {});
  return <div className="w-5 h-5" style={style}>{props.children}</div>;
};
