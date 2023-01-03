import React, { Children } from "react";

interface SomePropsInterface {
  display: Array<number>;
  children: React.ReactNode;
}

const Some: React.FC<SomePropsInterface> = (props) => {
  const { display, children } = props;
  const elements: Array<React.ReactNode> = Children.toArray(children);
  // TODO: Handler index out of bounds
  return <>{display.map((index) => elements[index])}</>;
};

export default Some;
export type { SomePropsInterface };
