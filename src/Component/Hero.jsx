import React from "react";
import heroImg from "../assets/hero.png";
import line from "../assets/heroLine.png";
import { GoArrowUpRight, GoChevronRight } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-between pt-[48px]">
        {/* Left */}
        <div>
          <div className="relative">
            <h1 className="text-6xl font-semibold font-poppins text-whites pb-[10px] max-w-[630px] leading-[100px]">
              There is always something new for us to learn
            </h1>
            <img
              src={line}
              alt=""
              className="absolute top-[92px] right-[164px]"
            />
          </div>

          <p className="font-poppins font-normal text-[18px] text-whites opacity-[60%] max-w-[527px]">
            we have created more than 100+ materials on various things that will
            help your career, with mentors who are experienced in their fields.
          </p>
          <div className="flex items-center pt-8 gap-x-4">
            <div className="group flex items-center px-6 py-3 text-xl font-bold rounded font-poppins text-whites gap-x-1 bg-secondColor cursor-pointer hover:bg-[#db906a] transition-all">
              Start Journey{" "}
              <span className="relative flex items-center">
                <GoArrowUpRight className="text-2xl group-hover:scale-0 transition-transform" />
                <GoChevronRight className="text-2xl absolute top-[-3px] left-[3px] rotate-[312deg] group-hover:opacity-100 opacity-0  transition-transform" />
              </span>
            </div>
            <div className="flex items-center gap-x-4 text-whites text-3xl">
              <a href="#">
                <RiInstagramFill />
              </a>
              <a href="#">
                <IoLogoTwitter />
              </a>
              <a href="#">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
        {/* Right */}
        <div>
          <img src={heroImg} alt={heroImg} className="w-[570px]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
