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
    <div className='transform transition-transform duration-300 hover group container flex justify-center items-center mx-auto content-div bg-cover relative'>
      <img className='aspect-square object-cover' src={imgUrl} />
      <div className='opacity-0 group-hover:opacity-80 bg-[black]/90 absolute inset-0 flex flex-col justify-center items-center p-5'>
        <span className='text-white tracking-wider text-center p-4 sm:p-3'>
          <h3 className='text-l sm:text-xs md:text-sm lg:text-xl font-medium mb-1'>
            {title}
          </h3>
          <p className='text-xs sm:text-xs lg:text-sm font-light mb-3'>
            {description}
          </p>
          <p className='flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm'>
            {stack.map((item) => (
              <span className='inline-block px-2 py-1 font-medium border border-white'>
                {item}
              </span>
            ))}
          </p>
        </span>
        <div className='sm:pt-0 md:pt-2 text-center'>
          <a href={linkGit}>
            <button className='text-center px-4 py-3 sm:px-2 sm:py-1 lg:px-4 md:py-3 m-2 sm:m-1 md:m-2 bg-white text-black font-medium text-md sm:text-xs md:text-sm hover:bg-black hover:text-white'>
              Github
            </button>
          </a>
          <a href={linkDemo}>
            <button className='text-center px-4 py-3 sm:px-2 sm:py-1 lg:px-4 md:py-3 m-2 sm:m-1 md:m-2 bg-white text-black font-medium text-md sm:text-xs md:text-sm hover:bg-black hover:text-white'>
              Démo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
