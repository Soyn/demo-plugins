import React, { useMemo } from "react";

export const Text = ({ style, text }) => {
  return (
      <span
        style={{
          color: style.color,
          fontFamily: style.fontFamily,
          fontWeight: style.fontWeight,
          fontSize: style.fontSize,
        }}
      >
        {text}
      </span>
    );
};
