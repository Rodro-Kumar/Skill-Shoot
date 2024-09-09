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
    <div id="Testimoni" className="bg-[#F8F8F8] py-[85px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h4 className="text-4xl font-semibold font-poppins">
            <span className="text-blacks">What do they</span>{" "}
            <span className="text-secondColor">say?</span>
          </h4>
          <p className="text-base font-poppins font-normal text-paraGraphColor pt-[10px]">
            This is an honest review from members who have joined us
          </p>
        </div>
        {/* rating */}
        <div className="flex items-center pt-[50px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={{
              nextEl: ".next",
              prevEl: ".pre",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="ratingBody relative px-12 pt-12 pb-4 flex text-center flex-col items-center bg-[#ffffff00]">
                <img src={img1} alt={img1} />
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 text-xl">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                </div>
                <h5 className="text-2xl font-poppins font-normal text-blacks capitalize pb-[10px]">
                  Jason Bay
                </h5>
                <p className="font-poppins font-normal text-base text-paraGraphColor leading-[30px] max-w-[318px]">
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
                <img src={img2} alt={img2} />
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 text-xl">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalf />
                  <IoStarOutline />
                </div>
                <h5 className="text-2xl font-poppins font-normal text-blacks capitalize pb-[10px]">
                  Nany Brugman
                </h5>
                <p className="font-poppins font-normal text-base text-paraGraphColor leading-[30px] max-w-[318px]">
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
                <img src={img3} alt={img3} />
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 text-xl">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                </div>
                <h5 className="text-2xl font-poppins font-normal text-blacks capitalize pb-[10px]">
                  Alexa Nowan
                </h5>
                <p className="font-poppins font-normal text-base text-paraGraphColor leading-[30px] max-w-[318px]">
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
                <div className="w-[75px] h-[75px] rounded-full overflow-hidden">
                  <img src={img5} alt={img5} className="w-full" />
                </div>
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 text-xl">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <h5 className="text-2xl font-poppins font-normal text-blacks capitalize pb-[10px]">
                  Jim karon
                </h5>
                <p className="font-poppins font-normal text-base text-paraGraphColor leading-[30px] max-w-[318px]">
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
                <div className="w-[75px] h-[75px] rounded-full overflow-hidden">
                  <img src={img4} alt={img4} className="w-full" />
                </div>

                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 text-xl">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                </div>
                <h5 className="text-2xl font-poppins font-normal text-blacks capitalize pb-[10px]">
                  Elena milsy
                </h5>
                <p className="font-poppins font-normal text-base text-paraGraphColor leading-[30px] max-w-[318px]">
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
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 text-xl">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                </div>
                <h5 className="text-2xl font-poppins font-normal text-blacks capitalize pb-[10px]">
                  Jason Bay
                </h5>
                <p className="font-poppins font-normal text-base text-paraGraphColor leading-[30px] max-w-[318px]">
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
                <img src={img2} alt={img2} />
                <div className="flex items-center text-[#FF9100] gap-x-2 pt-4 pb-6 text-xl">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalf />
                  <IoStarOutline />
                </div>
                <h5 className="text-2xl font-poppins font-normal text-blacks capitalize pb-[10px]">
                  Nany Brugman
                </h5>
                <p className="font-poppins font-normal text-base text-paraGraphColor leading-[30px] max-w-[318px]">
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
        <div className="flex items-center justify-center gap-x-5 pt-[70px]">
          {/* left */}
          <div className="pre w-[67px] h-[67px] cursor-pointer group bg-[#dbdbdb] rounded-full flex items-center justify-center active:scale-90 transition-transform -translate-y-[50%] z-50">
            <span className="text-3xl text-blacks bg-whites group-hover:bg-secondColor transition-all group-hover:text-whites rounded-full h-[53px] w-[53px] flex items-center justify-center">
              <GoArrowLeft />
            </span>
          </div>
          {/* right */}
          <div className="next w-[67px] h-[67px] cursor-pointer group bg-[#dbdbdb] rounded-full flex items-center justify-center active:scale-90 transition-transform -translate-y-[50%] z-50">
            <span className="text-3xl text-blacks bg-whites group-hover:bg-secondColor transition-all group-hover:text-whites rounded-full h-[53px] w-[53px] flex items-center justify-center">
              <GoArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
