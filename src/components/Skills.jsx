import React from "react";
import html from "/assets/html.png";
import css from "/assets/css.png";
import javascript from "/assets/javascript.png";
import react from "/assets/react.png";
import tailwind from "/assets/tailwind.png";

function Skills() {
  return (
    <div id="skills" className="flex flex-col w-full space-y-2">
      <div className="flex flex-wrap space-2">
        <div className="flex flex-col items-left mb-2 mr-2">
          <h2 className="border bg-black text-white p-2 my-2">Front-end</h2>
          <div className="text-base flex flex-wrap justify-between space-x-2">
            <span className="border b-black p-3 mb-2">HTML</span>
            <span className="border b-black p-3 mb-2">CSS</span>
            <span className="border b-black p-3 mb-2">JavaScript</span>
            <span className="border b-black p-3 mb-2 ">React</span>
            <span className="border b-black p-3 mb-2">Vite</span>
            <span className="border b-black p-3 mb-2">Tailwind</span>
          </div>
        </div>
        <div className="flex flex-col items-left mb-2 mr-2">
          <h2 className="border bg-black text-white p-2 my-2">Back-end</h2>
          <div className="text-base flex flex-wrap justify-between space-x-2">
            <span className="border b-black p-3 mb-2">Node</span>
            <span className="border b-black p-3 mb-2">Express</span>
            <span className="border b-black p-3 mb-2">MySQL</span>
          </div>
        </div>
        <div className="flex flex-col items-left mb-2">
          <h2 className="border bg-gray-400 text-white p-2 my-2">
            J'ai aussi travaillé avec
          </h2>
          <div className="text-base flex flex-row justify-between space-x-2">
            <span className="border b-black p-3 mb-2">Github</span>
            <span className="border b-black p-3 mb-2">Figma</span>
            <span className="border b-black p-3 mb-2">Jira</span>
            <span className="border b-black p-3 mb-2">Canva</span>
            <span className="border b-black p-3 mb-2">Wordpress</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
