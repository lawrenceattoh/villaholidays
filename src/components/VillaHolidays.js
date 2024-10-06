import React from "react";
import VillasWithPools from "./VillasWithPools";
import RomanticVillas from "./RomanticVillas";
import BeachVillas from "./BeachVillas";
import Sustainable from "./Sustainable";
import BookNow from "./BookNow";
import Title from "./Title";
import stamp from "../assets/stamp.png";
import wavePattern from "../assets/wave-pattern-background.png"; // Ensure the path is correct

const VillaHolidays = () => {
  return (
    <div className="relative row bg-[#E6F1F8] overflow-hidden">
      <div className="container mx-auto px-4 py-10 bg-[#E6F1F8] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Left column for stamp and content */}
          <div className="grid grid-rows-1 grid-cols-10 gap-4 relative z-10">
            {/* Stamp Image - hidden on mobile */}
            <div className="col-span-3 hidden sm:block">
              <img
                src={stamp}
                alt="Stamp"
                className="w-full h-auto relative md:w-auto md:h-auto" // Resizes the image based on screen size
                style={{ top: "-30px", right: "-8px" }}
              />
            </div>

            {/* Content: title, text, and button */}
            <div className="col-span-7">
              {/* Title component with responsive text sizes */}
              <Title className="text-[24px] sm:text-[20px]leading-[32px] md:text-[48px] md:leading-[56px]" />

              {/* Paragraph text with responsive max-width */}
              <p
                className="mb-6 mt-6 font-grotesk text-[14px] leading-[24px] md:text-[16px] md:leading-[28.8px] max-w-full md:max-w-[380px]" // Adjust font size and line height for mobile
                style={{ color: "#29293D" }}
              >
                Private villa holidays with Villa Travels are all about the
                extraordinary, especially when it comes to our collection of
                villas and chateaux. Quirky, stylish and full of character, our
                villas for rent have been handpicked by our knowledgeable
                destination experts who are the best in the business. So one
                year you could be in a medieval castle, and the next you could
                be soaking up the sun on your very own private island.
              </p>

              {/* Button for desktop only */}
              <div className="hidden md:block">
                <BookNow />
              </div>
            </div>
          </div>

          {/* Right column for images */}
          <div className="grid grid-cols-2 gap-[3px] ">
            <VillasWithPools />
            <RomanticVillas />
            <BeachVillas />
            <Sustainable />
          </div>
        </div>

        {/* Second Button for mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <BookNow />
        </div>
      </div>

      {/* Wave pattern image positioned at the far right, behind the images */}
      <img
        src={wavePattern}
        alt="Wave pattern background"
        className="absolute top-0 right-[-24%] h-[150%]  z-10 hidden md:block"
      />
    </div>
  );
};

export default VillaHolidays;
