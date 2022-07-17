import React from "react";

export default function Button(props) {
  return (
    <button className="dect-inc-btn" {...props}>
      {props.children}
    </button>
  );
}
