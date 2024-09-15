import React, { useState } from "react";
import art1 from "../assets/Course/art1.png";
import art2 from "../assets/Course/art2.png";
import video1 from "../assets/Course/video1.png";
import video2 from "../assets/Course/video2.png";
import video3 from "../assets/Course/video3.png";
import video4 from "../assets/Course/video1.png";
import { FaPlay } from "react-icons/fa";
import men1 from "../assets/Course/men1.png";
import men2 from "../assets/Course/men2.png";
import men3 from "../assets/Course/men3.png";
import { RiUserLine } from "react-icons/ri";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import footage1 from "../assets/Video/FPV Drone Flight through Beautiful Iceland Canyon..mp4";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Course = () => {
  const [open, setopen] = useState(true);
  const [open1, setopen1] = useState(true);
  const [open2, setopen2] = useState(true);
  const [open3, setopen3] = useState(true);

  const handleVideo = () => {
    setopen(false);
  };

  const handleVideo1 = () => {
    setopen1(false);
  };

  const handleVideo2 = () => {
    setopen2(false);
  };

  const handleVideo3 = () => {
    setopen3(false);
  };

  return (
    <>
      <div id="Course" className="bg-primaryColor py-[50px] lg:py-[75px] px-4 ">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center relative pb-6 lg:pb-12">
            <h3 className="font-poppins font-semibold text-[18px] lg:text-4xl text-whites pb-1 lg:pb-[10px]">
              Popular courses of the week
            </h3>
            <p className="font-poppins font-normal text-whites text-sm lg:text-base opacity-[60%] max-w-[347px]">
              List of the most popular lists that are often studied by our
              members
            </p>
            <div className="absolute top-[-30px] md:top-[42px] left-0">
              <img src={art1} alt={art1} className="w-[37px] md:w-[50px]" />
            </div>
            <div className="absolute top-[-9px] md:top-[20px] right-0">
              <img src={art2} alt={art2} />
            </div>
          </div>
          {/* video */}
          <div className="flex items-center justify-between relative">
            {/* Previous Button */}
            <div className="pre w-[47px] sm:left-[-12px] sm:top-[40%] md:left-[-15px] lg:w-[67px] h-[47px] lg:h-[67px] cursor-pointer group active:scale-90 transition-transform bg-[#e6e5e5] rounded-full flex items-center justify-center absolute lg:left-[-13px] left-[-9px] xl:-left-[11px] lg:top-[45%] top-[50%] xl:top-[45%] -translate-y-[50%] z-50">
              <span className="text-xl lg:text-3xl text-blacks bg-whites group-hover:bg-primaryColor transition-all group-hover:text-whites rounded-full h-[33px] lg:h-[53px] lg:w-[53px] w-[33px] flex items-center justify-center">
                <GoArrowLeft />
              </span>
            </div>
            <Swiper
              slidesPerView={1}
              navigation={{
                nextEl: ".next",
                prevEl: ".pre",
              }}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {/* ONE */}
              <SwiperSlide>
                {" "}
                <div className="h-[412px] sm:h-[456px] md:h-[412px] lg:h-[498px] sm:max-w-[290px] max-w-[268px] m-auto lg:max-w-[394px] bg-whites rounded-xl overflow-hidden">
                  <div
                    className="w-full h-[180px] md:h-[138px] lg:h-[249px] bg-red-400 relative"
                    onClick={handleVideo}
                  >
                    <video
                      src={footage1}
                      controls
                      className="h-full w-full object-cover"
                    ></video>

                    <div className={`${open ? "block" : "hidden"}`}>
                      <img
                        src={video1}
                        alt=""
                        className="w-full h-full absolute top-0 left-0"
                      />
                    </div>
                    <div
                      className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
                        open ? "block" : "hidden"
                      }`}
                    >
                      <div className="w-[60px] h-[60px] lg:w-[84px] lg:h-[84px] rounded-full bg-[#ffffff50] flex items-center justify-center">
                        <div className="lg:h-[60px] w-[40px] h-[40px] lg:w-[60px] rounded-full bg-whites flex items-center justify-center">
                          <FaPlay className="text-primaryColor text-lg lg:text-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div>
                    <h4 className="px-5 font-poppins font-semibold text-xl lg:text-2xl text-blacks py-2 lg:py-5">
                      Basics of learning team management
                    </h4>
                    <div className="flex flex-col lg:flex-row gap-y-4 justify-start lg:items-center items-start lg:justify-between px-5">
                      <div className="flex items-center gap-x-2">
                        <img
                          src={men1}
                          alt={men1}
                          className="w-[30px] lg:w-[40px]"
                        />
                        <div>
                          <h5 className="text-sm lg:text-base font-poppins font-medium text-blacks">
                            Jone Owel
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            IT Manager
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span className="text-primaryColor text-2xl lg:text-4xl">
                          <RiUserLine />
                        </span>
                        <div>
                          <h5 className="text-sm lg:text-base font-poppins font-medium text-blacks">
                            120
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            Participant
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* price */}
                    <div className="flex mt-0 lg:mt-6 items-center px-5 justify-between py-[18px] bg-[#FAFAFA]">
                      <div>
                        <button className="text-xs font-poppins font-semibold text-whites capitalize lg:py-3 py-2 lg:px-6 px-4 bg-primaryColor rounded-md hover:bg-[#2a6d5e] transition-all">
                          Buy Now
                        </button>
                      </div>
                      <div>
                        <h5 className="font-poppins font-semibold text-blacks lg:text-2xl text-xl">
                          $120
                          <span className="text-xs text-[#808080] font-normal">
                            /25 Video
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* TWO */}
              <SwiperSlide>
                {" "}
                <div className="h-[412px] md:h-[412px] sm:h-[456px] lg:h-[498px] sm:max-w-[290px] max-w-[268px] m-auto lg:max-w-[394px] bg-whites rounded-xl overflow-hidden">
                  <div
                    className="w-full h-[180px] md:h-[138px] lg:h-[249px] bg-red-400 relative"
                    onClick={handleVideo1}
                  >
                    <video
                      src={footage1}
                      controls
                      className="h-full w-full object-cover"
                    ></video>

                    <div className={`${open1 ? "block" : "hidden"}`}>
                      <img
                        src={video1}
                        alt=""
                        className="w-full h-full absolute top-0 left-0"
                      />
                    </div>
                    <div
                      className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
                        open1 ? "block" : "hidden"
                      }`}
                    >
                      <div className="w-[60px] h-[60px] lg:w-[84px] lg:h-[84px] rounded-full bg-[#ffffff50] flex items-center justify-center">
                        <div className="lg:h-[60px] w-[40px] h-[40px] lg:w-[60px] rounded-full bg-whites flex items-center justify-center">
                          <FaPlay className="text-primaryColor text-lg lg:text-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div>
                    <h4 className="px-5 font-poppins font-semibold text-xl lg:text-2xl text-blacks py-2 lg:py-5">
                      Basics of learning team management
                    </h4>
                    <div className="flex flex-col lg:flex-row gap-y-4 justify-start lg:items-center items-start lg:justify-between px-5">
                      <div className="flex items-center gap-x-2">
                        <img
                          src={men1}
                          alt={men1}
                          className="w-[30px] lg:w-[40px]"
                        />
                        <div>
                          <h5 className="text-sm lg:text-base font-poppins font-medium text-blacks">
                            Jone Owel
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            IT Manager
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span className="text-primaryColor text-2xl lg:text-4xl">
                          <RiUserLine />
                        </span>
                        <div>
                          <h5 className="text-sm lg:text-base font-poppins font-medium text-blacks">
                            120
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            Participant
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* price */}
                    <div className="flex mt-0 lg:mt-6 items-center px-5 justify-between py-[18px] bg-[#FAFAFA]">
                      <div>
                        <button className="text-xs font-poppins font-semibold text-whites capitalize lg:py-3 py-2 lg:px-6 px-4 bg-primaryColor rounded-md hover:bg-[#2a6d5e] transition-all">
                          Buy Now
                        </button>
                      </div>
                      <div>
                        <h5 className="font-poppins font-semibold text-blacks lg:text-2xl text-xl">
                          $120
                          <span className="text-xs text-[#808080] font-normal">
                            /25 Video
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* THREE */}
              <SwiperSlide>
                {" "}
                <div className="h-[412px] md:h-[412px] sm:h-[456px] lg:h-[498px] sm:max-w-[290px] max-w-[268px] m-auto lg:max-w-[394px] bg-whites rounded-xl overflow-hidden">
                  <div
                    className="w-full h-[180px] md:h-[138px] lg:h-[249px] bg-red-400 relative"
                    onClick={handleVideo2}
                  >
                    <video
                      src={footage1}
                      controls
                      className="h-full w-full object-cover"
                    ></video>

                    <div className={`${open2 ? "block" : "hidden"}`}>
                      <img
                        src={video1}
                        alt=""
                        className="w-full h-full absolute top-0 left-0"
                      />
                    </div>
                    <div
                      className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
                        open2 ? "block" : "hidden"
                      }`}
                    >
                      <div className="w-[60px] h-[60px] lg:w-[84px] lg:h-[84px] rounded-full bg-[#ffffff50] flex items-center justify-center">
                        <div className="lg:h-[60px] w-[40px] h-[40px] lg:w-[60px] rounded-full bg-whites flex items-center justify-center">
                          <FaPlay className="text-primaryColor text-lg lg:text-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div>
                    <h4 className="px-5 font-poppins font-semibold text-xl lg:text-2xl text-blacks py-2 lg:py-5">
                      Basics of learning team management
                    </h4>
                    <div className="flex flex-col lg:flex-row gap-y-4 justify-start lg:items-center items-start lg:justify-between px-5">
                      <div className="flex items-center gap-x-2">
                        <img
                          src={men1}
                          alt={men1}
                          className="w-[30px] lg:w-[40px]"
                        />
                        <div>
                          <h5 className="text-sm lg:text-base font-poppins font-medium text-blacks">
                            Jone Owel
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            IT Manager
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span className="text-primaryColor text-2xl lg:text-4xl">
                          <RiUserLine />
                        </span>
                        <div>
                          <h5 className="text-sm lg:text-base font-poppins font-medium text-blacks">
                            120
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            Participant
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* price */}
                    <div className="flex mt-0 lg:mt-6 items-center px-5 justify-between py-[18px] bg-[#FAFAFA]">
                      <div>
                        <button className="text-xs font-poppins font-semibold text-whites capitalize lg:py-3 py-2 lg:px-6 px-4 bg-primaryColor rounded-md hover:bg-[#2a6d5e] transition-all">
                          Buy Now
                        </button>
                      </div>
                      <div>
                        <h5 className="font-poppins font-semibold text-blacks lg:text-2xl text-xl">
                          $120
                          <span className="text-xs text-[#808080] font-normal">
                            /25 Video
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* FOUR */}
              <SwiperSlide>
                {" "}
                <div className="h-[412px] md:h-[412px] sm:h-[456px] lg:h-[498px] sm:max-w-[290px] max-w-[268px] m-auto lg:max-w-[394px] bg-whites rounded-xl overflow-hidden">
                  <div
                    className="w-full h-[180px] md:h-[138px] lg:h-[249px] bg-red-400 relative"
                    onClick={handleVideo3}
                  >
                    <video
                      src={footage1}
                      controls
                      className="h-full w-full object-cover"
                    ></video>

                    <div className={`${open3 ? "block" : "hidden"}`}>
                      <img
                        src={video1}
                        alt=""
                        className="w-full h-full absolute top-0 left-0"
                      />
                    </div>
                    <div
                      className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
                        open3 ? "block" : "hidden"
                      }`}
                    >
                      <div className="w-[60px] h-[60px] lg:w-[84px] lg:h-[84px] rounded-full bg-[#ffffff50] flex items-center justify-center">
                        <div className="lg:h-[60px] w-[40px] h-[40px] lg:w-[60px] rounded-full bg-whites flex items-center justify-center">
                          <FaPlay className="text-primaryColor text-lg lg:text-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div>
                    <h4 className="px-5 font-poppins font-semibold text-xl lg:text-2xl text-blacks py-2 lg:py-5">
                      Basics of learning team management
                    </h4>
                    <div className="flex flex-col lg:flex-row gap-y-4 justify-start lg:items-center items-start lg:justify-between px-5">
                      <div className="flex items-center gap-x-2">
                        <img
                          src={men1}
                          alt={men1}
                          className="w-[30px] lg:w-[40px]"
                        />
                        <div>
                          <h5 className="text-sm lg:text-base font-poppins font-medium text-blacks">
                            Jone Owel
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            IT Manager
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span className="text-primaryColor text-2xl lg:text-4xl">
                          <RiUserLine />
                        </span>
                        <div>
                          <h5 className="text-sm md:text-base font-poppins font-medium text-blacks">
                            120
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            Participant
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* price */}
                    <div className="flex mt-0 lg:mt-6 items-center px-5 justify-between py-[18px] bg-[#FAFAFA]">
                      <div>
                        <button className="text-xs font-poppins font-semibold text-whites capitalize lg:py-3 py-2 lg:px-6 px-4 bg-primaryColor rounded-md hover:bg-[#2a6d5e] transition-all">
                          Buy Now
                        </button>
                      </div>
                      <div>
                        <h5 className="font-poppins font-semibold text-blacks lg:text-2xl text-xl">
                          $120
                          <span className="text-xs text-[#808080] font-normal">
                            /25 Video
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Next Button */}
            <div className="next w-[47px] lg:w-[67px] sm:right-[-12px] md:right-[-15px] sm:top-[40%] h-[47px] lg:h-[67px] cursor-pointer group bg-[#e6e5e5] rounded-full flex items-center justify-center absolute active:scale-90 transition-transform lg:right-[-13px] right-[-9px] xl:-right-[11px] top-[50%] lg:top-[45%] xl:top-[45%] -translate-y-[50%] z-50">
              <span className="text-xl lg:text-3xl text-blacks bg-whites group-hover:bg-primaryColor transition-all group-hover:text-whites rounded-full lg:h-[53px] h-[33px] lg:w-[53px] w-[33px] flex items-center justify-center">
                <GoArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
