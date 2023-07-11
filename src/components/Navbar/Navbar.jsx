import { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../assets/data";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import './Navbar.css'

const Navbar = () => {
  const [showMenue, setShowMenue] = useState(false);

  return (
    <nav className="lg:fixed lg:inset-y-0 lg:right-8 lg:flex lg:items-center bg-zinc-900 py-6">
      <div className="lg:block hidden">
        <ul className="">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className=" m-5" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#EDEDED] bg-[#923AE4] w-10 h-10 rounded-full flex relative p-1 gap-2 nav__item"
                      : "bg-[#666666] w-10 h-10 rounded-full flex relative text-[#ffff] p-1 gap-2 hover:text-[#ffff] hover:bg-[#923AE4] nav__item"
                  }
                >
                  <div className="text-xl m-auto">{icon}</div>
                  <h3 className="font-medium absolute top-0 right-0 bg-[#923AE4] h-full leading-10 rounded-3xl px-6 text-sm text-[#ffff] nav__name  ">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`${
          showMenue
            ? "bg-[#EDEDED] fixed inset-y-0 left-[50%] w-1/2 py-5 px-3 transition-all duration-500 ease-cubic-bezier"
            : "bg-[#EDEDED] fixed inset-y-0 left-full w-full py-5 px-3 transition-all duration-500 ease-cubic-bezier"
        }`}
      >
        <ul className="nav__list">
          <div className="ml-36"
          onClick={() => setShowMenue(!showMenue)}>
          
          </div>
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav__items" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 border-b-2 border-[#DEDEDE] p-1 text-[#923AE4]"
                      : "flex items-center gap-2 border-b-2 border-[#DEDEDE] p-1 text-[#666666]"
                  }
                  onClick={() => setShowMenue(!showMenue)}
                >
                  <div className="text-2xl">{icon}</div>
                  <h3 className="font-medium">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="fixed top-1.5 right-1.5 w-8 h-8 bg-[#EDEDED] rounded-md px-1 py-0.5 lg:hidden ml-auto mr-2"
        onClick={() => setShowMenue(!showMenue)}
      >
        {showMenue ? (
          <CloseIcon className="text-[#666666]" />
        ) : (
          <MenuIcon className="text-[#666666]" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
