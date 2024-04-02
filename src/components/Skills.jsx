import React from "react";
import html from "/assets/html.png";
import css from "/assets/css.png";
import javascript from "/assets/javascript.png";
import react from "/assets/react.png";
import tailwind from "/assets/tailwind.png";

function Skills() {
  return (
    <div id="skills" className="px-5 flex flex-col justify-left space-y-2">
      <div className="flex flex-row items-center space-x-2">
        <h2 className="border bg-black text-white p-2">Front-end</h2>
        <div className="flex flex-row justify-between space-x-2">
          <span className="border b-black p-2">HTML</span>
          <span className="border b-black p-2">CSS</span>
          <span className="border b-black p-2">JavaScript</span>
          <span className="border b-black p-2">React</span>
          <span className="border b-black p-2">Vite</span>
          <span className="border b-black p-2">Tailwind</span>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <h2 className="border bg-black text-white p-2">Back-end</h2>
        <div className="flex flex-row justify-between space-x-2">
          <span className="border b-black p-2">Express</span>
          <span className="border b-black p-2">MySQL</span>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <h2 className="border bg-gray-400 border-black text-white p-2">
          Les +
        </h2>
        <div className="flex flex-row justify-between space-x-2">
          <span className="border b-black p-2">Github</span>
          <span className="border b-black p-2">Figma</span>
          <span className="border b-black p-2">Jira</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;

{
  /* <div className="p-4 flex flex-col items-center">
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
      </div> */
}
