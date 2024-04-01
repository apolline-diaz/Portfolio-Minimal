import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

function Skills() {
  return (
    <div className="text-gray-400 grid grid-cols-6 justify-left items-center space-y-2">
      <div className="p-4 flex flex-col items-center">
        <img src={html} alt="" />
        <p className="mt-2">HTML</p>
      </div>

      <div className="p-4 flex flex-col items-center">
        <img src={css} alt="" />
        <p className="mt-2">CSS</p>
      </div>

      <div className="p-4 flex flex-col items-center">
        <img src={javascript} alt="" />
        <p className="mt-2">JavaScript</p>
      </div>

      <div className="p-4 flex flex-col items-center">
        <img src={react} alt="" />
        <p className="mt-2">React</p>
      </div>

      <div className="p-4 flex flex-col items-center">
        <img src={tailwind} alt="" />
        <p className="mt-2">Tailwind</p>
      </div>
    </div>
  );
}

export default Skills;
