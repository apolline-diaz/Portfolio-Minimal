import React from "react";

function PortfolioItem({
  title,
  description,
  imgUrl,
  stack,
  linkGit,
  linkDemo,
}) {
  return (
    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden group container flex justify-center items-center mx-auto content-div bg-cover relative">
      <img src={imgUrl} />
      <div className="opacity-0 group-hover:opacity-90 bg-[black]/90 absolute inset-0 flex flex-col justify-center items-center">
        <span className="text-white tracking-wider text-center p-2">
          <h3 className="text-xl font-medium mb-1">{title}</h3>
          <p className="text-md font-light mb-3">{description}</p>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
            {stack.map((item) => (
              <span className="inline-block px-2 py-1 font-semibold border border-white">
                {item}
              </span>
            ))}
          </p>
        </span>
        <div className="pt-3 text-center">
          <a href={linkGit}>
            <button className="text-center px-4 py-3 m-2 bg-white text-black font-medium text-md hover:bg-black hover:text-white">
              Github
            </button>
          </a>
          <a href={linkDemo}>
            <button className="text-center px-4 py-3 m-2 bg-white text-black font-medium text-md hover:bg-black hover:text-white">
              Démo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default PortfolioItem;
