import { Server } from "lucide-react";
import { experiences } from "./data";
import Kuraz from "../../assets/kurazlogo.png";
import { motion } from "framer-motion";

export default function Experience() {
  const title = "WorkExperience".split(""); // Removed space in string

  return (
    <>
      {/* Animated Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex justify-center items-center mt-8"
      >
        <Server className="text-cyan-500 w-8 h-8 mr-2" />
        <h2 className="text-3xl font-bold text-white flex">
          {title.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className={letter === "E" ? "ml-2" : ""} // Adds space before "Experience"
            >
              {letter}
            </motion.span>
          ))}
        </h2>
      </motion.div>

      {/* Experience Cards */}
      <section className="shadow-xl mx-auto max-w-6xl py-6 px-4 bg-gray-900 md:mt-8 shadow-cyan-500">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-gray-900 rounded-lg shadow-md px-4"
            >
              <h3 className="font-semibold text-xl text-white">{exp.position}</h3>
              <span className="px-3 py-1 text-white rounded-full text-sm">
                {exp.period}
              </span>

              {/* Logo and Company Name */}
              <div className="flex items-center gap-2 mt-2">
                <img 
                  src={Kuraz}
                  alt="Kuraz Tech Logo"
                  className="w-12 h-12 object-contain rounded-full"
                />
                <p className="text-white">{exp.company}</p>
              </div>

              <p className="text-white">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
