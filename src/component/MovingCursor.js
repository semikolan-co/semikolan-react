import React, { useState } from "react";
import "./MovingCursor.css";

export default function MovingCursor(props) {
  return (
    <div
      className="moving-cursor"
      style={{ left: props.position[0], top: props.position[1] }}
    ></div>
  );
}
