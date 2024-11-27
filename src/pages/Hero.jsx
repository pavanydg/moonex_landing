import React, { useState } from "react";
import Button from "../components/Button";
import star1 from "../assets/star1.svg"
import star2 from "../assets/star2.svg"

const Hero = () => {

  return (
    <section className="relative container font-fira-code text-white font-extrabold flex items-center h-lvh mx-auto -mb-16">
      <div>
        <div className="ml-4 md:text-5xl text-3xl lg:text-6xl xl:text-7xl">
          Trusted Multi-<br className="md:hidden"/>Chain<br /> <span className="text-p2">DEX</span>{" "}
          Platform
        </div>
        <div className="ml-4 text-md md:text-xl lg:text-2xl text-[#9E9E9E]">
          Trade, earn and own crypto on to all-in-one <br className="xl:hidden"></br>multi-chain DEX
        </div>
        <div className="mt-10 flex gap-7">
          <button className="md:flex justify-center items-center w-36 md:w-40 md:h-12 bg-gradient-to-r from-p1 to-[#FBD966] rounded-full text-sm text-black ml-5 md:z-10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 z-10">
            Connect Wallet
          </button>
          <button className="md:flex justify-center items-center w-36 md:w-40 h-12 rounded-full text-sm text-p1 border border-p1 hover:bg-p1 hover:text-black md:z-10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 z-10">
            Trade Crpto
          </button>
        </div>
      </div>
      {/* yellow globe */}
      <div className="absolute w-20 h-20 md:h-32 md:w-32 top-40 right-16 md:top-80 md:right-8 lg:w-64 lg:h-64 bg-gradient-to-r 2xl:right-64 from-[#FFF6D7] to-p1 rounded-full rotate-45 md:z-10"></div>
      {/* solar axis */}
      <div className="absolute top-[150px] left-[-200px] w-[650px] h-[300px] md:w-[780px] md:h-[400px] lg:w-[1200px] lg:h-[520px] border rounded-[50%] rotate-[14deg] border-[#484848] border-opacity-70 z-[-1]"></div>
      <div className="absolute top-[50px] -left-[300px] md:w-[1100px] md:top-[50px] md:h-[600px] md:-left-[400px] lg:top-[30px] lg:-left-[500px] w-[900px] h-[500px]  lg:w-[1700px] lg:h-[750px] border rounded-[50%] rotate-[14deg] border-[#484848] border-opacity-70 z-[-1]"></div>
      <div className="absolute top-[-70px] left-[-550px] lg:top-[-90px] lg:left-[-850px] w-[1300px] md:w-[1500px] md:h-[800px] md:left-[-650px] h-[700px]  lg:w-[2400px] lg:h-[1032px] border rounded-[50%] rotate-[14deg] border-[#484848] border-opacity-70"></div>
      {/* stars */}
      <img src={star1} className="absolute top-40 left-10"/>
      <img src={star1} className="right-16 absolute bottom-24 md:right-48"/>
      <img src={star2} className="absolute top-20 right-12 md:top-40 md:right-48"/>
      {/* background colors */}
      <div className="absolute w-[350px] bg-[#edd955] h-[150px] rounded-[50%] rotate-90 top-0 -left-40 blur-[150px]"></div>
      <div className="absolute w-[350px] bg-[#edd955] h-[150px] rounded-[50%]  blur-[180px] bottom-60 -right-60 lg:right-28"></div>
    </section>
  );
};

export default Hero;
