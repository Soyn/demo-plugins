import React from "react";
import { Block } from "./Block";
import { Circle } from "./Circle";
import { Text } from "./Text";

const IShapes = {
  Block: "block",
  Circle: "circle",
  Text: "text",
};
const Shapes = {
  [IShapes.Block]: ({ id,  ...rest }) => (
    <Block key={id} {...rest} />
  ),
  [IShapes.Circle]: ({ id, ...rest }) => (
    <Circle key={id} {...rest} />
  ),
  [IShapes.Text]: ({ id, ...rest }) => (
    <Text key={id} {...rest} />
  ),
};
export const Render = (props) => {
  const { documents } = props;
  // console.log(documents)
  return (
    <div className="w-full h-full flex flex-wrap justify-around">
      <div className="w-80 border">Rendered</div>
      {/* {documents.map((d) => {
        const { children, type, id, ...rest } = d;
        const Parent = Shapes[type];
        if (children.length) {
          return (
            <Parent key={id} {...rest}>
              {children.map((c) => (
                <Render key={c.id} documents={children} /> 
              ))}
            </Parent>
          );
        }
        return <Parent key={id} {...rest} />;
      })} */}
    </div>
  );
};
