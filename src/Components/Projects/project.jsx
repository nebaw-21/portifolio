import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
  { id: 9, title: "Crypto Dashboard", image: "crypto.jpg", link: "#" },
  { id: 10, title: "Image Recognition", image: "image-recognition.jpg", link: "#" },
  { id: 11, title: "Portfolio Website", image: "portfolio.jpg", link: "#" },
];

const itemsPerPage = 7;

export default function ProjectShowcase() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const displayedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header />
      <section className="p-10 bg-gray-900 text-white min-h-screen text-center">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">🚀 My Projects</h2>

        {/* Project Display Layout */}
        <div className="flex flex-col gap-8 items-center">
          {displayedProjects.map((project, index) => {
            if (index === 0 || index === 3) {
              // Large Card for 1st and 4th project
              return <LargeCard key={project.id} />;
            } else if (index === 1 || index === 2 || index === 4 || index === 5) {
              // Small Cards in pairs
              if (index % 2 === 1) {
                return (
                  <div key={project.id} className="flex gap-6 justify-center">
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
