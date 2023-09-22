
import Info from "../components/Info";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Resume from "../components/Resume";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
  return (
    <main className="lg:p-[70px] p-10 bg-zinc-900">
      <section className="about ">
        <h2 className="section-title  text-white lg:text-4xl text-2xl font-bold mb-[70px] text-center">
          About <span className="text-[#923AE4]">Me</span>
        </h2>

        <div className="about__container lg:grid grid-cols-[2fr,1fr]">
          <div className="about__info">
            <h3 className="section__subtitle text-xl pb-4 text-white">
              Personal <span className="text-[#923AE4]">Infos</span>
            </h3>
            <ul className="info__list gap-y-4 lg:grid grid-cols-[2fr,1fr] text-white">
              <Info />
            </ul>
            <p className="leading-8 my-[16px]  lg:text-base text-gray-300 lg:font-normal font-medium flex gap-x-12">
            <a href="https://github.com/mishraji900" target="blank" className=" flex">
              <GitHubIcon />
              <span className="lg:flex hidden">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mayank-mishra-353392274/" target="blank" className="flex">
              <LinkedInIcon />
              <span className="lg:flex hidden">Linkedin</span>
            </a>
          </p>
            <a
              href="https://drive.google.com/file/d/195Hq36V3rmOhaVkL5kbLW2fa-WKoDqlA/view?usp=sharing"
              target="blank"
              className="button my-[16px] lg:mx-[32px] h-10 block text-[#923AE4] border border-[#923Ae4] pt-2 lg:pr-16 pr-14 pl-9 rounded-[35px] font-medium text-sm relative w-fit button overflow-hidden transition-all duration-300 ease-in-out lg:z-0 z-10 mr-auto"
            >
              Resume
              <span className="bg-[#923AE4] absolute lg:right-0 -right-0.5 -top-0 rounded-full text-[#ffff] h-10 w-10 py-2 px-2">
                <ArrowForwardIcon />
              </span>
            </a>
          </div>
          <div className="stats lg:grid flex flex-col lg:gap-y-0 gap-y-10 grid-cols-[2fr,1fr] text-white lg:px-52 gap-x-10 px-10">
            <Stats />
          </div>
        </div>
      </section>
      <div className="border-t-2 w-1/2 ml-auto mr-auto my-10" />
      <section className="skills">
        <h2 className="section-title  text-white lg:text-4xl text-2xl font-bold mb-[70px] text-center">
          My <span className="text-[#923AE4]">Skills</span>
        </h2>
        <div className="skills__container ">
          <Skills/>
        </div>
      </section>
      <div className="border-t-2 w-1/2 ml-auto mr-auto my-10" />
      <section className="resume">
        <h2 className="section-title  text-white lg:text-4xl text-2xl font-bold mb-[70px] text-center">
          Experience & <span className="text-[#923AE4]">Education</span>
        </h2>
        <div className="skills__container ">
          <Resume/>
        </div>
      </section>
    </main>
  );
};

export default About;
