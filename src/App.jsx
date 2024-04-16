import { useState } from "react";
import "./App.css";
import Timeline from "./components/Timeline.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Portfolio from "./components/Portfolio.jsx";
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
        <section id="home" className="h-full w-full">
          <div className='bg-[url("/assets/home_background.png")] h-screen w-full bg-cover bg-center'>
            <div className="container text-left m-auto px-9 py-20 flex flex-col gap-2">
              <h2 className="font-light text-4xl md:text-5xl xl:text-6xl mb-3">
                Hello, <br />
                I'm Apolline Diaz
              </h2>
              <div>
                <h2 className="font-bold text-2xl sm:text-2xl md:text-3xl">
                  Développeuse full stack
                </h2>
              </div>
              <p className="font-light text-xl sm:text-l md:text-xl lg:text-2xl gradient-text running-text">
                En recherche d'alternance dès septembre
              </p>
              <div>
                <p className="font-light text-l sm:text-md md:text-xl lg:text-2xl w-50 max-w-3xl mb-2">
                  Passionnée par la création audiovisuelle et multimédia, je me
                  suis lancée dans le développement, après plusieurs années dans
                  le milieu du cinéma. Je développe des projets orientés
                  front-end, en autodidacte. J'aime travailler en équipe et
                  continuer à apprendre de nouvelles technologies, grâce à ma
                  formation à Ada Tech School.
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
                <a
                  href="https://www.linkedin.com/in/apolline-diaz-938783153/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    className="cursor-pointe w-10 h-10 transition duration-200 hover:opacity-50"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* PROJECTS SECTION */}
        <section id="projects" className="p-5">
          <div className="container  m-auto px-4">
            <h2 className="text-4xl font-light my-5">Projets</h2>
            <p className="border border-gray p-2 text-justify mb-5">
              Chaque nouveau projet est une opportunité de prendre en main une
              nouvelle technologie, se l'approprier et en exploiter son
              potentiel. Je me consacre autant à la conception et l'amélioration
              du design qu'à la construction de l'architecture des sites et le
              traitement des bases de données. Avant de faire la déco d'une
              maison, il ne faut pas oublier ses fondements!
            </p>
            <div className="grid grid-cols-1 sm:grid-col md:grid-col lg:grid-col gap-10">
              <Portfolio />
            </div>
            <h2 className="text-2xl font-light my-5">Compétences techniques</h2>
            <Skills />
          </div>
        </section>
        {/* EXPERIENCE SECTION */}
        <section id="experience" className="p-5">
          <div className="container m-auto px-4 mb-10">
            <h2 className="text-4xl font-light my-5">Expérience</h2>
            <p className="border border-gray p-2 text-justify">
              Pendant mes années dans les salles de cinéma, j'avais une autre
              passion : partager des films peu connus du grand public, et
              trouver des moyens de les rendre plus accessibles. Internet était
              mon terrain de jeu pour explorer les trésors cachés du cinéma.{" "}
              <br />
              Jetez-un oeil à mon{" "}
              <a
                onClick={() =>
                  window.open(
                    "./assets/Portfolio_Apolline_Lawrens_Diaz.pdf",
                    "_blank"
                  )
                }
                className="bg-black text-white font-light  p-1 transition duration-200 hover:opacity-50 cursor-pointer"
              >
                portfolio
              </a>{" "}
              !
            </p>
          </div>
          <Timeline />
        </section>
        {/* CONTACT SECTION */}
        <section id="contact" className="p-5">
          <div className="container m-auto px-4 mb-10">
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
