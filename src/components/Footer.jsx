import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Logo } from "../assets";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  return (
    <motion.footer
      className="bg-green-800 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={Logo}
              alt="RelifeAgro Farm Logo"
              className="w-[200px] mb-4"
            />
            <p className="text-lg">
              RelifeAgro is committed to delivering high-quality agricultural
              products to support sustainable farming.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 ">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-orange-500 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-orange-500 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 ">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhoneAlt className="text-xl" />
                <span className="ml-2">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-xl" />
                <span className="ml-2">info@relifeagro.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-xl" />
                <span className="ml-2">123 Agro Street, Mumbai, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6 relative mt-4">
              <div
                onMouseEnter={() => setHoveredIcon("facebook")}
                onMouseLeave={() => setHoveredIcon("")}
                className="text-white text-3xl hover:text-blue-700 transition"
              >
                <FaFacebookF />
                {hoveredIcon === "facebook" && (
                  <motion.div
                    className="absolute -top-8 left-0 bg-blue-700 text-white py-1 px-3  rounded-md text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Follow us on Facebook
                  </motion.div>
                )}
              </div>
              <div
                onMouseEnter={() => setHoveredIcon("twitter")}
                onMouseLeave={() => setHoveredIcon("")}
                className="text-white text-3xl hover:text-blue-400 transition"
              >
                <FaTwitter />
                {hoveredIcon === "twitter" && (
                  <motion.div
                    className="absolute -top-8 left-0 bg-blue-400 text-white py-1 px-3 rounded-md text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Follow us on Twitter
                  </motion.div>
                )}
              </div>
              <div
                onMouseEnter={() => setHoveredIcon("instagram")}
                onMouseLeave={() => setHoveredIcon("")}
                className="text-white text-3xl hover:text-[#ff006e] transition"
              >
                <FaInstagram />
                {hoveredIcon === "instagram" && (
                  <motion.div
                    className="absolute -top-8 left-0 bg-[#ff006e] text-white py-1 px-3 rounded-md text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Follow us on Instagram
                  </motion.div>
                )}
              </div>
              <div
                onMouseEnter={() => setHoveredIcon("linkedin")}
                onMouseLeave={() => setHoveredIcon("")}
                className="text-white text-3xl hover:text-[#0077B5] transition"
              >
                <FaLinkedinIn />
                {hoveredIcon === "linkedin" && (
                  <motion.div
                    className="absolute -top-8 left-0 bg-[#0077B5] text-white py-1 px-3 rounded-md text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Follow us on LinkedIn
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <motion.div
        className="bg-green-700 text-center py-4 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} RelifeAgro Farm. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
