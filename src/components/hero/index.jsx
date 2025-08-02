import React from "react";
import heroImage from "../../assets/hero.png";
const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroImage})` }}
    ></div>
  );
};

export default Hero;
