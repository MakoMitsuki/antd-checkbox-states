import React, { useState, FC } from "react";
import "antd/dist/antd.css";
import { Checkbox, Input } from "antd";

const Parts: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const onChange = (e) => {
    setIsShow(e.target.checked);
  };
  return (
    <>
      <Checkbox.Group>
        <Checkbox value="a">Not Checkbox</Checkbox>
        <Checkbox value="b">Also Not Checkbox</Checkbox>
        <Checkbox value="c" onChange={onChange}>
          Checkbox
        </Checkbox>
      </Checkbox.Group>
      {isShow && <Input type="text" placeholder="The box is clicked" />}
    </>
  );
};

export default Parts;
