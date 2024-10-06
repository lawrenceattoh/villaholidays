import React from "react";
import mobileImage from "../assets/sustainable-mobile.png";
import desktopImage from "../assets/sustainable.png";

const Sustainable = () => {
  return (
    <div className="relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img src={mobileImage} alt="Sustainable" className="w-full h-auto" />
      </picture>

      {/* <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
        Sustainable →
      </div> */}
    </div>
  );
};

export default Sustainable;
