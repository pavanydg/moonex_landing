import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <div className="absolute top-0 w-full z-20">
      <nav className="flex justify-between items-center md:justify-around mt-6 font-raleway font-extrabold">
        <div className="flex items-center gap-4 ml-5 md:ml-0">
          <img 
            src={logo} 
            alt="logo" 
            width={75} 
            height={73} 
            className="transition-transform duration-300 hover:scale-105"
          />
          <img 
            src={logo2} 
            alt="logo2" 
            width={106} 
            height={28} 
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="md:flex items-center font-extrabold text-white xl:gap-28 lg:gap-16 md:gap-5 hidden">
          {NavLinks.map((link) => (
            <li 
              key={link.name} 
              className="cursor-pointer hover:text-p1 transition-all duration-300 transform hover:scale-110 hover:translate-y-[-2px]"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <button 
          className="md:flex justify-center items-center w-40 h-12 bg-gradient-to-r from-p1 to-[#FFE68F] rounded-full text-sm hidden 
          transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
        >
          Connect Wallet
        </button>

        {/* Mobile Navigation */}
        <div className="text-white md:hidden cursor-pointer mr-5">
          {!isOpen && (
            <AlignJustify 
              onClick={() => setIsOpen(true)} 
              size={24} 
              className="transition-transform duration-300 hover:scale-110 active:scale-90"
            />
          )}
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black bg-opacity-70 md:hidden z-20 transition-opacity duration-500 
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 w-full h-full bg-bg_p1 text-white p-8 transform transition-transform duration-500 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          
          <div className="flex justify-end mt-12 -mr-2 ">
            <X 
              onClick={() => setIsOpen(false)} 
              className="text-white cursor-pointer -mt-8 transition-transform duration-300 hover:rotate-90 active:scale-90" 
              size={24} 
            />
          </div>

          <ul className="space-y-6 font-raleway font-bold text-2xl">
            {NavLinks.map((link, index) => (
              <li 
                key={link.name} 
                className="border-b border-white border-opacity-20 pb-4 last:border-b-0 
                  transition-all duration-300 transform hover:translate-x-4 hover:text-p1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="w-full mt-8 h-12 bg-gradient-to-r from-p1 to-[#FFE68F] rounded-full text-sm font-raleway font-extrabold text-black
            transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;