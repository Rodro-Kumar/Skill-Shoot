import React, { useState, useRef, useEffect } from "react";
import design1 from "../assets/Footer/artLine.png";
import design2 from "../assets/Footer/roundArt.png";

const Nav = () => {
  const [open, setopen] = useState(false);
  const menuref = useRef();
  console.log(open);

  const HandleMenu = () => {
    setopen(true);
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!menuref.current.contains(e.target)) {
        setopen(false);
      }
    });
  }, []);
  return (
    <>
      <div ref={menuref} className="flex items-center justify-between py-6">
        <div>
          <a
            href="#"
            className="text-2xl font-bold capitalize font-poppins text-whites"
          >
            Skill <span className="text-secondColor">Shoot</span>
          </a>
        </div>
        {/* Desktop view menu */}
        <div>
          <ul className="items-center gap-x-8 hidden lg:flex">
            {["Home", "Course", "Subscribe", "About", "Testimoni"].map(
              (item) => (
                <li>
                  <a
                    href="#"
                    className="font-poppins font-normal text-whites text-[18px] hover:opacity-70 transition-all"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        {/* Mobile view menu */}
        {open && (
          <div className="bg-[#0000008f] block lg:hidden w-full h-full fixed top-0 left-0 z-[111]"></div>
        )}

        <div
          className={`bg-[#ffffff42] backdrop-blur-md z-[999] w-[50%] fixed h-full top-0 ${
            open
              ? "right-0 transition-all duration-500 lg:hidden"
              : "right-[-100%] transition-all duration-300 lg:hidden"
          }`}
        >
          <div className="absolute bottom-[40px] right-[80px] opacity-70">
            <img src={design1} alt={design1} />
          </div>
          <div className="absolute top-[50px] left-[50px] opacity-70">
            <img src={design2} alt={design2} />
          </div>
          <ul className="pt-[200px] items-center gap-y-8 flex flex-col">
            {["Home", "Course", "Subscribe", "About", "Testimoni"].map(
              (item) => (
                <li>
                  <a
                    href="#"
                    className="font-poppins font-normal text-whites text-[18px] hover:opacity-70 transition-all"
                  >
                    {item}
                  </a>
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
              className="font-poppins text-[18px] font-normal text-whites"
            >
              Login
            </a>
          </div>
          <div>
            {" "}
            <button className="text-[18px] font-poppins text-whites font-normal py-2 px-11 rounded-lg bg-secondColor hover:bg-[#f59f75] transition-all">
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
          className="flex md:hidden flex-wrap w-[32px] gap-1 cursor-pointer"
          onClick={HandleMenu}
        >
          <div className="w-3 h-3 rounded-sm bg-white"></div>
          <div className="w-3 h-3 rounded-sm bg-white"></div>
          <div className="w-3 h-3 rounded-sm bg-white"></div>
          <div className="w-3 h-3 rounded-sm bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Nav;
