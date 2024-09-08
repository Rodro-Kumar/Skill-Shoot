import React, { useState } from "react";
import lineArt from "../assets/Footer/artLine.png";
import roundArt from "../assets/Footer/roundArt.png";
import { MdOutlineErrorOutline } from "react-icons/md";

const Footer = () => {
  const [inputData, setinputData] = useState({
    email: "",
  });

  const [errorInputData, seterrorInputData] = useState({
    emailError: "",
  });

  const HandleINput = (event) => {
    setinputData({
      ...inputData,
      [event.target.id]: event.target.value,
    });
  };

  const HandleSubscribe = () => {
    const { email } = inputData;
    if (!email) {
      seterrorInputData({
        ...errorInputData,
        emailError: "Please enter your email",
      });
    } else {
      seterrorInputData({
        ...errorInputData,
        emailError: "",
      });
    }
  };

  console.log(errorInputData);

  return (
    <div className="bg-primaryColor pt-[100px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center pb-36 relative">
          {/* Line art */}
          <div className="absolute bottom-[130px] left-0">
            <img src={lineArt} alt="" />
          </div>
          <h5 className="font-poppins font-normal text-4xl text-whites">
            Subscribe to get notified about update
          </h5>
          <p className="text-base font-poppins font-normal text-paraGraphColor pt-2">
            By subscribing with your mail, you will accept our privacy policy
          </p>
          <div className="flex items-center gap-x-4 pt-16">
            <div className="w-[400px]">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={`pl-[30px] pr-[30px] w-full py-4 rounded placeholder:text-base placeholder:font-poppins placeholder:text-whites placeholder:font-normal bg-[#ffffff1f] text-whites text-base ${
                  errorInputData.emailError
                    ? "border-red-600 border-[1px]"
                    : "border-none"
                }`}
                onChange={HandleINput}
              />
            </div>

            <button
              onClick={HandleSubscribe}
              className="text-[18px] font-poppins font-medium text-whites px-6 rounded bg-secondColor py-[14px] hover:bg-[#db906b] transition-all"
            >
              Subscribe us
            </button>
          </div>
          <div className="pt-2 xl:mr-[30%]">
            {errorInputData.emailError ? (
              <p className="text-red-600 flex items-center gap-x-1 font-poppins font-normal text-base">
                <MdOutlineErrorOutline />
                {errorInputData.emailError}
              </p>
            ) : (
              ""
            )}
          </div>

          {/* round art */}
          <div className="absolute bottom-[160px] right-0">
            <img src={roundArt} alt="" />
          </div>
        </div>
        {/* footer nav */}
        <div className="flex items-center justify-between pb-10">
          <div>
            <a
              href="#"
              className="text-2xl font-bold capitalize font-poppins text-whites"
            >
              Skill <span className="text-secondColor">Shoot</span>
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-x-8">
              {["Home", "Course", "Subscribe", "About", "Testimoni"].map(
                (item) => (
                  <li>
                    <a
                      href="#"
                      className="font-poppins font-normal text-whites text-[18px] hover:opacity-70 transition-all"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
