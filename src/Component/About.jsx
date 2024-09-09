import React from "react";
import menImg from "../assets/About/men.png";
import line from "../assets/heroLine.png";
import img1 from "../assets/About/1.png";
import img2 from "../assets/About/1.png";
import img3 from "../assets/About/1.png";
import img4 from "../assets/About/1.png";
const About = () => {
  return (
    <div id="About" className="py-[100px]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* left */}
          <div>
            <img src={menImg} alt={menImg} />
          </div>
          {/* right */}
          <div>
            <div className="relative inline-block">
              <h3 className="font-poppins font-bold text-[48px]">
                <span className="text-blacks">Let us</span>{" "}
                <span className="text-primaryColor">Skill Shoot</span>
              </h3>
              <img
                src={line}
                alt={line}
                className="absolute bottom-0 right-0"
              />
            </div>
            <p className="text-paraGraphColor font-poppins font-normal text-base max-w-[522px] pt-9 pb-6">
              We are a company engaged in education with the aim of improving
              the skills of many people and so that younger people can reach the
              career paths they want.
            </p>
            <p className="text-paraGraphColor font-poppins font-normal text-base max-w-[522px] pb-9">
              we have been around since 2019 with currently 100+ updated
              materials and 15K members who have joined.
            </p>
            <div className="flex items-center flex-wrap justify-between max-w-[480px]">
              <div className="gap-y-[30px] flex flex-col">
                {" "}
                <div className="flex items-center gap-x-4">
                  <img src={img1} alt={img1} />
                  <p className="text-base font-poppins font-semibold text-blacks">
                    15K People Join
                  </p>
                </div>
                <div className="flex items-center gap-x-4">
                  <img src={img2} alt={img2} />
                  <p className="text-base font-poppins font-semibold text-blacks">
                    Trusted Mentor
                  </p>
                </div>
              </div>
              <div className="gap-y-[30px] flex flex-col">
                <div className="flex items-center gap-x-4">
                  <img src={img3} alt={img3} />
                  <p className="text-base font-poppins font-semibold text-blacks">
                    30+ Free Videos
                  </p>
                </div>
                <div className="flex items-center gap-x-4">
                  <img src={img4} alt={img4} />
                  <p className="text-base font-poppins font-semibold text-blacks">
                    100+ Premium Videos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
