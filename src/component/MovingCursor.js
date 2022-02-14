import React, { useState,useEffect } from "react";
import "./MovingCursor.css";

export default function MovingCursor(props) {
    const [cursorActive, setCursorActive] = useState(false); 
    const [cursorPosition, setCursorPosition] = useState([0,0]);
    useEffect(() => {

        document.addEventListener("mousemove", (e) => {
            setCursorPosition([e.pageX, e.pageY]);
            const cursorElement = document.elementFromPoint(e.pageX, e.pageY);
            if (cursorElement.tagName === 'A' || cursorElement.getAttribute("data-active")) {
                setCursorActive(true);
            }
            else {
                setCursorActive(false);
            }
        });
        
    },[])
    return (
    <div
      className={"moving-cursor "+ (cursorActive ? 'active' : '')}
      style={{ left: cursorPosition[0], top: cursorPosition[1] }}
    ></div>
  );
}
