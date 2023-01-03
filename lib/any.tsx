import React, { Children } from "react";

interface AnyPropsInterface {
  display: number;
  children: React.ReactNode;
}

const Any: React.FC<AnyPropsInterface> = (props) => {
  const { display, children } = props;
  // TODO: Handler index out of bounds
  return Children.toArray(children)[display] as React.ReactElement;
};

export default Any;
export type { AnyPropsInterface };
