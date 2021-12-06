import React, { useMemo } from "react";
import { useStyle } from "../hooks/useStyle";

export const Circle = (props) => {
  const style = useStyle(props.style || {});
  const children = props;
  return useMemo(() => {
    return (
      <div className="w-5 h-5 rounded" style={style}>
        {children}
      </div>
    );
  }, [style, children]);
};
