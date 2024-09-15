import React from "react";
import img1 from "../assets/Rating/1.png";
import img2 from "../assets/Rating/2.png";
import img3 from "../assets/Rating/3.png";
import img4 from "../assets/Rating/4.jpg";
import img5 from "../assets/Rating/5.jpg";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

const Rating = () => {
  return (
    <div id="Testimoni" className="bg-[#F8F8F8] py-[50px] lg:py-[85px] px-4 ">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h4 className="text-[28px] lg:text-4xl font-semibold font-poppins">
            <span className="text-blacks">What do they</span>{" "}
            <span className="text-secondColor">say?</span>
          </h4>
          <p className="text-sm lg:text-base font-poppins font-normal text-paraGraphColor pt-[10px]">
            This is an honest review from members who have joined us
          </p>
        </div>
        {/* rating */}
        <div className="flex items-center pt-[50px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
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
            <SwiperSlide>
              {" "}
              <div className="ratingBody relative px-12 pt-12 pb-4 flex text-center flex-col items-center bg-[#ffffff00]">
                <img src={img1} alt={img1} />
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 lg:text-xl text-md">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                </div>
                <h5 className="text-lg lg:text-2xl font-poppins font-normal text-blacks capitalize pb-1 lg:pb-[10px]">
                  Jason Bay
                </h5>
                <p className="font-poppins font-normal text-sm lg:text-base text-paraGraphColor leading-6 lg:leading-[30px] max-w-[318px]">
                  I am quite satisfied, because the skills I want or dream of
                  can really be mastered
                </p>
                {/* line */}
                <div className="line w-full bg-primaryColor h-[6px] rounded-3xl absolute bottom-0 left-0 opacity-0"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="ratingBody relative px-12 pt-12 pb-4 flex text-center flex-col items-center bg-[#ffffff00]">
                <img src={img1} alt={img1} />
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 lg:text-xl text-md">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                </div>
                <h5 className="text-lg lg:text-2xl font-poppins font-normal text-blacks capitalize pb-1 lg:pb-[10px]">
                  Jason Bay
                </h5>
                <p className="font-poppins font-normal text-sm lg:text-base text-paraGraphColor leading-6 lg:leading-[30px] max-w-[318px]">
                  I am quite satisfied, because the skills I want or dream of
                  can really be mastered
                </p>
                {/* line */}
                <div className="line w-full bg-primaryColor h-[6px] rounded-3xl absolute bottom-0 left-0 opacity-0"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="ratingBody relative px-12 pt-12 pb-4 flex text-center flex-col items-center bg-[#ffffff00]">
                <img src={img1} alt={img1} />
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 lg:text-xl text-md">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                </div>
                <h5 className="text-lg lg:text-2xl font-poppins font-normal text-blacks capitalize pb-1 lg:pb-[10px]">
                  Jason Bay
                </h5>
                <p className="font-poppins font-normal text-sm lg:text-base text-paraGraphColor leading-6 lg:leading-[30px] max-w-[318px]">
                  I am quite satisfied, because the skills I want or dream of
                  can really be mastered
                </p>
                {/* line */}
                <div className="line w-full bg-primaryColor h-[6px] rounded-3xl absolute bottom-0 left-0 opacity-0"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="ratingBody relative px-12 pt-12 pb-4 flex text-center flex-col items-center bg-[#ffffff00]">
                <img src={img1} alt={img1} />
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 lg:text-xl text-md">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                </div>
                <h5 className="text-lg lg:text-2xl font-poppins font-normal text-blacks capitalize pb-1 lg:pb-[10px]">
                  Jason Bay
                </h5>
                <p className="font-poppins font-normal text-sm lg:text-base text-paraGraphColor leading-6 lg:leading-[30px] max-w-[318px]">
                  I am quite satisfied, because the skills I want or dream of
                  can really be mastered
                </p>
                {/* line */}
                <div className="line w-full bg-primaryColor h-[6px] rounded-3xl absolute bottom-0 left-0 opacity-0"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="ratingBody relative px-12 pt-12 pb-4 flex text-center flex-col items-center bg-[#ffffff00]">
                <img src={img1} alt={img1} />
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 lg:text-xl text-md">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                </div>
                <h5 className="text-lg lg:text-2xl font-poppins font-normal text-blacks capitalize pb-1 lg:pb-[10px]">
                  Jason Bay
                </h5>
                <p className="font-poppins font-normal text-sm lg:text-base text-paraGraphColor leading-6 lg:leading-[30px] max-w-[318px]">
                  I am quite satisfied, because the skills I want or dream of
                  can really be mastered
                </p>
                {/* line */}
                <div className="line w-full bg-primaryColor h-[6px] rounded-3xl absolute bottom-0 left-0 opacity-0"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="ratingBody relative px-12 pt-12 pb-4 flex text-center flex-col items-center bg-[#ffffff00]">
                <img src={img1} alt={img1} />
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 lg:text-xl text-md">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                </div>
                <h5 className="text-lg lg:text-2xl font-poppins font-normal text-blacks capitalize pb-1 lg:pb-[10px]">
                  Jason Bay
                </h5>
                <p className="font-poppins font-normal text-sm lg:text-base text-paraGraphColor leading-6 lg:leading-[30px] max-w-[318px]">
                  I am quite satisfied, because the skills I want or dream of
                  can really be mastered
                </p>
                {/* line */}
                <div className="line w-full bg-primaryColor h-[6px] rounded-3xl absolute bottom-0 left-0 opacity-0"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* left right button */}
        <div className="flex items-center justify-center gap-x-5 pt-9 lg:pt-[70px]">
          {/* left */}
          <div className="pre lg:w-[67px] w-[50px]  h-[50px] lg:h-[67px] cursor-pointer group bg-[#dbdbdb] rounded-full flex items-center justify-center active:scale-90 transition-transform -translate-y-[50%] z-50">
            <span className="lg:text-3xl text-xl text-blacks bg-whites group-hover:bg-secondColor transition-all group-hover:text-whites rounded-full lg:h-[53px] h-[40px] w-[40px] lg:w-[53px] flex items-center justify-center">
              <GoArrowLeft />
            </span>
          </div>
          {/* right */}
          <div className="next lg:w-[67px] h-[50px] w-[50px] lg:h-[67px] cursor-pointer group bg-[#dbdbdb] rounded-full flex items-center justify-center active:scale-90 transition-transform -translate-y-[50%] z-50">
            <span className="text-xl lg:text-3xl text-blacks bg-whites group-hover:bg-secondColor transition-all group-hover:text-whites rounded-full h-[40px] w-[40px] lg:h-[53px] lg:w-[53px] flex items-center justify-center">
              <GoArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
