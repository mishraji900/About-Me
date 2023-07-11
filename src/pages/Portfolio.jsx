
import { projectdetails } from "../assets/data";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <main className="lg:p-70px p-10 bg-zinc-900">
      <section className="about">
        <h2 className="section-title text-white lg:text-4xl text-2xl font-bold mb-20 text-center border-b-2 w-fit ml-auto mr-auto">
          Port<span className="text-[#923AE4]">folio</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-5 w-3/4 ml-auto mr-auto">
          {projectdetails.map((item) => (
            <Project key={item.id} data={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
