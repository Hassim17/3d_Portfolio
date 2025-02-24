import React, { useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 h-20 bg-primary`}
    >
      <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-20 h-12  object-cover" />
          <p className="text-white text-[14px] font-bold cursor-pointer flex">
            Mohammed Hassim &nbsp;
            <span className='md:block hidden'> | Software Engineer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
              ${active == link.title ? "text-white" : "text-secondary"}
                hover:text-white text-lg font-medium cursor-pointer
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[24px] h-[24px] object-contain cursor-pointer" onClick={() => setToggle(prev => !prev )} />
          <div className={`${!toggle ? 'hidden' : 'flex'} black-gradient absolute top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="w-full flex flex-col justify-end items-start ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
                  ${active == link.title ? "text-white" : "text-secondary"}
                    hover:text-white text-md font-medium cursor-pointer px-4 py-3 hover:bg-white/10 w-full first:rounded-t-xl last:rounded-b-xl
                  `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(prev => !prev)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
