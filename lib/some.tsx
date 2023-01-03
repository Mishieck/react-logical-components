import React, { Children } from "react";

interface EitherPropsInterface {
  display: Array<number>;
  children: React.ReactNode;
}

const Either: React.FC<EitherPropsInterface> = (props) => {
  const { display, children } = props;
  const elements: Array<React.ReactNode> = Children.toArray(children);
  // TODO: Handler index out of bounds
  return <>{display.map((index) => elements[index])}</>;
};

export default Either;
export type { EitherPropsInterface };
