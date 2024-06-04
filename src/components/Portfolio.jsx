import React from "react";
import portfolio from "../data/portfolio.js";
import PortfolioItem from "../components/PortfolioItem.jsx";

function Portfolio() {
  return (
    <div className='max-w-[700px] mx-auto'>
      <div className='grid md:grid-cols-2 sm:grid-col gap-4'>
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
