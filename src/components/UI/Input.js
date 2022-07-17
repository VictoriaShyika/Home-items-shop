import React from "react";

export default function Input(props) {
  return (
    <input
      className="quantity-input"
      type={"number"}
      min={1}
      max={100}
      value={props.quantity}
      onChange={(e) => props.onType(e)}
    >
      {props.children}
    </input>
  );
}
