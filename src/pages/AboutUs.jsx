import React from "react";
import tick from "../assets/check_bold.svg";
import cross from "../assets/close_small.svg";
import uniswap from "../assets/uniswap.svg";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";

const AboutUs = () => {
  return (
    <section className="relative container font-fira-code text-white font-extrabold flex justify-center mx-auto flex-col px-4 md:px-0">
      <div className="text-3xl md:text-6xl py-16">
        Why <span className="text-p1">moonEx?</span>
      </div>
      <table className="table-auto bg-[#FFFFFF] bg-opacity-[2%] rounded-[20px] border border-gray-700 overflow-hidden">
        <thead className="bg-opacity-[5%] border-b border-gray-700">
          <tr className="border-b border-gray-700">
            <th className="px py-4 text-sm md:text-3xl text-p1 text-center border-r border-gray-700">Comparison</th>
            <th className="px-6 py-4 border-r border-gray-700">
              <div className="flex justify-center items-center space-x-2">
                <img src={logo} alt="logo" width={24} height={40} />
                <img src={logo2} alt="logo2" width={140} height={40} />
              </div>
            </th>
            <th className="px-6 py-4">
              <div className="flex justify-center">
                <img src={uniswap} alt="uniswap" width={240} height={40}/>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-xl divide-y divide-gray-700">
          {[
            "Point no one",
            "Point no two this",
            "Another point example",
            "More points",
            "Final point",
          ].map((text, idx) => (
            <tr key={idx} className="border-b border-gray-700">
              <td className="text-xs md:text-lg px-6 py-4 text-center border-r border-gray-700">{text}</td>
              <td className="px-6 py-4 text-center border-r border-gray-700">
                <div className="flex justify-center">
                  <img src={tick} alt="tick" className="w-6 md:8"/>
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex justify-center">
                  <img src={cross} alt="cross" className="w-10 md:8"/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-0 absolute md:w-[350px] bg-[#edd955] h-[160px] rounded-[50%] back blur-[200px] top-96 left-80"></div>
    </section>
  );
};

export default AboutUs;
