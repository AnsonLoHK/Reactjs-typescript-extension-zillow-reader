import * as React from "react";
import ReactDOM from "react-dom";

export interface IProps {}

export function Popup(props: IProps) {
  return <div></div>;
}

const rootElement = document.getElementById("popup");
ReactDOM.render(<Popup />, rootElement);
