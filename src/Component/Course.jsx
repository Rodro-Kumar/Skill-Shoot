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
      <div id="Course" className="bg-primaryColor py-[75px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center relative pb-12">
            <h3 className="font-poppins font-semibold text-4xl text-whites pb-[10px]">
              Popular courses of the week
            </h3>
            <p className="font-poppins font-normal text-whites text-base opacity-[60%] max-w-[347px]">
              List of the most popular lists that are often studied by our
              members
            </p>
            <div className="absolute top-[42px] left-0">
              <img src={art1} alt={art1} />
            </div>
            <div className="absolute top-[20px] right-0">
              <img src={art2} alt={art2} />
            </div>
          </div>
          {/* video */}
          <div className="flex items-center justify-between relative">
            <div className="pre w-[67px] h-[67px] cursor-pointer group active:scale-90 transition-transform bg-[#e6e5e5] rounded-full flex items-center justify-center absolute -left-[43px] top-[50%] -translate-y-[50%] z-50">
              <span className="text-3xl text-blacks bg-whites group-hover:bg-primaryColor transition-all group-hover:text-whites rounded-full h-[53px] w-[53px] flex items-center justify-center">
                <GoArrowLeft />
              </span>
            </div>
            <Swiper
              navigation={{
                nextEl: ".next",
                prevEl: ".pre",
              }}
              modules={[Navigation]}
              className="mySwiper"
              slidesPerView={3}
              spaceBetween={49}
            >
              <SwiperSlide>
                {" "}
                <div className="h-[498px] max-w-[394px] bg-whites rounded-xl overflow-hidden">
                  <div
                    className="w-full h-[249px] bg-red-400 relative"
                    onClick={handleVideo}
                  >
                    <video
                      src="/src/assets/Video/FPV Drone Flight through Beautiful Iceland Canyon..mp4"
                      controls
                      autoPlay
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
                      <div className="w-[84px] h-[84px] rounded-full bg-[#ffffff50] flex items-center justify-center">
                        <div className="h-[60px] w-[60px] rounded-full bg-whites flex items-center justify-center">
                          <FaPlay className="text-primaryColor text-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div>
                    <h4 className="px-5 font-poppins font-semibold text-2xl text-blacks py-5">
                      Basics of learning team management
                    </h4>
                    <div className="flex items-center justify-between px-5">
                      <div className="flex items-center gap-x-2">
                        <img src={men1} alt={men1} />
                        <div>
                          <h5 className="text-base font-poppins font-medium text-blacks">
                            Jone Owel
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            IT Manager
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span className="text-primaryColor text-4xl">
                          <RiUserLine />
                        </span>
                        <div>
                          <h5 className="text-base font-poppins font-medium text-blacks">
                            120
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            Participant
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* price */}
                    <div className="flex mt-6 items-center px-5 justify-between py-[18px] bg-[#FAFAFA]">
                      <div>
                        <button className="text-xs font-poppins font-semibold text-whites capitalize py-3 px-6 bg-primaryColor rounded-md hover:bg-[#2a6d5e] transition-all">
                          Buy Now
                        </button>
                      </div>
                      <div>
                        <h5 className="font-poppins font-semibold text-blacks text-2xl">
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
              <SwiperSlide>
                {" "}
                <div className="h-[498px] max-w-[394px] bg-whites rounded-xl overflow-hidden">
                  <div
                    className="w-full h-[249px] bg-red-400 relative"
                    onClick={handleVideo1}
                  >
                    <video
                      src="/src/assets/Video/FPV Drone Flight through Beautiful Iceland Canyon..mp4"
                      controls
                      autoPlay
                      className="h-full w-full object-cover"
                    ></video>

                    <div className={`${open1 ? "block" : "hidden"}`}>
                      <img
                        src={video2}
                        alt=""
                        className="w-full h-full absolute top-0 left-0"
                      />
                    </div>
                    <div
                      className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
                        open1 ? "block" : "hidden"
                      }`}
                    >
                      <div className="w-[84px] h-[84px] rounded-full bg-[#ffffff50] flex items-center justify-center">
                        <div className="h-[60px] w-[60px] rounded-full bg-whites flex items-center justify-center">
                          <FaPlay className="text-primaryColor text-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div>
                    <h4 className="px-5 font-poppins font-semibold text-2xl text-blacks py-5">
                      Basics of learning team management
                    </h4>
                    <div className="flex items-center justify-between px-5">
                      <div className="flex items-center gap-x-2">
                        <img src={men2} alt={men2} />
                        <div>
                          <h5 className="text-base font-poppins font-medium text-blacks">
                            Jone Owel
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            IT Manager
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span className="text-primaryColor text-4xl">
                          <RiUserLine />
                        </span>
                        <div>
                          <h5 className="text-base font-poppins font-medium text-blacks">
                            120
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            Participant
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* price */}
                    <div className="flex mt-6 items-center px-5 justify-between py-[18px] bg-[#FAFAFA]">
                      <div>
                        <button className="text-xs font-poppins font-semibold text-whites capitalize py-3 px-6 bg-primaryColor rounded-md hover:bg-[#2a6d5e] transition-all">
                          Buy Now
                        </button>
                      </div>
                      <div>
                        <h5 className="font-poppins font-semibold text-blacks text-2xl">
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
              <SwiperSlide>
                {" "}
                <div className="h-[498px] max-w-[394px] bg-whites rounded-xl overflow-hidden">
                  <div
                    className="w-full h-[249px] bg-red-400 relative"
                    onClick={handleVideo2}
                  >
                    <video
                      src="/src/assets/Video/FPV Drone Flight through Beautiful Iceland Canyon..mp4"
                      controls
                      autoPlay
                      className="h-full w-full object-cover"
                    ></video>

                    <div className={`${open2 ? "block" : "hidden"}`}>
                      <img
                        src={video3}
                        alt=""
                        className="w-full h-full absolute top-0 left-0"
                      />
                    </div>
                    <div
                      className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
                        open2 ? "block" : "hidden"
                      }`}
                    >
                      <div className="w-[84px] h-[84px] rounded-full bg-[#ffffff50] flex items-center justify-center">
                        <div className="h-[60px] w-[60px] rounded-full bg-whites flex items-center justify-center">
                          <FaPlay className="text-primaryColor text-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div>
                    <h4 className="px-5 font-poppins font-semibold text-2xl text-blacks py-5">
                      Basics of learning team management
                    </h4>
                    <div className="flex items-center justify-between px-5">
                      <div className="flex items-center gap-x-2">
                        <img src={men1} alt={men1} />
                        <div>
                          <h5 className="text-base font-poppins font-medium text-blacks">
                            Jone Owel
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            IT Manager
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span className="text-primaryColor text-4xl">
                          <RiUserLine />
                        </span>
                        <div>
                          <h5 className="text-base font-poppins font-medium text-blacks">
                            120
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            Participant
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* price */}
                    <div className="flex mt-6 items-center px-5 justify-between py-[18px] bg-[#FAFAFA]">
                      <div>
                        <button className="text-xs font-poppins font-semibold text-whites capitalize py-3 px-6 bg-primaryColor rounded-md hover:bg-[#2a6d5e] transition-all">
                          Buy Now
                        </button>
                      </div>
                      <div>
                        <h5 className="font-poppins font-semibold text-blacks text-2xl">
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
              <SwiperSlide>
                {" "}
                <div className="h-[498px] max-w-[394px] bg-whites rounded-xl overflow-hidden">
                  <div
                    className="w-full h-[249px] bg-red-400 relative"
                    onClick={handleVideo3}
                  >
                    <video
                      src="/src/assets/Video/FPV Drone Flight through Beautiful Iceland Canyon..mp4"
                      controls
                      autoPlay
                      className="h-full w-full object-cover"
                    ></video>

                    <div className={`${open3 ? "block" : "hidden"}`}>
                      <img
                        src={video4}
                        alt=""
                        className="w-full h-full absolute top-0 left-0"
                      />
                    </div>
                    <div
                      className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
                        open3 ? "block" : "hidden"
                      }`}
                    >
                      <div className="w-[84px] h-[84px] rounded-full bg-[#ffffff50] flex items-center justify-center">
                        <div className="h-[60px] w-[60px] rounded-full bg-whites flex items-center justify-center">
                          <FaPlay className="text-primaryColor text-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div>
                    <h4 className="px-5 font-poppins font-semibold text-2xl text-blacks py-5">
                      Basics of learning team management
                    </h4>
                    <div className="flex items-center justify-between px-5">
                      <div className="flex items-center gap-x-2">
                        <img src={men3} alt={men3} />
                        <div>
                          <h5 className="text-base font-poppins font-medium text-blacks">
                            Jone Owel
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            IT Manager
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span className="text-primaryColor text-4xl">
                          <RiUserLine />
                        </span>
                        <div>
                          <h5 className="text-base font-poppins font-medium text-blacks">
                            120
                          </h5>
                          <p className="text-xs font-poppins font-normal text-[#808080]">
                            Participant
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* price */}
                    <div className="flex mt-6 items-center px-5 justify-between py-[18px] bg-[#FAFAFA]">
                      <div>
                        <button className="text-xs font-poppins font-semibold text-whites capitalize py-3 px-6 bg-primaryColor rounded-md hover:bg-[#2a6d5e] transition-all">
                          Buy Now
                        </button>
                      </div>
                      <div>
                        <h5 className="font-poppins font-semibold text-blacks text-2xl">
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
            <div className="next w-[67px] h-[67px] cursor-pointer group bg-[#e6e5e5] rounded-full flex items-center justify-center absolute active:scale-90 transition-transform -right-[43px] top-[50%] -translate-y-[50%] z-50">
              <span className="text-3xl text-blacks bg-whites group-hover:bg-primaryColor transition-all group-hover:text-whites rounded-full h-[53px] w-[53px] flex items-center justify-center">
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
