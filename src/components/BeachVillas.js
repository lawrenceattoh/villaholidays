import React from "react";
import mobileImage from "../assets/beach-villas-mobile.png";
import desktopImage from "../assets/beach-villas.png";

const BeachVillas = () => {
  return (
    <div className="relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img src={mobileImage} alt="Beach Villas" className="w-full h-auto" />
      </picture>

      {/* <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
        Beach Villas →
      </div> */}
    </div>
  );
};

export default BeachVillas;
