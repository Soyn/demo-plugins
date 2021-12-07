import React from "react";
import { useIframe } from "./useIframe";

export const VM = (props) => {
  const { plugin } = props;
  const [global] = useIframe();
  
};
