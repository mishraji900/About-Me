
import { resume } from "../assets/data";

const Resume = () => {
  return (
    <main className="lg:flex justify-between gap-x-20">
      <div >
        {resume.map((item) => (
          <div className="border-l-4 pl-9">
            <div
              key={item.id}
              className={`gap-3 bg-zinc-700 my-8 p-5 shadow-lg pb-14 shadow-[#923AE4] ${
                item.category === "experience" ? "flex flex-col" : "hidden"
              }`}
            >
              <div className=" bg-fuchsia-400  w-11 h-11 py-2.5 px-2.5 rounded-full border-4 relative right-20 -top-6">
                {item.icon}
              </div>
              <p className="bg-zinc-500 px-2 rounded-full w-fit text-xs text-white">{item.year}</p>
              <h1 className="text-[#923AE4] flex justify-between items-center text-2xl font-bold text-left">{item.title}<span className="text-base font-normal text-gray-200">{item.job}</span></h1>
              
              <p className="text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
      {resume.map((item) => (
          <div className="border-l-4 pl-9">
            <div
              key={item.id}
              className={`gap-3 w-5/6 bg-zinc-700 my-8 p-5 shadow-lg pb-14 shadow-[#923AE4] ${
                item.category === "education" ? "flex flex-col" : "hidden"
              }`}
            >
              <div className=" bg-fuchsia-400  w-11 h-11 py-2.5 px-2.5 rounded-full border-4 relative right-20 -top-6">
                {item.icon}
              </div>
              <p className="bg-zinc-500 px-2 rounded-full w-fit text-xs text-white">{item.year}</p>
              <h1 className="text-[#923AE4] flex justify-between items-center text-2xl font-bold text-left">{item.title}<span className="text-base font-normal text-gray-200">{item.job}</span></h1>
              
              <p className="text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Resume;
