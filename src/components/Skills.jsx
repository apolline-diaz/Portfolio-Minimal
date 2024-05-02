import React from "react";
import html from "/assets/html.png";
import css from "/assets/css.png";
import javascript from "/assets/javascript.png";
import react from "/assets/react.png";
import tailwind from "/assets/tailwind.png";

function Skills() {
  return (
    <div id="skills" className="flex flex-col w-full items-center space-y-2">
      <div className="flex flex-wrap space-2">
        <div className="flex flex-col items-left mb-2 mr-2">
          <h2 className="border bg-black text-white p-2 my-2">Front-end</h2>
          <div className="text-base flex flex-col sm:flex-wrap md:flex-col justify-between">
            <span className="border b-black p-3 mb-2">HTML</span>
            <span className="border b-black p-3 mb-2">CSS</span>
            <span className="border b-black p-3 mb-2">Tailwind CSS</span>
            <span className="border b-black p-3 mb-2">JavaScript</span>
            <span className="border b-black p-3 mb-2 ">React JS</span>
            <span className="border b-black p-3 mb-2">Vite JS</span>
          </div>
        </div>
        <div className="flex flex-col items-left mb-2 mr-2">
          <h2 className="border bg-black text-white p-2 my-2">Back-end</h2>
          <div className="text-base flex flex-col sm:flex-wrap md:flex-col justify-between">
            <span className="border b-black p-3 mb-2">Node JS</span>
            <span className="border b-black p-3 mb-2">Express JS</span>
            <span className="border b-black p-3 mb-2">MySQL</span>
            <span className="border b-black p-3 mb-2">PostgreSQL</span>
          </div>
        </div>
        <div className="flex flex-col items-left mb-2 mr-2">
          <h2 className="border bg-gray-400 text-white p-2 my-2">Outils</h2>
          <div className="text-base flex flex-col sm:flex-wrap md:flex-col justify-between">
            <span className="border b-black p-3 mb-2">Github</span>
            <span className="border b-black p-3 mb-2">Trello</span>
            <span className="border b-black p-3 mb-2">Jira</span>
            <span className="border b-black p-3 mb-2">Docker</span>
          </div>
        </div>
        <div className="flex flex-col items-left mb-2">
          <h2 className="border bg-gray-400 text-white p-2 my-2">Design</h2>
          <div className="text-base flex flex-col sm:flex-wrap md:flex-col justify-between">
            <span className="border b-black p-3 mb-2">Figma</span>
            <span className="border b-black p-3 mb-2">Canva</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
