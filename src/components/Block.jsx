import React from "react";
import { useStyle } from "../hooks/useStyle";

export const Block = (props = {}) => {
  const style = useStyle(props.style || {});
  return <div className="m-1" style={style}>{props.children}</div>;
};
