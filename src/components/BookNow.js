import React from "react";

// You can import the arrow icon or use an inline SVG if you have it
import arrowIcon from "../assets/arrow-right.svg";

const BookNow = () => {
  return (
    <button
      className="flex justify-between items-center w-[226px] h-[60px] px-8 py-6 bg-gradient-to-r from-[#0172B1] to-[#019EF5] text-white rounded-[1px] shadow-md hover:shadow-lg transition duration-300 ease-in-out"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <span>Book Now</span>
      <span className="ml-4">
        {/* If you have an arrow icon, you can replace the text below with the image */}
        <img src={arrowIcon} alt="arrow" className="w-6 h-6" />
      </span>
    </button>
  );
};

export default BookNow;
