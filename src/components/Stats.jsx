
import { stats } from "../assets/data";

const Stats = () => {
  return (
    <>
      {stats.map((item) => (
        <div key={item.id} className="py-5 border p-6 bg-zinc-700 h-fit">
          <h1 className="">
            <span className="text-[#923AE4] text-4xl font-bold">{item.no}</span>
            <p>
              {item.title}&nbsp;
              <br className="lg:block hidden"/>
              {item.description}
            </p>{" "}
          </h1>
        </div>
      ))}
    </>
  );
};

export default Stats;
