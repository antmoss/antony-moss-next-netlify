import React from "react";
import Button from "./Button";

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="banner__title font-display">
          Hello, I'm
          <span className="text-primary"> Antony Moss.</span>
          <span className="text-primary"> A Creative Front-End Developer</span>
        </h1>

        <Button
          name="Find out more"
          url="#about"
          classes="mt-16 w-fit"
          outline
        ></Button>
      </div>
    </div>
  );
}
