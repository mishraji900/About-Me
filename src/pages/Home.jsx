
import Profile from "../assets/assets/Home.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import './home.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  return (
    <section className="py-20 lg:grid grid-cols-[4.32fr,7.86fr] gap-y-[70px] sm:items-center min-h-screen flex flex-col bg-zinc-900">
      <div className="px-10">
        <img src={Profile} alt="" className="lg:h-full h-64 lg:w-full w-64  ml-auto mr-auto object-cover lg:rounded-3xl rounded-full shadow-lg lg:shadow-gray-300 shadow-[#923AE4] lg:relative z-10" />
      </div>
      <div className="home__comtent items-center">
        <div className="mr-auto lg:pt-5  w-4/5 ml-auto">
          <h1 className="text-[#ffff]  font-bold lg:text-5xl text-xl p-10">
            <span className="text-[#923AE4] text-3xl"><HorizontalRuleIcon />I'm Mayank Mishra,</span>

            <Typewriter
              options={{
                strings: ["A Web Designer & Developer", "A Software Developer"],
                autoStart: true,
                loop: true,
                cursor: ''
              }}
            />

          </h1>
          <p className="leading-8 my-[16px] mx-[32px] text-base text-gray-300 lg:font-normal font-medium">
            As an India-based Front-End Developer, Web Designer, and Software Developer, I'm dedicated
            to excelling in HTML, CSS, Tailwind CSS, and JavaScript for web and front-end development. I
            have a strong command of C++ and Java for software development. My passion for technology
            is fueled by curiosity and a thirst for knowledge. Let's embark on this journey of exploration and bring
            impactful digital experiences to life.
          </p>
          <p className="leading-8 my-[16px] mx-[32px] lg:text-base text-gray-300 lg:font-normal font-medium flex gap-x-12">
            <a href="https://github.com/mishraji900" target="blank" className=" flex">
              <GitHubIcon />
              <span className="lg:flex hidden">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mayank-mishra-353392274/" target="blank" className="flex">
              <LinkedInIcon />
              <span className="lg:flex hidden">Linkedin</span>
            </a>
          </p>
          <Link to="/about" className="my-[16px] lg:mx-[32px] h-14 block lg:text-[#923AE4] border lg:border-[#923Ae4] pt-4 lg:pr-16 pr-14 pb-4 lg:pl-9 rounded-[35px] font-medium text-sm relative w-fit button overflow-hidden transition-all duration-300 ease-in-out lg:z-0 z-10 ml-auto mr-auto">
            <span className="lg:block hidden">More About Me&nbsp;&nbsp;</span>
            <span className="bg-[#923AE4] absolute lg:-right-1 -top-0 h-14 w-14 rounded-full text-[#ffff] py-4 px-4">
              <ArrowForwardIcon />
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:block fixed hidden h-[200vh] w-full bg-[#923Ae4] top-[-50%] left-[-83%] rotate">

      </div>
    </section>
  );
};

export default Home;
