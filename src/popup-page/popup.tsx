import React, { FC } from "react";
import { render } from "react-dom";

interface IProps {}

export const Popup: FC<IProps> = () => {
  return <div>可以正常運作extension囉</div>;
};

render(<Popup />, document.getElementById("popup"));
