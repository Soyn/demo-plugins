import React, { useMemo } from "react";
import { useStyle } from "../hooks/useStyle";

export const Block = (props = {}) => {
  const style = useStyle(props.style || {});
  return useMemo(() => {
    return <div className="w-5 h-5" style={style}></div>;
  }, [style]);
};
