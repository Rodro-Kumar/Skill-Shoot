import React from "react";
import childImg from "../assets/Discount/child.png";

const Discount = () => {
  return (
    <div className="py-[100px]">
      <div className="container">
        <div className="bg-thirdColor rounded-xl relative">
          <div className="bg-[url(src/assets/Discount/art.png)]  bg-center rounded-xl py-14 px-16 bg-cover">
            <h4 className="font-poppins font-semibold text-4xl text-black max-w-[586px] leading-[55px] pb-7">
              Happy <span className="text-secondColor">Chinese New Year</span>,
              20% discount for you today
            </h4>
            <button className="font-poppins font-bold text-xl text-whites capitalize rounded py-[15px] px-[25px] bg-primaryColor hover:bg-[#2b6e60] transition-all">
              Subscribe Course
            </button>
          </div>
          <div className="absolute top-[-126px] right-[127px]">
            <img src={childImg} alt={childImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
