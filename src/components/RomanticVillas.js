import React from "react";
import mobileImage from "../assets/romantic-villas-mobile.png";
import desktopImage from "../assets/romantic-villas.png";

const RomanticVillas = () => {
  return (
    <div className="relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img
          src={mobileImage}
          alt="Romantic Villas"
          className="w-full h-auto"
        />
      </picture>

      {/* <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
        Romantic Villas →
      </div> */}
    </div>
  );
};

export default RomanticVillas;
