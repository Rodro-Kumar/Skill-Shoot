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
      <div className="pt-[100px] pb-[50px]">
        <div className="container">
          <div className="flex items-center flex-col justify-center text-center">
            <h3 className="font-poppins font-semibold text-4xl text-black">
              Trusted more than <span className="text-secondColor">100+</span>{" "}
              in the world
            </h3>
            <p className="font-poppins font-normal text-[#808080] text-base pt-[10px] max-w-[545px]">
              they have asked us more than 3 times to teach their employees
              about various things. to improve their skills
            </p>
            <div className="flex items-center justify-between w-full pt-[50px]">
              {allCompany.map((item, index) => (
                <img src={item} alt={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
