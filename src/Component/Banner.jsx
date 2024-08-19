import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

const Banner = () => {
  return (
    <div className="bg-primaryColor">
      <div className="container">
        <Nav />
        <Hero />
      </div>
    </div>
  );
};

export default Banner;
