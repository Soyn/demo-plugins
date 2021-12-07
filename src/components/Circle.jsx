import React, { useMemo } from "react";
import { useStyle } from "../hooks/useStyle";

export const Circle = (props) => {
  const style = useStyle(props.style || {});
  return (
    <div className="w-10 h-10 rounded-full" style={style}>
      {props.children}
    </div>
  );
};
