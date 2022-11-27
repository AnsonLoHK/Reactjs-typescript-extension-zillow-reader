import React, { FC, useEffect, useState } from "react";
import { render } from "react-dom";

interface IProps {}

export const Popup: FC<IProps> = () => {
  const [content, setContent] = useState("11/27");

  return <div>{content}</div>;
};

render(<Popup />, document.getElementById("popup"));
