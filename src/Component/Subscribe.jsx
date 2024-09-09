import React from "react";
import vector from "../assets/Subscribe/vector.png";

const Subscribe = () => {
  return (
    <div id="Subscribe" className="mb-[100px]">
      <div className="container">
        <div className="bg-thirdColor py-[70px] px-16 rounded-2xl relative">
          {/* round shap */}
          <div className="overflow-hidden w-[80px] h-[80px] absolute top-0 left-0 rounded-2xl">
            <div className="w-[73px] h-[73px] bg-primaryColor rounded-full absolute top-[-11px] left-[-9px]"></div>
          </div>

          {/* content */}
          <div className="flex justify-between items-center">
            <div className="max-w-[630px]">
              <h5 className="text-4xl font-semibold font-poppins w-full leading-[50px]">
                <span className="text-secondColor">Improve</span>{" "}
                <span className="text-blacks">
                  your skills, and reach your career as soon as possible
                </span>
              </h5>
            </div>
            <div className="flex items-center gap-x-5">
              <button className="py-[15px] px-[25px] rounded bg-secondColor text-whites capitalize font-poppins font-bold text-base hover:bg-[#b97959] transition-all cursor-default">
                Join Now
              </button>
              <button className="py-[15px] px-[25px] rounded bg-primaryColor text-whites capitalize font-poppins font-bold text-base hover:bg-[#2b6e60] transition-all cursor-default">
                Subscribe Course
              </button>
            </div>
          </div>
          {/* vector */}
          <div className="absolute bottom-[-20px] right-[40%]">
            <img src={vector} alt={vector} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
