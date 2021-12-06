import React from "react";
import { useMemo } from "../hooks";

export const Text = ({ style, text }) => {
  return useMemo(
    () => (
      <span
        style={{
          color: style.color,
          fontFamily: style.fontFamily,
          fontWeight: style.fontWeight,
          fontSize: style.fontSize
        }}
      >
        {text}
      </span>
    ),
    [style, text]
  );
};
