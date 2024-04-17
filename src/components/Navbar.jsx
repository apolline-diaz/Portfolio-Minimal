import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-[100] backdrop-blur-sm w-[100%] scroll-smooth">
      <div className="container m-auto px-4 py-6">
        <div className="flex justify-between items-center h-1">
          <div>
            <a href="#home">
              <h1 className="px-5 font-medium text-xl transition duration-200 hover:opacity-50 cursor-pointer">
                Apolline Diaz
              </h1>
            </a>
          </div>
          <div className="lg:hidden">
            <button
              className="flex items-center px-3 py-2 text-black hover:text-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 9h14a1 1 0 110 2H3a1 1 0 110-2zm0-5h14a1 1 0 110 2H3a1 1 0 110-2zm0 10h14a1 1 0 110 2H3a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
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
        {isOpen && (
          <div className="lg:hidden">
            <ul className="mt-5 text-right">
              <li>
                <a
                  className="block px-4 py-2 text-md transition duration-200 hover:opacity-50"
                  href="#home"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-md transition duration-200 hover:opacity-50"
                  href="#projects"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-md transition duration-200 hover:opacity-50"
                  href="#experience"
                >
                  Expérience
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-md transition duration-200 hover:opacity-50"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
