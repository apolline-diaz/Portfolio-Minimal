import { useState } from "react";
import "./App.css";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Project1 from "./assets/project-movie-website.png";
import Project2 from "./assets/project-plateforme.png";
import Project3 from "./assets/project-extension.png";
import Project4 from "./assets/project-datavisualisation.png";
import Project5 from "./assets/project-pico.png";
import LinkedIn from "./assets/linkedin.png";
import Github from "./assets/github.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header class="fixed backdrop-blur-sm w-[100%] z-100 border-b-2 border-black">
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <a href="#home">
                <h1 className="font-light text-xl hover:text-pink-300 hover:duration-300 cursor-pointer">
                  Apolline Diaz
                </h1>
              </a>
            </div>
            <div>
              <ul className="flex gap-4 transition-all ease-in-out duration-200 text-xl">
                <li>
                  <a
                    className="font-light hover:text-pink-300 hover:duration-300 cursor-pointer"
                    href="#projects"
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a
                    className="font-light hover:text-pink-300 hover:duration-300 cursor-pointer"
                    href="#technologies"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    className="font-light hover:text-pink-300 hover:duration-300 cursor-pointer"
                    href="#about-me"
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a
                    className="font-light hover:text-pink-300 hover:duration-300 cursor-pointer"
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
        {/* Intro/banner section */}
        <section id="home">
          <div className="container text-left m-auto px-4 py-32 sm:py-32 flex flex-col gap-6 ">
            <h2 className="font-light text-6xl ">Hello, I'm Apolline Diaz</h2>
            <div>
              <h2 className="font-bold text-5xl mt-1 gradient-text running-text">
                développeuse full stack
              </h2>
            </div>
            <div>
              <p className="font-thin mt-4 text-2xl w-50 max-w-2xl">
                Passionnée par la création audiovisuelle et multimédia, je me
                suis lancée dans le développement, après plusieurs années dans
                le milieu du cinéma. Je développe des projets axés sur le
                design.
              </p>
              {/* <p className="py-4 font-thin text-2xl">
                Vous cherchez une alternante en front-end à partir de juillet?
                Jetez un oeil à mon CV !
              </p> */}
            </div>
            {/* </div> */}
            {/* <img
              src=""              width={520}
              height={520}
              className="relative z-10 rounded-full w-[220px] m-auto sm:w-[520px]"
            /> */}
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-4xl font-light">Projets</h2>
            <div className="flex flex-col grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-11">
              {/* PROJET 1 */}
              <div class="h-fit group">
                <div class="relative overflow-hidden">
                  <img
                    class="h-full w-full object-cover"
                    src={Project1}
                    alt=""
                  />
                  <div class="absolute h-full w-full bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-2 bg-gray-400-0.5">
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
                        <button class="bg-pink-300 text-black rounded-md py-2 px-5 hover:bg-white hover:text-black m-1">
                          Github
                        </button>
                      </a>
                      <a href="https://apolline-diaz.github.io/Search-Movie-App/">
                        <button class="bg-pink-300 text-black rounded-md py-2 px-5 hover:bg-white hover:text-black m-1">
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
                    class="h-full w-full object-cover"
                    src={Project2}
                    alt=""
                  />
                  <div class="absolute h-full w-full bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-2 bg-gray-400-0.5">
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
                        <button class="bg-pink-300 text-black rounded-md py-2 px-5 hover:bg-white hover:text-black m-1">
                          Github
                        </button>
                      </a>
                      <a href="https://vimeo.com/924123048?share=copy">
                        <button class="bg-pink-300 text-black rounded-md py-2 px-5 hover:bg-white hover:text-black m-1">
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
                    class="h-full w-full object-cover"
                    src={Project3}
                    alt=""
                  />
                  <div class="absolute h-full w-full bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-2 bg-gray-400-0.5">
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
                        <button class="bg-pink-300 text-black rounded-md py-2 px-5 hover:bg-white hover:text-black m-1">
                          Github
                        </button>
                      </a>
                      <a href="https://vimeo.com/927429709?share=copy">
                        <button class="bg-pink-300 text-black rounded-md py-2 px-5 hover:bg-white hover:text-black m-1">
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
                    class="h-full w-full object-cover"
                    src={Project4}
                    alt=""
                  />
                  <div class="absolute h-full w-full bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-2 bg-gray-400-0.5">
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
                        <button class="bg-pink-300 text-black rounded-md py-2 px-5 hover:bg-white hover:text-black m-1">
                          Github
                        </button>
                      </a>
                      {/* <a href="">
                        <button class="bg-pink-300 text-black rounded-md py-2 px-5 hover:bg-white hover:text-black m-1">
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
                    class="h-full w-full object-cover"
                    src={Project5}
                    alt=""
                  />
                  <div class="absolute h-full w-full bg-black/90 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="p-2 bg-gray-400-0.5">
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
                        <button class="bg-pink-300 text-black rounded-md py-2 px-5 hover:bg-white hover:text-black m-1">
                          Github
                        </button>
                      </a>
                      {/* <a href="">
                        <button class="bg-pink-300 text-black rounded-md py-2 px-5 hover:bg-white hover:text-black m-1">
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
          {/* Technologies section */}
          <section id="technologies" className="py-10">
            <div className="container m-auto px-4">
              <h2 className="text-4xl font-light">Technologies</h2>
              <div className="mt-14">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">HTML</h2>
                    <p className="text-gray-500">Intermédiaire</p>
                  </div>
                  <span className="w-[40%] h-1 mt-2 bg-slate-600 bg-gradient-to-t from-pink-400 to-pink-200 block rounded-md"></span>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">CSS & Tailwind</h2>
                    <p className="text-gray-500">Intermédiaire</p>
                  </div>
                  <span className="w-[25%] h-1 mt-2 bg-slate-600 bg-gradient-to-t from-pink-400 to-pink-200 block rounded-md"></span>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">Javascript</h2>
                    <p className="text-gray-500">Débutant</p>
                  </div>
                  <span className="w-[20%] h-1 mt-2 bg-slate-600 bg-gradient-to-t from-pink-400 to-pink-200 block rounded-md"></span>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">React</h2>
                    <p className="text-gray-500">Débutant</p>
                  </div>
                  <span className="w-[10%] h-1 mt-2 bg-slate-600 bg-gradient-to-t from-pink-400 to-pink-200 block rounded-md"></span>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">UI Design in Figma</h2>
                    <p className="text-gray-500">Débutant</p>
                  </div>
                  <span className="w-[10%] h-1 mt-2 bg-slate-600 bg-gradient-to-t from-pink-400 to-pink-200 block rounded-md"></span>
                </div>
              </div>
            </div>
          </section>
          {/* Additional skills section */}
          <section>
            <div className="container m-auto px-4 py-8 ">
              <h2 className="text-2xl font-medium ">
                Technologies additionnelles
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 sm:mt-4 w-[80%] px-4">
                <div>
                  <p className="font-light before:w-3 before:h-3 before:bg-black before:block before:rounded-full before:mt-l before:-left-6 before:absolute relative left-3">
                    Git
                  </p>
                </div>
                <div>
                  <p className="font-light before:w-3 before:h-3 before:bg-black before:block before:rounded-full before:mt-l before:-left-6 before:absolute relative left-3">
                    Jira
                  </p>
                </div>
                <div>
                  <p className="font-light before:w-3 before:h-3 before:bg-black before:block before:rounded-full before:mt-l before:-left-6 before:absolute relative left-3">
                    Slack
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-2 sm:mt-4 w-[80%] px-4">
                <div>
                  <p className="font-light before:w-3 before:h-3 before:bg-black  before:block before:rounded-full before:mt-l before:-left-6 before:absolute relative left-3">
                    Wordpress
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* EXPERIENCE */}
        <section className="py-8">
          <div className="container m-auto px-4">
            <h2 className="text-4xl font-light">À propos</h2>
          </div>
          <Timeline />
        </section>
        {/* CONTACT */}
        <section className="py-10">
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
