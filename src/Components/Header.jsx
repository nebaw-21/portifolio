import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaProjectDiagram, FaCertificate } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import profilePic from "../assets/photo_2025-02-21_19-16-53.jpg"; // Replace with actual profile image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto p-2 flex items-center justify-between shadow-2xl shadow-cyan-500">
        {/* Mobile Menu Button (Moved to Left) */}
        <button
          className="md:hidden mt-2 transition"
          onClick={() => setIsOpen(true)}
        >
          <FaBars className="text-3xl text-cyan-500 shadow-sm hover:shadow-lg shadow-cyan-500 hover:scale-105 cursor-pointer" />
        </button>

        {/* Desktop Menu (Centered on Large Screens) */}
        <ul className="hidden md:flex w-full justify-evenly space-x-8 mt-2 inter-bold ">
          {[
            { name: "Home", icon: <FaHome  className="text-cyan-500"/> },
            { name: "Projects", icon: <FaProjectDiagram  className="text-cyan-500"/> },
            { name: "Certificates", icon: <FaCertificate  className="text-cyan-500"/> },
          ].map((item) => (
            <li key={item.name} className="flex items-center gap-2">
              <Link
                to={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
                className="hover:text-white transition flex items-center gap-2"
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-gray-800 p-6 shadow-lg z-50 md:hidden flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 left-4 p-2 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes className="text-2xl text-cyan-500 shadow-sm shadow-cyan-500 hover:scale-105 cursor-pointer" />
            </button>

            {/* Profile Image & Name */}
            <div className="mt-8 flex flex-col items-center">
              <img
                src={profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-cyan-500 shadow-md object-cover scale-105"
              />
              <h2 className="text-xl text-white mt-3 inter-bold ">Nebiyu Zewge</h2>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              {[
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/nebiyu-zewge" },
                { icon: <FaGithub />, link: "https://github.com/nebaw-21" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/nebiyu_zewge" },
                { icon: <FaTelegram />, link: "https://t.me/nebaw_21" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 text-2xl hover:scale-110 transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Mobile Menu Items */}
            <ul className="flex flex-col mt-4 space-y-4 text-lg w-full inter-medium  ">
              {[
                { name: "Home", icon: <FaHome className="text-cyan-500" /> },
                { name: "Projects", icon: <FaProjectDiagram  className="text-cyan-500"/> },
                { name: "Certificates", icon: <FaCertificate className="text-cyan-500" /> },
              ].map((item) => (
                <li key={item.name} className="w-full">
                  <Link
                    to={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
                    className="flex items-center gap-3 p-3 w-full text-white  rounded-lg transition hover:scale-105 "
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon} {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
