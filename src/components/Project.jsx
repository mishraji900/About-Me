import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";



const Project = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Only open the project details on large screens (screen width > 768px)
    if (window.innerWidth > 1020) {
      setIsOpen(true);
    }
  };

  return (
    <div className="w-fit mx-auto lg:p-12 py-6 px-2 lg:bg-transparent bg-zinc-700 rounded-2xl">
      <div className="lg:w-96 w-64 h-fit lg:block flex flex-col group" onClick={handleClick}>
        <h1 className="text-[#923AE4] text-center pb-3 block lg:hidden text-2xl font-semibold">
          {data.name}
        </h1>
        <div className="lg:relative block overflow-hidden">
          <img src={data.image} alt="image" />
          <div className="absolute bg-zinc-800/80 lg:flex items-center justify-center -top-1/2 h-full w-full group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hidden">
            <h1 className="text-[#ffff] text-2xl font-semibold">{data.name}</h1>
          </div>
        </div>
        <p className='text-white text-xs pt-3'>Date Completed: {data.date}</p>
        <p className="text-white pt-3 block lg:hidden text-start">{data.description}</p>
        <a href={data.urlto} className="ml-auto mr-auto" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#923AE4] my-3 p-2 rounded-full text-white font-medium text-lg lg:hidden">
            Visit {data.name}
          </button>
        </a>
      </div>
      <ProjectDetails isOpen={isOpen} Project={() => setIsOpen(false)} data={data} />
    </div>
  );
};

export default Project;
