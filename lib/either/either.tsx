import React, { Children } from "react";

interface EitherPropsInterface {
  displayFirst: boolean;
  children: React.ReactNode;
}

const Either: React.FC<EitherPropsInterface> = (props) => {
  const { displayFirst, children } = props;
  return Children.toArray(children)[displayFirst ? 0 : 1] as React.ReactElement;
};

export default Either;
export type { EitherPropsInterface };
