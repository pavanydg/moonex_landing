import React from "react";

const Button = ({buttonText}) => {
  return (
    <button className="md:flex justify-center items-center w-40 h-12 bg-gradient-to-r from-p1 to-[#FFE68F] rounded-full text-sm hidden text-black">
      {buttonText}
    </button>
  );
};

export default Button;
