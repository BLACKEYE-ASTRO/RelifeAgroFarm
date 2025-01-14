import React from "react";
import { orange } from "../assets";
import { styles } from "../styles";
import { features } from "../constants";

const About = () => {
  return (
    <>
      <div className={`${styles.paddingX} px-4`}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-36 mt-16 mb-10">
          <div className="flex justify-center md:w-1/2">
            <img
              src={orange}
              alt="orange"
              className="max-w-[250px] md:max-w-[450px] w-full"
            />
          </div>
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="damion-regular text-2xl text-[#6a994e]">
              A Few Words About Our Farm
            </h2>
            <h1 className="text-5xl font-bold my-5">About Us</h1>
            <p className="max-w-[420px] mx-auto md:mx-0">
              Our farm is made up of two certified organic properties, where
              our farmers are constantly growing organic vegetables, crops, and
              fruits of the highest quality in the US.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center bg-black text-white p-5 gap-8 mb-10">
        {features.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center p-6 max-w-xs bg-[#1a1a1a] rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <img
                src={image}
                alt={title}
                className="w-16 h-16 object-contain"
              />
              <span
                className="text-5xl font-bold text-transparent"
                style={{
                  WebkitTextStroke: "2px #6a994e",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {`0${id}`}
              </span>
            </div>
            <h1 className="uppercase text-2xl font-bold mb-4">{title}</h1>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
