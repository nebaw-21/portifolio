import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

export default function EducationTimeline() {
  const educationData = [
    {
      degree: "Bachelor Of Science In Computer Science",
      period: "2016-2020",
      institution: "Massachusetts Institute Of Technology (MIT)",
      description:
        "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
    },
    {
      degree: "Master Of Computer Science",
      period: "2020-2022",
      institution: "Stanford University",
      description:
        "Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.",
    },
  ];

  const text = "Education".split(""); // Splitting text for animation

  return (
    <>
      {/* Animated Title on Scroll */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Triggers animation when 50% in view
        className="flex justify-center items-center mt-4"
      >
        <FaGraduationCap className="text-cyan-500 w-8 h-8 mr-2" /> {/* Icon beside text */}
        <h1 className="text-3xl font-bold text-white flex">
          {text.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }} // Ensures animation only happens once
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      {/* Timeline Section */}
      <div className="flex justify-center p-5 bg-gray-900">
        <div className="relative max-w-3xl w-full py-5">
          {/* Timeline Vertical Line */}
          <div className="absolute left-5 ml-2 top-0 h-full w-1 bg-gray-300 rounded-md"></div>

          {educationData.map((education, index) => (
            <div key={index} className="relative flex items-start mb-10 pl-10">
              {/* Timeline Marker */}
              <div className="absolute left-0 top-4 w-6 h-6 rounded-full border-4 border-cyan-500 bg-white"></div>

              {/* Content Card with AOS Animation */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-gray-900 shadow-lg shadow-cyan-500 rounded-lg p-5 w-full transition-all duration-300 hover:shadow-lg"
              >
                <h2 className="text-lg font-semibold text-white">{education.degree}</h2>
                <p className="text-sm text-white mb-1">
                  <span className="font-medium">{education.period}</span> |{" "}
                  <span className="font-medium">{education.institution}</span>
                </p>
                <p className="text-sm text-white">{education.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
