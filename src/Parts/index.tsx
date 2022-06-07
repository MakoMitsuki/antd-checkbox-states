import React, { useState, FC, CSSProperties } from "react";
import "antd/dist/antd.css";
import { Checkbox, Input } from "antd";

/*note: I do not want to use the standard && operator to toggle 
  visiblity of the input box because it will reset future
  prepopulates
*/
const hidden: CSSProperties = { visibility: "hidden" };
const visible: CSSProperties = { visibility: "visible" };

const Parts: FC = () => {
  const [isShow, setIsShow] = useState(hidden);
  const onChange = (e) => {
    if (e.target.checked) setIsShow(visible);
    else setIsShow(hidden);
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
      <Input type="text" placeholder="The box is clicked" style={isShow} />
    </>
  );
};

export default Parts;
