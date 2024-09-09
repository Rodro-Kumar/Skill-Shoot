import React from "react";
import company1 from "../assets/Company/dribble.png";
import company2 from "../assets/Company/google.png";
import company3 from "../assets/Company/micro.png";
import company4 from "../assets/Company/paypal.png";
import company5 from "../assets/Company/uber.png";

const Company = () => {
  const allCompany = [company1, company2, company3, company4, company5];

  return (
    <>
      <div className="md:pt-[100px] pt-[50px] pb-[50px] px-4 xl:px-0">
        <div className="container">
          <div className="flex items-center flex-col justify-center text-center">
            <h3 className="font-poppins font-semibold w-[230px] sm:w-full text-[18px] md:text-4xl text-black">
              Trusted more than <span className="text-secondColor">100+</span>{" "}
              in the world
            </h3>
            <p className="font-poppins font-normal text-[#808080] text-xs md:text-base pt-[10px] max-w-[545px]">
              they have asked us more than 3 times to teach their employees
              about various things. to improve their skills
            </p>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-5 w-full md:justify-between pt-[30px] md:pt-[50px]">
              {allCompany.map((item, index) => (
                <img
                  src={item}
                  alt={item}
                  key={index}
                  className="w-[80px] md:w-[150px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
