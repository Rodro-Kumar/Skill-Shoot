import React, { useEffect, useState } from "react";
import design1 from "../assets/Footer/artLine.png";
import design2 from "../assets/Footer/roundArt.png";
import { Link } from "react-scroll";

const Nav = () => {
  const [open, setopen] = useState(false);
  const [scroll, setscroll] = useState(false);

  const HandleMenu = () => {
    setopen(true);
  };

  const scrollNav = () => {
    if (window.scrollY >= 200) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };

  window.addEventListener("scroll", scrollNav);

  return (
    <>
      <div
        className={` px-4 ${
          scroll
            ? "fixed bg-primaryColor z-[999] duration-500 shadow-lg transition-all w-full py-4"
            : "bg-transparent py-6 px-4 shadow-none"
        }`}
      >
        <div className="container flex items-center z-[999] justify-between">
          <div>
            <Link
              to="#"
              spy={true}
              smooth={true}
              offset={10}
              duration={1500}
              className="md:text-2xl text-xl  font-bold capitalize font-poppins text-whites"
            >
              Skill <span className="text-secondColor">Shoot</span>
            </Link>
          </div>
          {/* Desktop view menu */}
          <div>
            <ul className={`items-center gap-x-8 hidden lg:flex`}>
              {["Home", "Course", "Subscribe", "About", "Testimoni"].map(
                (item) => (
                  <li>
                    <Link
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={10}
                      duration={1500}
                      className="font-poppins cursor-pointer font-normal text-whites text-[18px] hover:opacity-70 transition-all"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Mobile view menu */}
          {open && (
            <div
              onClick={() => setopen(false)}
              className="bg-[#0000008f] block lg:hidden w-full h-full fixed top-0 left-0 z-[111]"
            ></div>
          )}

          <div
            className={`bg-[#ffffff42] backdrop-blur-md z-[999] w-[50%] fixed h-full top-0 ${
              open
                ? "right-0 transition-all duration-500 lg:hidden"
                : "right-[-100%] transition-all duration-300 lg:hidden"
            }`}
          >
            <div className="absolute bottom-[40px] sm:bottom-[20px] md:bottom-[150px] right-[80px] sm:right-[40px] opacity-70">
              <img src={design1} alt={design1} />
            </div>
            <div className="absolute top-[50px] sm:top-[20px] left-[50px] md:top-[150px] sm:left-[40px] opacity-70">
              <img src={design2} alt={design2} />
            </div>
            <ul className="absolute left-[50%] -translate-y-[50%] top-[50%] -translate-x-[50%] items-center gap-y-8 flex flex-col">
              {["Home", "Course", "Subscribe", "About", "Testimoni"].map(
                (item) => (
                  <li>
                    <Link
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={10}
                      duration={1500}
                      onClick={() => setopen(false)}
                      className="font-poppins cursor-pointer font-normal text-whites text-[18px] hover:opacity-70 transition-all"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Login & Register Button */}
          <div className="md:flex hidden items-center gap-x-5">
            <div>
              <a
                href="#"
                className="font-poppins text-[18px] md:text-base lg:text-[18px] font-normal text-whites"
              >
                Login
              </a>
            </div>
            <div>
              {" "}
              <button className="md:text-base lg:text-[18px] font-poppins text-whites font-normal py-2 px-11 rounded-lg bg-secondColor hover:bg-[#f59f75] transition-all">
                Register
              </button>
            </div>
            {/* Menubar */}
            <div
              className="flex lg:hidden flex-wrap w-[32px] gap-1 cursor-pointer"
              onClick={HandleMenu}
            >
              <div className="w-3 h-3 rounded-sm bg-white"></div>
              <div className="w-3 h-3 rounded-sm bg-white"></div>
              <div className="w-3 h-3 rounded-sm bg-white"></div>
              <div className="w-3 h-3 rounded-sm bg-white"></div>
            </div>
          </div>
          {/* Menubar */}
          <div
            className={`flex md:hidden flex-wrap w-[32px] cursor-pointer ${
              open ? "gap-[6px] transition-all opacity-0" : "gap-1 opacity-[1]"
            }`}
            onClick={HandleMenu}
          >
            <div className="w-[9px] h-[9px] rounded-sm bg-white"></div>
            <div className="w-[9px] h-[9px] rounded-sm bg-white"></div>
            <div className="w-[9px] h-[9px] rounded-sm bg-white"></div>
            <div className="w-[9px] h-[9px] rounded-sm bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
