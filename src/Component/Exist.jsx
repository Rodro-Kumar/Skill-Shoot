import React from "react";
import ceoImg from "../assets/ceo.png";
import img1 from "../assets/Exist/1.png";
import img2 from "../assets/Exist/2.png";
import img3 from "../assets/Exist/3.png";
import img4 from "../assets/Exist/4.png";

const Exist = () => {
  return (
    <div id="About" className="lg:pb-[100px] pb-[50px] pt-0 lg:pt-[40px] px-4 ">
      <div className="container">
        <div className="flex justify-between flex-col lg:flex-row items-center lg:items-start text-center lg:text-start">
          {/* left */}
          <div>
            <h3 className="md:text-4xl text-[18px] font-poppins font-semibold text-blacks">
              Why do we <span className="text-secondColor">exist?</span>
            </h3>
            <p className="font-poppins font-normal text-xs md:text-base text-[#808080] pt-2 md:pt-5 max-w-[424px]">
              Because we know that many people or companies have the same
              problem when it comes to how difficult it is to improve their
              skills
            </p>
            <div className="flex items-center gap-x-3 py-5 md:py-[30px] border-b-2 border-b-[#80808065]">
              <img src={ceoImg} alt={ceoImg} className="w-[50px] md:w-[70px]" />
              <div>
                <h4 className="font-poppins font-semibold text-base md:text-[18px] text-blacks">
                  Jerony Pulquosta
                </h4>
                <p className="font-poppins font-normal text-xs text-[#808080]">
                  CEO Skill Shoot
                </p>
              </div>
            </div>
            <div className="pt-5 md:pt-[30px] flex justify-center md:justify-start items-center gap-x-10 md:gap-x-16 pb-[50px]">
              <div>
                <h5 className="font-poppins font-bold text-blacks text-2xl md:text-4xl">
                  100+
                </h5>
                <span className="text-xs font-poppins font-normal text-[#808080]">
                  Updated Material
                </span>
              </div>
              <div>
                <h5 className="font-poppins font-bold text-blacks text-2xl md:text-4xl">
                  15K+
                </h5>
                <span className="text-xs font-poppins font-normal text-[#808080]">
                  Updated Material
                </span>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center lg:items-start justify-center lg:justify-start flex-wrap gap-x-14 gap-y-10 md:gap-y-16 max-w-[602px]">
            <div className="max-w-[270px] flex flex-col items-center lg:items-start">
              <img src={img1} alt={img1} />
              <h4 className="text-[18px] md:text-2xl font-poppins font-semibold text-primaryColor pt-7 pb-2">
                Material Limitations
              </h4>
              <p className="font-poppins font-normal text-xs md:text-base text-[#808080]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="max-w-[270px] flex flex-col items-center lg:items-start">
              <img src={img2} alt={img2} />
              <h4 className="text-[18px] md:text-2xl font-poppins font-semibold text-primaryColor pt-7 pb-2">
                Unprofessional Mentor
              </h4>
              <p className="font-poppins font-normal text-xs md:text-base text-[#808080]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="max-w-[270px] flex flex-col items-center lg:items-start">
              <img src={img3} alt={img3} />
              <h4 className="text-[18px] md:text-2xl font-poppins font-semibold text-primaryColor pt-7 pb-2">
                Video Quality
              </h4>
              <p className="font-poppins font-normal text-xs md:text-base text-[#808080]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="max-w-[270px] flex flex-col items-center lg:items-start">
              <img src={img4} alt={img4} />
              <h4 className="text-[18px] md:text-2xl font-poppins font-semibold text-primaryColor pt-7 pb-2">
                High Price
              </h4>
              <p className="font-poppins font-normal text-xs md:text-base text-[#808080]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exist;
