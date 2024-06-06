import React from "react";
import portfolio from "../data/portfolio.js";
import PortfolioItem from "../components/PortfolioItem.jsx";

function Portfolio() {
  return (
    <div className='mx-auto'>
      <div className='grid sm:grid-col md:grid-cols-2 gap-4'>
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            stack={project.stack}
            linkGit={project.linkGit}
            linkDemo={project.linkDemo}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
