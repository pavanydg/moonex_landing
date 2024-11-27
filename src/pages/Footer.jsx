import React from "react";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import discord from "../assets/discord.svg";
import twitter from "../assets/Twitter.svg";
import telegram from "../assets/telegram.svg";

const Footer = () => {
  return (
    <div className="relative w-full h-80 bg-[#051422] flex flex-col justify-center">
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-around">
        <div className="flex-col items-center gap-4">
          <img src={logo} alt="logo" width={75} height={73} />
          <img src={logo2} alt="logo2" width={106} height={28} />
        </div>
        <div className="font-raleway text-white font-semibold flex items-center gap-10">
          <div>About Us</div>
          <div>Roadmap</div>
          <div>FAQs</div>
          <div>Contact Us</div>
        </div>
        <div>
          <div className="text-3xl font-raleway text-white font-bold text-center mb-5">
            Contact <span className="text-p1">Us</span>
          </div>
          <div className="flex gap-10">
            <img src={discord} />
            <img src={telegram} />
            <img src={twitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
