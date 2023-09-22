
import { skills } from "../assets/data";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <div className="lg:h-full lg:w-4/5 ml-auto mr-auto grid lg:grid-cols-4 grid-cols-2 gap-8 ">
      {skills.map((item) => (
        <div className="progress_box" key={item.id}>
          <div className="progress__circle lg:pl-8 py-3 ">
            <CircularProgressbar
              value={parseInt(item.percentage)}
              maxValue={100}
              text={`${item.percentage}%`}
              styles={buildStyles({
                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: "#923AE4",
                textColor: "#ffff",
                trailColor: "transparent",
                backgroundColor: "#923AE4",
              })}
            />
          </div>
          <h1 className="justify-center flex gap-3 text-[#ffff] font-bold text-xl">
            {item.title}
            <img
              src={item.img}
              alt="item img"
              className={`w-10 rounded-full ${
                item.id === 7 || item.id === 9 ? "bg-white" : "bg-transparent"
              }`}
            />
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Skills;
