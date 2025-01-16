import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { Logo } from "../assets";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 ${
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="w-full py-2 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Title */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt="logo" className="md:w-[200px] w-[160px]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                to={nav.path}
                className={`${
                  active === nav.title
                    ? "text-orange-600"
                    : "text-orange-500"
                } hover:text-orange-600 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </Link>
              {/* Underline */}
              <span
                className={`absolute left-0 bottom-[-2px] w-0 h-[2px] bg-orange-600 transition-all duration-300 ease-in-out group-hover:w-full ${
                  active === nav.title ? "w-full" : "w-0"
                }`}
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <AiOutlineClose
              className="text-orange-400 w-7 h-7 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineMenu
              className="text-orange-400 w-7 h-7 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    to={nav.path}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title
                        ? "text-orange-500"
                        : "text-orange-400"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    {nav.title}
                  </Link>
                  {/* Underline */}
                  <span
                    className={`absolute left-0 bottom-[-2px] w-0 h-[2px] bg-orange-500 transition-all duration-300 ease-in-out group-hover:w-full ${
                      active === nav.title ? "w-full" : "w-0"
                    }`}
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
