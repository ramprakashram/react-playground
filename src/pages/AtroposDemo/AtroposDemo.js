import React from "react";
import "./AtroposDemo.scss";
import Atropos from "atropos/react";

export default function AtroposDemo() {
  return (
    <div id="app">
      <Atropos
        className="my-atropos"
        activeOffset={40}
        shadowScale={1.05}
        // onEnter={() => console.log("Enter")}
        // onLeave={() => console.log("Leave")}
        // onRotate={(x, y) => console.log("Rotate", x, y)}
      >
        <img src="https://atroposjs.com/images/header/atropos-bg.svg" alt="Atropos Bg" data-atropos-offset="5" className="atropos-bg-img" />
        {/* 
  Element with no offset will not move
  */}
        <img src="https://atroposjs.com/images/header/atropos-forest-back.svg"  alt="Atropos Forest Back" data-atropos-offset="0" />
        {/* 
  Element with positive offset will move in same direction,
  making it appear in front of the scene
  */}
        <img src="https://atroposjs.com/images/header/atropos-logo-en.svg"  alt="Atropos Logo" data-atropos-offset="5" className="atropos-text-img" />
      </Atropos>
    </div>
  );
}
