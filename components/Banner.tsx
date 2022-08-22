import React from "react";
import Button from "./Button";

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="banner__title font-display">
          Hello, I'm
          <span className="text-green">Antony Moss.</span>
          <span className="text-green">A Creative Front-End Developer</span>
        </h1>
      </div>
    </div>
  );
}
