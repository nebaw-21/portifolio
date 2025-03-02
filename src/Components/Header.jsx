import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900  text-gray-300 py-2 mb-0 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

   {/* Desktop Menu - Spread items evenly */}
<ul className="hidden md:flex w-full justify-around">
  {["Home", "Projects", "Certificates"].map((item) => (
    <li key={item}>
      <Link
        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
        className="hover:text-white transition"
      >
        {item}
      </Link>
    </li>
  ))}
</ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Fancy Mobile Menu (Slides in from LEFT) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-gray-900 p-6 shadow-lg z-50 md:hidden"
          >
            {/* Close Button (On Left Side) */}
            <button
              className="text-xl absolute top-4 left-4"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* Mobile Menu Items */}
            <ul className="flex flex-col mt-8 space-y-3 text-lg">
              {["Home",  "Project", "Certificate"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="block text-center py-2 hover:text-gray-400 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
