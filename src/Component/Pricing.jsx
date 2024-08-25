import React from "react";
import { GiCheckMark } from "react-icons/gi";
import disignVector from "../assets/pricing_design.png";

const Pricing = () => {
  return (
    <div className="pb-[100px]">
      <div className="container">
        <div className="flex items-center justify-center flex-col text-center">
          <h4 className="text-4xl font-poppins font-semibold pb-[10px]">
            <span className="text-secondColor">Subscribe</span>{" "}
            <span className="text-blacks">with us now</span>
          </h4>
          <p className="text-base font-poppins font-normal text-paraGraphColor max-w-[545px] leading-[30px]">
            by subscribing now you will be able to access the material easily
            and cheaply, so you will be very efficient and benefit
          </p>
        </div>
        {/* price */}
        <div className="flex gap-x-[65px] pt-[50px] justify-center items-center">
          {/* Base */}
          <div className="max-w-[227px] h-[403px]">
            <h5 className="font-poppins pb-1">
              <span className="text-blacks text-4xl font-bold">$50</span>
              <span className="text-base font-normal text-paraGraphColor">
                / 1 month
              </span>
            </h5>
            <h4 className="font-poppins font-bold text-blacks text-[28px]">
              Base
            </h4>
            <p className="font-poppins text-paraGraphColor font-normal text-base pt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            {/* features */}
            <div className="flex flex-col items-start gap-y-[20px] pt-[18px] pb-6">
              <div className="flex items-center gap-x-[10px]">
                <span className="h-[24px] w-[24px] rounded-full bg-[#5243c23f] text-primaryColor flex items-center justify-center text-md">
                  <GiCheckMark />
                </span>
                <p className="text-base font-poppins font-normal text-blacks">
                  Access all videos
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <span className="h-[24px] w-[24px] rounded-full bg-[#5243c23f] text-primaryColor flex items-center justify-center text-md">
                  <GiCheckMark />
                </span>
                <p className="text-base font-poppins font-normal text-blacks">
                  Get Certificate
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <span className="h-[24px] w-[24px] rounded-full bg-[#5243c23f] text-primaryColor flex items-center justify-center text-md">
                  <GiCheckMark />
                </span>
                <p className="text-base font-poppins font-normal text-blacks">
                  Chat support
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <span className="h-[24px] w-[24px] rounded-full bg-[#5243c23f] text-primaryColor flex items-center justify-center text-md">
                  <GiCheckMark />
                </span>
                <p className="text-base font-poppins font-normal text-blacks">
                  Update Notification
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <span className="h-[24px] w-[24px] rounded-full bg-[#5243c23f] text-primaryColor flex items-center justify-center text-md">
                  <GiCheckMark />
                </span>
                <p className="text-base font-poppins font-normal text-blacks">
                  Download material
                </p>
              </div>
            </div>
            {/* Choose plan */}
            <button className="group py-3 text-secondColor text-base font-poppins font-semibold rounded-3xl bg-thirdColor w-full hover:bg-secondColor transition-all hover:text-whites">
              Choose plan
            </button>
          </div>
          {/* Pro */}

          <div className="max-w-[292px] z-40 relative rounded-[28px] bg-primaryColor shadow-2xl shadow-primaryColor">
            <div className="absolute top-0 right-[-35px] -z-10">
              <img src={disignVector} alt={disignVector} />
            </div>
            {/* Most Popular */}
            <div className="flex items-end justify-end pt-5 pr-5">
              <div className="font-poppins font-semibold text-whites uppercase py-2 px-4 rounded-2xl bg-secondColor tracking-[03px]">
                MOST POPULAR
              </div>
            </div>
            {/* Content */}
            <div className="px-[30px] pb-[30px] text-whites">
              <h5 className="font-poppins pb-3 pt-4">
                <span className="text-whites text-4xl font-bold">$100</span>
                <span className="text-base font-normal text-whites">
                  / 6 month
                </span>
              </h5>
              <h4 className="font-poppins font-bold text-whites text-[28px]">
                Base
              </h4>
              <p className="font-poppins text-whites font-normal text-base pt-1">
                Lorem Ipsum is simply dummy text of the printing
              </p>
              {/* features */}
              <div className="flex flex-col items-start gap-y-[20px] pt-[18px] pb-6">
                <div className="flex items-center gap-x-[10px]">
                  <span className="h-[24px] w-[24px] rounded-full bg-[#ffffff36] text-whites flex items-center justify-center text-md">
                    <GiCheckMark />
                  </span>
                  <p className="text-base font-poppins font-normal text-whites">
                    Access all videos
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <span className="h-[24px] w-[24px] rounded-full bg-[#ffffff36] text-whites flex items-center justify-center text-md">
                    <GiCheckMark />
                  </span>
                  <p className="text-base font-poppins font-normal text-whites">
                    Get Certificate
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <span className="h-[24px] w-[24px] rounded-full bg-[#ffffff36] text-whites flex items-center justify-center text-md">
                    <GiCheckMark />
                  </span>
                  <p className="text-base font-poppins font-normal text-whites">
                    Chat support
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <span className="h-[24px] w-[24px] rounded-full bg-[#ffffff36] text-whites flex items-center justify-center text-md">
                    <GiCheckMark />
                  </span>
                  <p className="text-base font-poppins font-normal text-whites">
                    Update Notification
                  </p>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <span className="h-[24px] w-[24px] rounded-full bg-[#ffffff36] text-whites flex items-center justify-center text-md">
                    <GiCheckMark />
                  </span>
                  <p className="text-base font-poppins font-normal text-whites">
                    Download material
                  </p>
                </div>
              </div>
              {/* Choose plan */}
              <button className="group py-3  text-base font-poppins font-semibold rounded-3xl w-full bg-secondColor transition-all text-whites hover:bg-[#e0926b]">
                Choose plan
              </button>
            </div>
          </div>

          {/* Enterprise */}
          <div className="max-w-[227px] h-[403px]">
            <h5 className="font-poppins pb-1">
              <span className="text-blacks text-4xl font-bold">$200</span>
              <span className="text-base font-normal text-paraGraphColor">
                / 12 month
              </span>
            </h5>
            <h4 className="font-poppins font-bold text-blacks text-[28px]">
              Base
            </h4>
            <p className="font-poppins text-paraGraphColor font-normal text-base pt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            {/* features */}
            <div className="flex flex-col items-start gap-y-[20px] pt-[18px] pb-6">
              <div className="flex items-center gap-x-[10px]">
                <span className="h-[24px] w-[24px] rounded-full bg-[#5243c23f] text-primaryColor flex items-center justify-center text-md">
                  <GiCheckMark />
                </span>
                <p className="text-base font-poppins font-normal text-blacks">
                  Access all videos
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <span className="h-[24px] w-[24px] rounded-full bg-[#5243c23f] text-primaryColor flex items-center justify-center text-md">
                  <GiCheckMark />
                </span>
                <p className="text-base font-poppins font-normal text-blacks">
                  Get Certificate
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <span className="h-[24px] w-[24px] rounded-full bg-[#5243c23f] text-primaryColor flex items-center justify-center text-md">
                  <GiCheckMark />
                </span>
                <p className="text-base font-poppins font-normal text-blacks">
                  Chat support
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <span className="h-[24px] w-[24px] rounded-full bg-[#5243c23f] text-primaryColor flex items-center justify-center text-md">
                  <GiCheckMark />
                </span>
                <p className="text-base font-poppins font-normal text-blacks">
                  Update Notification
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <span className="h-[24px] w-[24px] rounded-full bg-[#5243c23f] text-primaryColor flex items-center justify-center text-md">
                  <GiCheckMark />
                </span>
                <p className="text-base font-poppins font-normal text-blacks">
                  Download material
                </p>
              </div>
            </div>
            {/* Choose plan */}
            <button className="group py-3 text-secondColor text-base font-poppins font-semibold rounded-3xl bg-thirdColor w-full hover:bg-secondColor transition-all hover:text-whites">
              Choose plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
