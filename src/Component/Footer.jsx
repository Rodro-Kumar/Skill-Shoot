import React from "react";
import lineArt from "../assets/Footer/artLine.png";
import roundArt from "../assets/Footer/roundArt.png";

const Footer = () => {
  return (
    <div className="bg-primaryColor pt-[100px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center pb-36 relative">
          {/* Line art */}
          <div className="absolute bottom-[130px] left-0">
            <img src={lineArt} alt="" />
          </div>
          <h5 className="font-poppins font-normal text-4xl text-whites">
            Subscribe to get notified about update
          </h5>
          <p className="text-base font-poppins font-normal text-paraGraphColor pt-2">
            By subscribing with your mail, you will accept our privacy policy
          </p>
          <div className="flex items-center gap-x-4 pt-16">
            <input
              type="text"
              placeholder="Enter your email"
              className="pl-[30px] pr-[220px] py-4 rounded placeholder:text-base placeholder:font-poppins placeholder:text-whites placeholder:font-normal bg-[#ffffff1f] text-whites text-base"
            />
            <button className="text-[18px] font-poppins font-medium text-whites px-6 rounded bg-secondColor py-[14px] hover:bg-[#db906b] transition-all">
              Subscribe us
            </button>
          </div>
          {/* round art */}
          <div className="absolute bottom-[160px] right-0">
            <img src={roundArt} alt="" />
          </div>
        </div>
        {/* footer nav */}
        <div className="flex items-center justify-between pb-10">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
