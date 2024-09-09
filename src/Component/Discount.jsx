import React from "react";
import childImg from "../assets/Discount/child.png";
import round from "../assets/Discount/round.png";

const Discount = () => {
  return (
    <div className="lg:py-[100px] pt-0 pb-[50px] px-4 xl:px-0">
      <div className="container">
        <div className="bg-thirdColor rounded-xl relative overflow-hidden lg:overflow-visible">
          <div className="bg-primaryColor rounded-full w-14 h-14 absolute top-[-10px] left-[-10px] block md:hidden"></div>
          <div className="bg-primaryColor rounded-full w-14 h-14 absolute bottom-[-10px] right-[-10px] block lg:hidden"></div>
          <div className="absolute bottom-[24px] left-[28px] xl:hidden">
            <img src={round} alt={round} />
          </div>
          <div className="bg-[url(src/assets/Discount/art.png)] flex flex-col items-center justify-center md:justify-start md:items-start md:text-start text-center xl:bg-center rounded-xl py-20 md:py-14 px-5 md:px-16 bg-cover">
            <h4 className="font-poppins font-semibold text-[18px] md:text-4xl text-black max-w-[586px] leading-[30px] md:leading-[55px] pb-4 md:pb-7">
              Happy <span className="text-secondColor">Chinese New Year</span>,
              20% discount for you today
            </h4>
            <button className="font-poppins font-bold text-sm md:text-xl text-whites capitalize rounded py-3 md:py-[15px] px-5 md:px-[25px] bg-primaryColor hover:bg-[#2b6e60] transition-all">
              Subscribe Course
            </button>
          </div>
          <div className="absolute xl:top-[-125px] lg:top-[-126px] lg:right-[69px] xl:right-[127px] hidden lg:block">
            <img src={childImg} alt={childImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
