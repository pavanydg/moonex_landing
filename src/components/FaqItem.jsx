import React, { useState } from "react";

const FaqItem = ({ item }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="font-raleway font-medium text-lg flex flex-col w-full p-4 bg-opacity-[5%] border-b border-gray-800">
      <div className="flex justify-between items-center">
        <div className="text-white">{item.question}</div>
        <div
          className="cursor-pointer text-p1 transform transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={() => setActive(!active)}
        >
          {active ? (
            <div className="text-white text-5xl border rounded-full w-10 h-10 text-center font-normal flex justify-center items-center 
            transition-all duration-300 rotate-180 hover:bg-white/10">
              <div className="mb-1">-</div>
            </div>
          ) : (
            <div className="text-white text-5xl border rounded-full w-10 h-10 flex items-center justify-center font-normal
            transition-all duration-300 hover:bg-white/10">
              <div className="mt-1">+</div>
            </div>
          )}
        </div>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out 
        ${active 
          ? 'max-h-96 opacity-100 mt-2 transform translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-4'}`}
      >
        <div className="text-gray-500 text-sm">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;