import React, { Children } from "react";

interface SomePropsInterface {
  display: Array<number>;
  children: React.ReactNode;
}

const Some: React.FC<SomePropsInterface> = (props) => {
  const { display, children } = props;
  const elements: Array<React.ReactNode> = Children.toArray(children);

  if (display.some((index) => index >= elements.length)) {
    throw new Error("Element index out of bounds.");
  }

  return <>{display.map((index) => elements[index])}</>;
};

export default Some;
export type { SomePropsInterface };
