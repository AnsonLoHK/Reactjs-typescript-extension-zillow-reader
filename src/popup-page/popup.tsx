import React, { FC } from "react";
import { render } from "react-dom";

interface IProps {}

export const Popup: FC<IProps> = () => {
  return <div>pop up page </div>;
};

render(<Popup />, document.getElementById("popup"));
