import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero_Img1, Hero_Img2, Hero_Img3 } from "../assets";
import About from "./About";
import Products from "./Products";

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
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle, tagline, buttonText } = slides[currentSlide];

  const slideVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <>
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden bg-black">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className="absolute w-full h-full flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center px-4"
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
      <About/>
      <Products/>
      </>
  );
};

export default Hero;
