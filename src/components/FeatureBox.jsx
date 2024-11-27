import React from "react";
import dollar from "../assets/Dollar.png";

const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="h-[296px] w-[296px] bg-[#ffffff] bg-opacity-5 font-raleway font-semibold rounded-2xl backdrop-blur-sm">
      <div className="p-6 flex flex-col h-full">
        <div className="h-16 w-16 bg-[#D9D9D9] bg-opacity-5 rounded-full flex justify-center items-center">
          <img src={icon} className="h-11 w-11" />
        </div>
        <div className="mt-10">
          <div className="text-lg font-bold mb-4">{title}</div>
          <div className="text-sm text-gray-400">
          {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
