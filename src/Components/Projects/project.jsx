import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../Header";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";

const projects = [
  { id: 1, title: "Movie App", image: "movie.jpg", link: "#" },
  { id: 2, title: "AI Chatbot", image: "ai-chatbot.jpg", link: "#" },
  { id: 3, title: "Stock Tracker", image: "stock-tracker.jpg", link: "#" },
  { id: 4, title: "E-commerce Store", image: "ecommerce.jpg", link: "#" },
  { id: 5, title: "Personal Blog", image: "blog.jpg", link: "#" },
  { id: 6, title: "Crypto Dashboard", image: "crypto.jpg", link: "#" },
  { id: 7, title: "Image Recognition", image: "image-recognition.jpg", link: "#" },
  { id: 8, title: "Portfolio Website", image: "portfolio.jpg", link: "#" },
];

const itemsPerPage = 7;

export default function ProjectShowcase() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const displayedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const title = "My Projects".split("");

  return (
    <>
      <Header />
      <section className="p-10 bg-gray-900 text-white min-h-screen text-center">
        
        {/* Animated Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center items-center mb-8"
        >
          <FaProjectDiagram className="text-cyan-500 w-6 h-6 mr-2" />
          <h2 className="text-2xl md:text-3xl font-bold flex ml-2">
            {title.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className={letter === "P" ? "ml-2" : ""} // Adds space before "Projects"
              >
                {letter}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Project Display Layout */}
        <div className="flex flex-col gap-8 items-center">
          {displayedProjects.map((project, index) => {
            if (index === 0 || index === 3) {
              return <LargeCard key={project.id} />;
            } else if (index === 1 || index === 2 || index === 4 || index === 5) {
              if (index % 2 === 1) {
                return (
                  <div key={project.id} className="flex flex-col md:flex-row gap-6 justify-center">
                    <SmallCard />
                    {displayedProjects[index + 1] && <SmallCard />}
                  </div>
                );
              }
            }
            return null;
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-3">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`p-3 rounded-full border-2 border-gray-500 transition-all ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-500 hover:border-blue-500"
              }`}
              disabled={currentPage === 1}
            >
              <FaChevronLeft className="text-xl text-gray-300 w-4 h-4" />
            </button>

            <span className="px-4 py-1.5 rounded-lg text-lg bg-gray-800 shadow-md border border-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`p-3 rounded-full border-2 border-gray-500 transition-all ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-500 hover:border-blue-500"
              }`}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight className="text-xl text-gray-300 w-4 h-4" />
            </button>
          </div>
        )}
      </section>
    </>
  );
}
