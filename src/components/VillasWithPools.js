import React from "react";
import mobileImage from "../assets/villas-with-pools-mobile.png";
import desktopImage from "../assets/villas-with-pools.png";

const VillasWithPools = () => {
  return (
    <div className="relative">
      <picture>
        {/* Desktop image for screens 768px and above */}
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        {/* Mobile image for screens below 768px */}
        <img
          src={mobileImage}
          alt="Villas with Pools"
          className="w-full h-auto"
        />
      </picture>

      {/* <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
        Villas with Pools →
      </div> */}
    </div>
  );
};

export default VillasWithPools;
