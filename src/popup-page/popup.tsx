import React, { FC } from "react";
import { render } from "react-dom";

interface IProps {}

export const Popup: FC<IProps> = () => {
  return <div>11/9</div>;
};

render(<Popup />, document.getElementById("popup"));
