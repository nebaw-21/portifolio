import { useState, useEffect } from "react";
import { FaHtml5, FaNodeJs, FaLaravel, FaPhp, FaAws, FaGit, FaDocker, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function SkillsSection() {
  const [expanded, setExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Check if screen width is below 768px
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="w-6 h-5" /> },
    { name: "CSS", icon: <IoLogoCss3 className="w-6 h-5" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-6 h-5" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="w-6 h-5" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-5" /> },
    { name: "React.js", icon: <RiReactjsFill className="w-6 h-5" /> },
    { name: "Next.js", icon: <RiNextjsFill className="w-6 h-5" /> },
    { name: "PHP", icon: <FaPhp className="w-6 h-5" /> },
    { name: "Laravel", icon: <FaLaravel className="w-6 h-5" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-5" /> },
    { name: "Express.js", icon: <SiExpress className="w-6 h-5" /> },
    { name: "MongoDB", icon: <DiMongodb className="w-6 h-5" /> },
    { name: "MySQL", icon: <GrMysql className="w-6 h-5" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-5" /> },
    { name: "AWS", icon: <FaAws className="w-6 h-5" /> },
    { name: "Git", icon: <FaGit className="w-6 h-5" /> },
    { name: "Docker", icon: <FaDocker className="w-6 h-5" /> },
  ];

  return (
    <section className="mt-4 md:mt-8 bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Title with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-8 flex flex-col items-center"
        >
          <motion.h2 className="text-2xl md:text-3xl mt-4 font-bold tracking-tighter text-white flex items-center gap-3">
            <FaCode className="text-cyan-500 w-8 h-8" />
            Skills & Technologies
          </motion.h2>
          <p className="text-white max-w-[600px] mx-auto">
            I specialize in modern web technologies and frameworks, focusing on building fast, responsive, and user-friendly applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-5 p-4"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6">
            {(isSmallScreen && !expanded ? skills.slice(0, 9) : skills).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl border border-gray-700 hover:shadow-md transition-all duration-300 shadow-sm shadow-cyan-500"
              >
                <div className="text-cyan-500 mb-3">{tech.icon}</div>
                <span className="font-medium text-white text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Toggle Button (Only on Small Screens) */}
        {isSmallScreen && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-cyan-500 bg-gray-900 px-4 py-2 rounded-lg hover:scale-110 transition-all duration-300"
            >
              {expanded ? <MdKeyboardArrowUp size={30} /> : <MdKeyboardArrowDown size={30} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
