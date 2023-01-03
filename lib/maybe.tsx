import React from "react";
import Empty from "./empty";
import Either from "./either";

interface MaybePropsInterface {
  display: boolean;
  children: React.ReactElement;
}

const Maybe: React.FC<MaybePropsInterface> = ({ display, children }) => (
  <Either displayFirst={display}>
    {children}
    <Empty />
  </Either>
);

export default Maybe;
export type { MaybePropsInterface };
