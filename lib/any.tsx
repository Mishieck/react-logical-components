import React, { Children } from "react";

interface EitherPropsInterface {
  display: number;
  children: React.ReactNode;
}

const Either: React.FC<EitherPropsInterface> = (props) => {
  const { display, children } = props;
  // TODO: Handler index out of bounds
  return Children.toArray(children)[display] as React.ReactElement;
};

export default Either;
export type { EitherPropsInterface };
