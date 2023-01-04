import React, { Children } from "react";

interface AnyPropsInterface {
  display: number;
  children: React.ReactNode;
}

const Any: React.FC<AnyPropsInterface> = (props) => {
  const { display, children } = props;
  const elements = Children.toArray(children);

  if (display >= elements.length) {
    throw new Error("Element index out of bounds.");
  }

  return elements[display] as React.ReactElement;
};

export default Any;
export type { AnyPropsInterface };
