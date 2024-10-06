import React from "react";

const Title = () => {
  return (
    <div className="relative flex flex-col items-start">
      {/* Our Extraordinary Text */}
      <span
        className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0172B1] to-[#019EF5] mb-[-20px] relative z-10 sm:ml-[-80px]"
        style={{
          fontFamily: "HaikusScript, cursive",
          fontSize: "32px",
          fontWeight: 400,
          lineHeight: "44.8px",
          width: "231px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          marginLeft: "-10px",
        }}
      >
        Our Extraordinary
      </span>

      {/* Villa Holidays Text */}
      <span
        className="block text-[#29293D] relative z-10 sm:text-[54px]"
        style={{
          fontFamily: "DomaineDisplay, serif",
          fontSize: "40px",
          fontWeight: 700,
          lineHeight: "76.8px",
          width: "100%",
          textAlign: "left",
        }}
      >
        Villa Holidays
      </span>
    </div>
  );
};

export default Title;
