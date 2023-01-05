import React, { FC, ReactElement } from "react";

type RenderComponentType<DataInterface> = (
  item: DataInterface,
  index: number,
  data: Array<DataInterface>
) => ReactElement;

interface ForEachPropsInterface<DataInterface> {
  data: Array<DataInterface>;
  Component?: FC<DataInterface>;
  renderComponent?: RenderComponentType<DataInterface>;
}

const ForEach = <DataInterface extends Object>(
  props: ForEachPropsInterface<DataInterface>
) => {
  const { data, Component, renderComponent } = props;

  if (Component) {
    return <>{data.map(Component)}</>;
  } else if (renderComponent) {
    return <>{data.map(renderComponent)}</>;
  } else {
    throw new Error("You need to provide either Component or renderComponent.");
  }
};

export default ForEach;
export type { ForEachPropsInterface };
