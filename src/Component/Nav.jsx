import React from "react";

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-between py-6">
        <div>
          <a
            href="#"
            className="text-2xl font-bold capitalize font-poppins text-whites"
          >
            Skill <span className="text-secondColor">Shoot</span>
          </a>
        </div>
        <div>
          <ul className="flex items-center gap-x-8">
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
        <div className="flex items-center gap-x-5">
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
        </div>
      </div>
    </>
  );
};

export default Nav;
