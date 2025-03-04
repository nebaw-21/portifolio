import { CiGlobe } from "react-icons/ci";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalDetails } from "./data";

export default function AboutMeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Word animation variant
  const letterVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.4 },
    }),
  };

  return (
    <>
      {/* About Section */}
      <section ref={ref} className="px-4 sm:px-6 lg:px-0 shadow-2xl">
        <h2 className="text-2xl md:text-3xl inter-extrabold mb-6 flex items-center gap-3 text-white">
         
            <CiGlobe className="text-cyan-500 w-8 h-8 " />
          

          {/* Animate each letter of "About Me" while keeping words together */}
          <motion.span className="flex">
            {"About".split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={letterVariant}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="w-2"></span> {/* Space between words */}
            {"Me".split("").map((letter, index) => (
              <motion.span
                key={index + 5} // Ensure unique key
                custom={index + 5}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={letterVariant}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm md:text-lg leading-relaxed text-white">{personalDetails.bio}</p>
          </div>

          <div data-aos="flip-down" className="bg-white/10 shadow-xl shadow-cyan-500 rounded-lg p-6 hover:scale-105">
            <h3 className="font-semibold text-lg md:text-xl mb-4 text-white">Personal Details</h3>
            <div className="space-y-3">
              <div>
                <span className="text-white">Location:</span>
                <p className="text-white ml-2">{personalDetails.location}</p>
              </div>
              <div>
                <span className="text-white">Email:</span>
                <p className="text-white ml-2">{personalDetails.email}</p>
              </div>
              <div>
                <span className="text-white">Available for:</span>
                <p className="text-white ml-2">Freelance, Full-time opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
