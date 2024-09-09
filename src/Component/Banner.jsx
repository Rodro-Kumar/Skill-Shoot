import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

const Banner = () => {
  return (
    <div id="Home" className="bg-primaryColor">
      <div>
        <Nav />
        <Hero />
      </div>
    </div>
  );
};

export default Banner;
