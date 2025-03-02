import { Code, Server, Database, Globe } from "lucide-react";
import { skillIcons, skills } from "./data";
import { motion } from "framer-motion";

export default function Skill() {


  return (
    <>
      <section className="mb-16 shadow-2xl  px-4 md:px-0">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-white">
          <span className="bg-blue-100  p-2 rounded-md">
            <Code className="h-6 w-6 text-blue-600 " />
          </span>
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-white/10  rounded-lg shadow-md p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2 text-white ">
                {skillGroup.category === "Frontend" && <Code className="h-5 w-5" />}
                {skillGroup.category === "Backend" && <Server className="h-5 w-5" />}
                {skillGroup.category === "Database" && <Database className="h-5 w-5" />}
                {skillGroup.category === "Other" && <Globe className="h-5 w-5" />}
                {skillGroup.category}
              </h3>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: skillIndex * 0.2 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-white  flex items-center gap-2">
                        {skill.name}
                      </span>
                      {/* Display inline SVG icon */}
                      {skillIcons[skill.name] || null}
                    </div>
                    <div className="w-full bg-gray-200  rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-lime-700 via-lime-600 to-lime-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
