import React from "react";
import FeatureBox from "../components/FeatureBox";
import { features } from "../constants";

const Feature = () => {
  return (
    <section className="relative container font-fira-code text-white font-extrabold  mx-auto">
      <div className="text-3xl lg:text-6xl w-full text-center mt-16">
        Our <span className="text-p2">Features</span>{" "}
      </div>
      <div className="my-10 flex flex-col items-center md:grid md:grid-cols-2 md:justify-items-center xl:flex xl:flex-row gap-10 justify-center ">
        {features.map(item => (
            <div>
                <FeatureBox icon={item.icon} title={item.caption} description={item.text}/>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
