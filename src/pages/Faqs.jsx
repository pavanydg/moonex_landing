import React from "react";
import { faq } from "../constants";
import FaqItem from "../components/FaqItem";

const Faqs = () => {
  return (
    <section className="relative container font-fira-code text-white font-extrabold mx-auto  flex flex-col items-center my-40">
      <div className="w-full max-w-[997px] h-auto bg-[#F7F9FF] bg-opacity-[2%] shadow-xl rounded-xl p-8">
        <div className="text-5xl w-full text-center text-p1 border-b border-gray-800 pb-10">FAQs</div>
        <div className="flex flex-col items-center w-full">
          {faq.map((item, index) => (
            <div className="w-full" key={index}>
              <FaqItem item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute md:w-[675px] bg-[#edd955] h-[314px] rounded-[50%] blur-[300px] -left-[800px] w-0"></div>
      <div className="absolute w-[340px] h-[150px] bg-[#edd955] rounded-[50%] blur-[300px] -right-60 top-3"></div>
    </section>
  );
};

export default Faqs;
