import React from "react";
import heroImg from "../assets/hero.png";
import line from "../assets/heroLine.png";
import { GoArrowUpRight, GoChevronRight } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import img1 from "../assets/ornamen.png";
import img2 from "../assets/ornamen_2.png";
import img3 from "../assets/ornamen_1.png";

const Hero = () => {
  return (
    <>
      <div className="container px-4">
        <div className="relative flex justify-center md:gap-x-6 lg:gap-x-0 md:text-start text-center items-center md:justify-between pt-[48px] pb-[40px] md:pb-0">
          {/*  */}

          <div className="absolute md:hidden top-0 left-0">
            <img src={img1} alt={img1} />
          </div>
          <div className="absolute md:hidden bottom-24 left-0">
            <img src={img2} alt={img2} />
          </div>
          <div className="absolute bottom-5 md:hidden right-0">
            <img src={img3} alt={img3} />
          </div>

          {/* Left */}
          <div>
            <div className="relative">
              <h1 className="lg:text-6xl text-[28px] font-semibold font-poppins text-whites pb-2 md:pb-[10px] max-w-[630px] leading-[50px] lg:leading-[100px]">
                There is always something new for us to learn
              </h1>
              <img
                src={line}
                alt=""
                className="absolute top-[44px] md:right-[151px] right-[108px] lg:top-[92px] lg:right-[51px] xl:right-[164px] w-[100px] lg:w-[218px]"
              />
            </div>

            <p className="font-poppins font-normal m-auto md:m-0 text-xs lg:text-[18px] text-whites opacity-[60%] max-w-[527px] lg:leading-[30px]">
              we have created more than 100+ materials on various things that
              will help your career, with mentors who are experienced in their
              fields.
            </p>
            <div
              className="flex flex-col md:flex-row gap-y-5
             items-center pt-8 gap-x-4"
            >
              <div className="group flex items-center px-4 lg:px-6 py-2 lg:py-3 text-base lg:text-xl font-bold rounded font-poppins text-whites gap-x-1 bg-secondColor cursor-pointer hover:bg-[#db906a] transition-all">
                Start Journey{" "}
                <span className="relative flex items-center">
                  <GoArrowUpRight className="md:text-2xl text-xl group-hover:scale-0 transition-transform" />
                  <GoChevronRight className="md:text-2xl text-xl absolute top-[-3px] left-[3px] rotate-[312deg] group-hover:opacity-100 opacity-0  transition-transform" />
                </span>
              </div>
              <div className="flex items-center gap-x-4 text-whites text-xl md:text-3xl">
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
          <div className="hidden md:block">
            <img src={heroImg} alt={heroImg} className="w-[570px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
