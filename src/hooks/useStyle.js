import React from "react";

export const useStyle = (props = {}) => {
  const { bgColor, color, width, height, opacity } = props;
  return {
    backgroundColor: bgColor,
    color,
    width,
    height,
    opacity
  };
};
