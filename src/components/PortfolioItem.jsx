import React from "react";

function PortfolioItem({
  title,
  description,
  imgUrl,
  stack,
  linkGit,
  linkDemo,
}) {
  function uppercase(str) {
    return str.toUpperCase();
  }

  return (
    <div className='hover group container flex justify-center items-center mx-auto content-div bg-cover relative'>
      <img className='aspect-square object-cover' src={imgUrl} />
      <div className='opacity-0 group-hover:opacity-90 bg-black absolute inset-0 flex flex-col justify-center items-center p-5'>
        <span className='text-white tracking-wider text-center p-4 sm:p-3'>
          <h3 className='leading-tight md:leading-snug lg:leading-tight text-md sm:text-base md:text-base lg:text-xl font-medium mb-1'>
            {uppercase(title)}
          </h3>
          <p className=' md:leading-5 text-base sm:text-base md:text-base font-light mb-3'>
            {description}
          </p>
          <p className='flex flex-wrap gap-2 flex-row items-center justify-center text-base sm:text-base md:text-base '>
            {stack.map((item) => (
              <span className='rounded-full inline-block px-2 py-1 font-medium border border-white'>
                {item}
              </span>
            ))}
          </p>
        </span>
        <div className='sm:pt-0 md:pt-0 text-center'>
          <a href={linkGit}>
            <button className='rounded-full text-center px-2 py-2 xs:px-2 xs:py-2 sm:px-4 sm:py-3 m-2 sm:m-1 md:m-2 bg-white text-black font-medium text-base sm:text-base md:text-base hover:bg-black hover:text-white'>
              Github
            </button>
          </a>
          {linkDemo && (
            <a href={linkDemo}>
              <button className='rounded-full text-center px-2 py-2 xs:px-2 xs:py-2 sm:px-4 sm:py-3 m-2 sm:m-1 md:m-2 bg-white text-black font-medium text-base sm:text-base md:text-base  hover:bg-black hover:text-white'>
                Démo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
