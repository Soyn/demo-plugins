import react from "react";
import { Block } from "./Block";
import { Circle } from "./Circle";
import { Text } from "./Text";

const IShapes = {
  Block: "block",
  Circle: "circle",
  Text: "text"
};
const Shapes = {
  [IShapes.Block]: ({ id, children, ...rest }) => (
    <Block key={id} {...rest}>
      {children}
    </Block>
  ),
  [IShapes.Circle]: ({ id, children, ...rest }) => (
    <Circle key={id} {...rest}>
      {children}
    </Circle>
  ),
  [IShapes.Text]: ({ id, children, ...rest }) => (
    <Text key={id} {...rest}>
      {children}
    </Text>
  )
};
export const Render = (props) => {
  const { documents } = props;
  return (
    <div className="w-full h-full">
      {documents.map((d) => {
        const { children, type, ...rest } = d;
        console.log(rest);
        const Parent = Shapes[type];
        if (children.length) {
          return (
            <Parent {...rest}>
              {children.map((c) => (
                <Render {...c} />
              ))}
            </Parent>
          );
        }
        return <Parent {...rest} />;
      })}
    </div>
  );
};
