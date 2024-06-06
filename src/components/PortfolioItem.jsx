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
    <div>
      <div className='hover group container flex justify-center items-center mx-auto content-div bg-cover relative'>
        <img
          className='aspect-square xs:aspect-square sm:aspect-video object-cover'
          src={imgUrl}
        />
        <div className='opacity-0 group-hover:opacity-90 bg-black absolute inset-0 flex flex-col justify-center items-center p-5 md:p-2'>
          <span className='text-white tracking-wider text-center p-4 sm:p-3'>
            <p className=' md:leading-5 text-base sm:text-base md:text-xs lg:text-xs font-light mb-3'>
              {description}
            </p>
            <p className='flex flex-wrap gap-2 lg:gap-1 flex-row items-center justify-center text-base xs:text-xs sm:text-base md:text-xs lg:text-xs'>
              {stack.map((item) => (
                <span className='rounded-full inline-block px-2 py-1 font-medium border border-white'>
                  {item}
                </span>
              ))}
            </p>
          </span>
          <div className='sm:pt-0 md:pt-0 text-center'>
            <a href={linkGit}>
              <button className='rounded-full text-center px-2 py-2 xs:px-2 xs:py-2 sm:px-4 sm:py-3 md:p-1  m-2 sm:m-1 md:m-1 lg:m-1  bg-white text-black font-medium  text-base xs:text-xs sm:text-base md:text-xs lg:text-xs hover:bg-black hover:text-white'>
                Github
              </button>
            </a>
            {linkDemo && (
              <a href={linkDemo}>
                <button className='rounded-full text-center px-2 py-2 xs:px-2 xs:py-2 sm:px-4 sm:py-3  md:p-1 m-2 sm:m-1 md:m-1 lg:m-1  bg-white text-black font-medium text-base xs:text-xs sm:text-base md:text-xs lg:text-xs hover:bg-black hover:text-white'>
                  Démo
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className='leading-tight mt-2 md:leading-snug lg:leading-tight text-md sm:text-base md:text-base lg:text-xl font-light mb-1'>
        {title}
      </h3>
    </div>
  );
}

export default PortfolioItem;
