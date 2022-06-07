import React, { useState, FC } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Checkbox } from "antd";

const Parts: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const onChange = (e) => {
    console.log("Checked:", e.target.checked);
    setIsShow(e.target.checked);
  };
  return <Checkbox onChange={onChange}>Checkbox</Checkbox>;
};

export default Parts;
