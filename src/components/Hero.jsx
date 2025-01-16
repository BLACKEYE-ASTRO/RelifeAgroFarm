import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero_Img1, Hero_Img2, Hero_Img3 } from "../assets";
import { orange } from "../assets";
import { styles } from "../styles";
import { features } from "../constants";

const slides = [
  {
    image: Hero_Img1,
    title: "Welcome to Our Farm",
    subtitle: "Products",
    tagline: "Grown with Love",
    buttonText: "Shop Now",
  },
  {
    image: Hero_Img2,
    title: "Freshly Harvested",
    subtitle: "Organic Produce",
    tagline: "Nature's Best",
    buttonText: "Explore More",
  },
  {
    image: Hero_Img3,
    title: "Sustainably Sourced",
    subtitle: "Eco-Friendly Farming",
    tagline: "For a Better Tomorrow",
    buttonText: "Learn More",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextSlideIndex].image;
  }, [currentSlide]);

  const { image, title, subtitle, tagline, buttonText } = slides[currentSlide];

  const slideVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[700px] mt-20 overflow-hidden bg-black">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            className="absolute w-full h-full flex justify-center items-center"
          >
            <motion.img
              src={image}
              alt={title}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              loading="lazy"
            />
            <motion.div
              className="relative text-center px-4"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
            >
              <motion.h2
                className="text-white text-xl sm:text-3xl md:text-4xl damion-regular"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {title}
              </motion.h2>
              <motion.h1
                className="text-white text-4xl sm:text-6xl md:text-8xl uppercase font-bold py-4 sm:py-6"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 1.2 }}
              >
                {subtitle}
              </motion.h1>
              <motion.h2
                className="text-white text-lg sm:text-2xl md:text-3xl uppercase pb-6 sm:pb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 1.4 }}
              >
                {tagline}
              </motion.h2>
              <motion.button
                className="uppercase px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-lg text-white font-semibold bg-orange-500 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 1.6 }}
              >
                {buttonText}
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
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

export default Hero;
