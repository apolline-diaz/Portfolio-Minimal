import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Timeline from "./components/Timeline.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Portfolio from "./components/Portfolio.jsx";
import LinkedIn from "/assets/linkedin.png";
import Github from "/assets/github.png";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
    });
  }, []);

  return (
    <>
      {/* NAVBAR SECTION */}
      <Navbar />
      <main>
        {/* HOME SECTION */}

        <section id='home' className='h-full w-full'>
          <div className='bg-[url("/assets/home_background.png")] h-screen w-full bg-cover bg-center '>
            <div
              className='container justify-center items-center h-full max-w-[700px] mx-auto px-10 py-20 text-left m-auto flex flex-col gap-2 '
              data-aos='fade-up'
            >
              <h2 className='font-light text-4xl md:text-5xl xl:text-6xl mb-3'>
                Hello, <br />
                I'm Apolline Diaz
              </h2>
              <div>
                <h2 className='font-bold text-2xl sm:text-2xl md:text-3xl'>
                  Développeuse full stack
                </h2>
              </div>

              <div>
                <p className='font-light text-justify text-l sm:text-md md:text-xl w-50 max-w-4xl mb-2'>
                  Passionnée par la création audiovisuelle et multimédia, je me
                  suis lancée dans le développement, après plusieurs années dans
                  le milieu du cinéma. Grâce à ma formation à Ada Tech School,
                  j'ai appris à réaliser des applications web et mobiles.
                  Aujourd'hui, je développe de nouvelles compétences pour me
                  spécialiser dans la programmation orientée vers le design, la
                  valeur utilisateur et l'expérience interactive.
                </p>
              </div>
              <div className='space-x-3 flex flex-cols items-center'>
                <button
                  onClick={() =>
                    window.open("./assets/CV_ApollineDiaz.pdf", "_blank")
                  }
                  className='bg-black text-white font-light  p-2 transition duration-200 hover:opacity-50'
                >
                  CV
                </button>
                {/* <a href="mailto:apolline.diaz@gmail.com">
                  <button className="bg-black text-white font-light p-2 transition duration-200 hover:opacity-50">
                    Contact
                  </button>
                </a> */}
                <a
                  href='https://github.com/apolline-diaz'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={Github}
                    alt='Github'
                    className='cursor-pointer  w-8 h-8 transition duration-200 hover:opacity-50 '
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/apolline-diaz-938783153/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={LinkedIn}
                    alt='LinkedIn'
                    className='cursor-pointer w-8 h-8 transition duration-200 hover:opacity-50'
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* PROJECTS SECTION */}
        <section
          id='projects'
          className='p-5 justify-center items-center max-w-[700px] mx-auto'
        >
          <div className='container  m-auto px-4'>
            <h2 className='text-4xl font-light my-5'>Projets</h2>
            <p className='text-base font-light md:text-lg text-justify mb-5'>
              Chaque nouveau projet est une opportunité de prendre en main une
              nouvelle technologie, se l'approprier et en exploiter son
              potentiel. Je me consacre autant à la conception et l'amélioration
              du design qu'à la construction de l'architecture des sites et le
              traitement des bases de données. Avant de faire la déco d'une
              maison, il ne faut pas oublier ses fondements!
            </p>
            <div className='grid grid-cols-1 sm:grid-col md:grid-col lg:grid-col gap-10'>
              <Portfolio />
            </div>
            <h2 className='text-2xl font-light my-5'>Compétences techniques</h2>
            <Skills />
          </div>
        </section>
        {/* EXPERIENCE SECTION */}
        <section id='experience' className='p-5 max-w-[700px] mx-auto'>
          <div className='container m-auto px-4 mb-10'>
            <h2 className='text-4xl font-light my-5'>Expérience</h2>
            <p className='text-base font-light md:text-lg text-justify'>
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
                className='bg-black text-white font-light  p-1 transition duration-200 hover:opacity-50 cursor-pointer'
              >
                portfolio
              </a>{" "}
              !
            </p>
          </div>
          <Timeline />
        </section>
        {/* CONTACT SECTION */}
        <section id='contact' className='p-5 max-w-[700px] mx-auto'>
          <div className='container m-auto px-4 mb-10'>
            <h2 className='text-4xl font-light'>Contact</h2>
          </div>
          <Contact />
        </section>
        {/* FOOTER */}
        <section className='py-10'>
          <div className='container m-auto px-4'></div>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
