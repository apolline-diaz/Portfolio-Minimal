import { useState } from "react";
import "./App.css";
import Timeline from "./components/Timeline.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Project1 from "/assets/project-movie-website-1.png";
import Project2 from "/assets/project-plateforme.png";
import Project3 from "/assets/project-extension.png";
import Project4 from "/assets/project-datavisualisation.png";
import Project5 from "/assets/project-pico.png";
import LinkedIn from "/assets/linkedin.png";
import Github from "/assets/github.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header class="fixed backdrop-blur-sm w-[100%] scroll-smooth">
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center h-1 ">
            <div>
              <a href="#home">
                <h1 className="px-5 font-medium text-xl transition duration-200 hover:opacity-50 cursor-pointer">
                  Apolline Diaz
                </h1>
              </a>
            </div>
            <div>
              <ul className="flex gap-4 transition-all ease-in-out duration-200 text-l px-5">
                <li>
                  <a
                    className="font-medium transition duration-200 hover:opacity-50 cursor-pointer"
                    href="#home"
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium transition duration-200 hover:opacity-50 cursor-pointer"
                    href="#projects"
                  >
                    Projets
                  </a>
                </li>
                {/* <li>
                  <a
                    className="font-medium transition duration-200 hover:opacity-50 cursor-pointer"
                    href="#skills"
                  >
                    Compétences
                  </a>
                </li> */}
                <li>
                  <a
                    className="font-medium transition duration-200 hover:opacity-50 cursor-pointer"
                    href="#experience"
                  >
                    Expérience
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium transition duration-200 hover:opacity-50 cursor-pointer"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* HOME SECTION */}
        <section id="home">
          <div className='bg-[url("/assets/home_background.png")] h-full w-full bg-cover bg-center'>
            <div className="container text-left m-auto px-9 py-20 sm:py-20 flex flex-col gap-6">
              <h2 className="font-light text-6xl">
                Hello, <br />
                I'm Apolline Diaz
              </h2>
              <div>
                <h2 className="font-bold text-5xl gradient-text running-text flex flex-wrap">
                  développeuse full stack
                </h2>
              </div>
              <div>
                <p className="font-light text-2xl w-50 max-w-2xl">
                  Passionnée par la création audiovisuelle et multimédia, je me
                  suis lancée dans le développement, après plusieurs années dans
                  le milieu du cinéma. Je développe des projets orientés sur le
                  front-end.
                </p>
              </div>
              <div className="space-x-3 flex flex-cols">
                <button
                  onClick={() =>
                    window.open("./assets/CV-ApollineDiaz.pdf", "_blank")
                  }
                  className="bg-black text-white font-light  p-2 transition duration-200 hover:opacity-50"
                >
                  CV
                </button>
                <a href="mailto:apolline.diaz@gmail.com">
                  <button className="bg-black text-white font-light p-2 transition duration-200 hover:opacity-50">
                    Contact
                  </button>
                </a>
                <a
                  href="https://github.com/apolline-diaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Github}
                    alt="Github"
                    className="cursor-pointe w-10 h-10 transition duration-200 hover:opacity-50"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* PROJECTS SECTION */}
        <section id="projects" className="p-5">
          <div className="container  m-auto px-4 sm:py-12">
            <h2 className="text-4xl font-light mb-11">Projets</h2>
            <div className="flex flex-col grid grid-cols-1 sm:grid-col md:grid-col lg:grid-col gap-10 ">
              {/* SKILLS SECTION */}
              <section>
                {/* <div className="container m-auto px-4">
                  <h2 className="text-2xl font-medium mb-11">
                    Compétences et outils
                  </h2>
                </div> */}
                <Skills />
              </section>

              {/* PROJET 1 */}
              <div class="h-fit group justify-center">
                <div class="relative overflow-hidden">
                  <img
                    class="sm:w-3/4 w-full object-cover"
                    src={Project1}
                    alt=""
                  />
                  <div class="absolute sm:w-3/4 h-full w-full font-light bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="p-5 bg-gray-400-0.5">
                      <p className="text-white text-400 text-m mt-2 text-center leading-5">
                        Site d'informations et l'actualité des films et séries,
                        à l'aide de la base de données The Movie Database.
                      </p>
                    </div>
                    <div className="p-2 flex space-x-2 text-white">
                      <span className="text-sm border border-white rounded-xl p-1">
                        HTML
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        CSS
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        Javascript
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        API
                      </span>
                    </div>
                    <div className="flex flex-row space-x-1 p-2">
                      <a href="https://github.com/apolline-diaz/Search-Movie-App">
                        <button className="bg-white text-black py-2 px-5 transition duration-200 hover:opacity-50  hover:text-black m-1">
                          Github
                        </button>
                      </a>
                      <a href="https://apolline-diaz.github.io/Search-Movie-App/">
                        <button className="bg-white text-black py-2 px-5 transition duration-200 hover:opacity-50  hover:text-black m-1">
                          Démo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <h2 class="mt-3 text-xl">Site de référencement de cinéma</h2>
              </div>

              {/* PROJET 2 */}
              <div class="h-fit group">
                <div class="relative overflow-hidden">
                  <img
                    class="sm:w-3/4 w-full object-cover"
                    src={Project2}
                    alt=""
                  />
                  <div class="absolute sm:w-3/4 h-full w-full font-light bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="p-5 bg-gray-400-0.5">
                      <p className="text-white text-400 text-m mt-2 text-center leading-5">
                        Plateforme de vente en ligne de meubles d'occasion,
                        interagissant avec une base de données.
                      </p>
                    </div>
                    <div className="p-2 flex space-x-2 text-white">
                      <span className="text-sm border border-white rounded-xl p-1">
                        HTML
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        CSS
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        React
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        Express
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        MySQL
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        Sequelize
                      </span>
                    </div>
                    <div className="flex flex-row space-x-1 p-2">
                      <a href="https://github.com/apolline-diaz/E-Shop-Website-Second-hand-furniture-Adopteunmeuble">
                        <button className="bg-white text-black py-2 px-5 transition duration-200 hover:opacity-50  hover:text-black m-1">
                          Github
                        </button>
                      </a>
                      <a href="https://vimeo.com/924123048?share=copy">
                        <button className="bg-white text-black py-2 px-5 transition duration-200 hover:opacity-50  hover:text-black m-1">
                          Démo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <h2 class="mt-3 text-xl">Plateforme e-commerce</h2>
              </div>

              {/* PROJET 3 */}
              <div class="h-fit group">
                <div class="relative overflow-hidden">
                  <img
                    class="sm:w-3/4 w-full object-cover"
                    src={Project3}
                    alt=""
                  />
                  <div class="absolute sm:w-3/4 h-full w-full font-light bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="p-5 bg-gray-400-0.5">
                      <p className="text-white text-400 text-m mt-2 text-center leading-5">
                        Extension Chrome qui transforme l'espace "Nouvel onglet"
                        avec l'univers du studio Ghibli, avec des
                        fonctionnalités supplémentaires.
                      </p>
                    </div>
                    <div className="p-2 flex space-x-2 text-white">
                      <span className="text-sm border border-white rounded-xl p-1">
                        HTML
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        CSS
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        Javascript
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        API
                      </span>
                    </div>
                    <div className="flex flex-row space-x-1 p-2">
                      <a href="https://github.com/apolline-diaz/Ghibli-New-Tab-Browser-Extension">
                        <button className="bg-white text-black py-2 px-5 transition duration-200 hover:opacity-50  hover:text-black m-1">
                          Github
                        </button>
                      </a>
                      <a href="https://vimeo.com/927429709?share=copy">
                        <button className="bg-white text-black py-2 px-5 transition duration-200 hover:opacity-50  hover:text-black m-1">
                          Démo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <h2 class="mt-3 text-xl">Extension Chrome</h2>
              </div>

              {/* PROJET 4 */}

              <div class="h-fit group">
                <div class="relative overflow-hidden">
                  <img
                    class="sm:w-3/4 w-full object-cover"
                    src={Project4}
                    alt=""
                  />
                  <div class="absolute sm:w-3/4 h-full w-full font-light bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="p-5 bg-gray-400-0.5">
                      <p className="text-white text-400 text-m mt-2 text-center leading-5">
                        Page web affichant les différences de productions
                        d'électricité des pays en Europe, à partir de l'API
                        Electricity Maps.
                      </p>
                    </div>
                    <div className="p-2 flex space-x-2 text-white">
                      <span className="text-sm border border-white rounded-xl p-1">
                        HTML
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        CSS
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        Javascript
                      </span>
                      <span className="text-sm border border-white rounded-xl p-1">
                        API
                      </span>
                    </div>
                    <div className="flex flex-row space-x-1 p-2">
                      <a href="https://github.com/apolline-diaz/Datavisualisation-API-Electricity-Maps">
                        <button className="bg-white text-black py-2 px-5 transition duration-200 hover:opacity-50  hover:text-black m-1">
                          Github
                        </button>
                      </a>
                      {/* <a href="">
                        <button className="bg-white text-black py-2 px-5 transition duration-200 hover:opacity-50  hover:text-black m-1">
                          Démo
                        </button>
                      </a> */}
                    </div>
                  </div>
                </div>
                <h2 class="mt-3 text-xl">Datavisualisation</h2>
              </div>

              {/* PROJET 5 */}

              <div class="h-fit group">
                <div class="relative overflow-hidden">
                  <img
                    class="sm:w-1/3 w-full object-cover"
                    src={Project5}
                    alt=""
                  />
                  <div class="absolute sm:w-1/3 h-full w-full font-light bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="p-5 bg-gray-400-0.5">
                      <p className="text-white text-400 text-m mt-2 text-center leading-5">
                        Ebauche de jeu vidéo de plateforme sur la console
                        imaginaire Pico 8.
                      </p>
                    </div>
                    <div className="p-2 flex space-x-2 text-white">
                      <span className="text-sm border border-white rounded-xl p-1">
                        Lua
                      </span>
                    </div>
                    <div className="flex flex-row space-x-1 p-2">
                      <a href="https://github.com/apolline-diaz/Datavisualisation-API-Electricity-Maps">
                        <button className="bg-white text-black py-2 px-5 transition duration-200 hover:opacity-50  hover:text-black m-1">
                          Github
                        </button>
                      </a>
                      {/* <a href="">
                        <button className="bg-white text-black py-2 px-5 transition duration-200 hover:opacity-50  hover:text-black m-1">
                          Démo
                        </button>
                      </a> */}
                    </div>
                  </div>
                </div>
                <h2 class="mt-3 text-xl">Jeu vidéo Pico 8</h2>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="p-5">
          <div className="container m-auto px-4">
            <h2 className="text-4xl font-light mb-11">Expérience</h2>
          </div>
          <Timeline />
        </section>
        {/* CONTACT SECTION */}
        <section id="contact" className="p-5">
          <div className="container m-auto px-4">
            <h2 className="text-4xl font-light">Contact</h2>
          </div>
          <Contact />
        </section>
        {/* FOOTER */}
        <section className="py-10">
          <div className="container m-auto px-4"></div>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
