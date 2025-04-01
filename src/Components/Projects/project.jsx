"use client"

import { useState, useEffect } from "react"
import Header from "../Header"
import LargeCard from "./LargeCard"
import SmallCard from "./SmallCard"

const projects = [
  {
    id: 0,
    title: "Movie App",
    image: "../../../src/assets/movie_app.jpg",
    link: "https://github.com/nebaw-21/movie-app.git",
    description:
      "The Movie App, built with React and Vite, fetches movie data from the TMDB API. Users can browse, search, view details, receive new release notifications, and share favorites. It features a user-friendly interface with Tailwind CSS for styling.",
  },
  {
    id: 1,
    title: "Movies Recommendation Chrome Extension",
    image: "../../../src/assets/chrome.jpg",
    link: "https://github.com/nebaw-21/Movies_Recommendation_chrome_extension.git",
  },
  {
    id: 2,
    title: "PayPal React Integration",
    image: "../../../src/assets/paypal.avif",
    link: "https://github.com/nebaw-21/paypal_integration.git",
  },
  {
    id: 3,
    title: "E-commerce Frontend",
    image: "../../../src/assets/frontend.jpg",
    link: "https://github.com/nebaw-21/ecommerce-frontend.git",
    description:
      "This e-commerce app provides a basic structure with a responsive design using Tailwind CSS. Built with React.js and Create React App, it is easy to customize and extend, offering a solid foundation for online stores",
  },
  {
    id: 4,
    title: "AI Chatbot App",
    image: "../../../src/assets/ai-chatbot-apps.jpg",
    link: "https://github.com/nebaw-21/chatbot_integration.git",
  },
  {
    id: 5,
    title: "Financial Dashboard",
    image: "../../../src/assets/financial.jpg",
    link: "https://github.com/nebaw-21/financial_dashboard_app.git",
  },

  {
    id: 6,
    title: "E-commerce backend",
    image: "../../../src/assets/frontend.jpg",
    link: "https://github.com/nebaw-21/ecomm-backend.git",
    description:
      "The e-commerce backend project is built with Laravel, a PHP framework. It features a robust routing engine, dependency injection, ORM for database management, and supports real-time event broadcasting. The application is designed for scalability and efficiency, making it suitable for modern online shopping platforms.",
  },
  {
    id: 7,
    title: "Tec-Tac-Toe-game",
    image: "../../../src/assets/tec-tac-toe.jpg",
    link: "https://github.com/nebaw-21/Tec-Tac-Toe-game.git",
  },
  {
    id: 8,
    title: "Simple Guess Game",
    image: "../../../src/assets/guess.jpg",
    link: "https://github.com/nebaw-21/simple_guess_game.git",
  },
  {
    id: 9,
    title: "Hotel project",
    image: "../../../src/assets/hotel.jpg",
    link: "https://github.com/nebaw-21/hotel_template.git",
    description:
      "The hotel_template project is a minimal setup for developing a hotel management application using React and Vite. It features Hot Module Replacement (HMR) for real-time updates during development and integrates ESLint for code quality. The project leverages modern technologies like Babel and SWC, providing a fast and efficient environment for building user interfaces.",
  },
  {
    id: 10,
    title: "To-Do List App",
    image: "../../../src/assets/todo.png",
    link: "https://github.com/nebaw-21/To_do_List_app.git",
  },
  {
    id: 11,
    title: "React Quiz App",
    image: "../../../src/assets/quiz.webp",
    link: "https://github.com/nebaw-21/Quiz_web_app.git",
  },

  {
    id: 12,
    title: "Portfolio Website",
    image: "../../../src/assets/portifolio.jpg",
    link: "https://github.com/nebaw-21/portifolio.git",
    description:
      "It is a portfolio website designed to showcase my skills, experience, and projects. Built with a clean and responsive design, it highlights my expertise in web development, including frontend and backend technologies. The site features an organized layout, interactive elements, and links to my work, providing a professional and engaging experience for visitors.",
  },
  {
    id: 13,
    title: "YouTube to MP3 Converter",
    image: "../../../src/assets/video_to_audio.png",
    link: "https://github.com/nebaw-21/video_to_audio_converter.git",
  },
  {
    id: 14,
    title: "Song Web App",
    image: "../../../src/assets/song.jpg",
    link: "https://github.com/nebaw-21/songapp_frontend.git",
  },
]

const itemsPerPage = 6

export default function ProjectShowcase() {
  const [currentPage, setCurrentPage] = useState(1)
  const [animateTitle, setAnimateTitle] = useState(false)

  // Split projects into large and small categories
  const largeProjects = projects.filter((project) => project.description)
  const smallProjects = projects.filter((project) => !project.description)

  // Paginate the projects
  const startIdx = (currentPage - 1) * itemsPerPage
  const largePerPage = 2
  const smallPerPage = 4

  const displayedLarge = largeProjects.slice(startIdx / 3, startIdx / 3 + largePerPage)
  const displayedSmall = smallProjects.slice(
    startIdx * (smallPerPage / itemsPerPage),
    startIdx * (smallPerPage / itemsPerPage) + smallPerPage,
  )

  const totalPages = Math.ceil(projects.length / itemsPerPage)

  useEffect(() => {
    setAnimateTitle(true)

    // Add parallax effect to background
    const handleMouseMove = (e) => {
      const stars = document.querySelectorAll(".star")
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      stars.forEach((star) => {
        const speed = Number.parseFloat(star.getAttribute("data-speed"))
        const offsetX = (x - 0.5) * speed
        const offsetY = (y - 0.5) * speed
        star.style.transform = `translate(${offsetX}px, ${offsetY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Generate stars for background
  const stars = Array(50)
    .fill()
    .map((_, i) => {
      const size = Math.random() * 3 + 1
      const speed = Math.random() * 20 + 10
      const top = Math.random() * 100
      const left = Math.random() * 100
      const delay = Math.random() * 5
      const duration = Math.random() * 3 + 2

      return (
        <div
          key={i}
          className="star absolute rounded-full bg-cyan-500"
          data-speed={speed}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `twinkle ${duration}s ease-in-out ${delay}s infinite alternate`,
          }}
        ></div>
      )
    })

  return (
    <>
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 0.8; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Header />

      <section className="relative pt-24 pb-16 px-4 md:px-10 min-h-screen overflow-hidden bg-gray-900 text-white">
        {/* Background stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">{stars}</div>

        {/* Gradient overlay - make it more subtle to preserve the bg-gray-900 color */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-gray-900 pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          {/* Animated Title */}
          <div className="mb-16 text-center">
            <div className="inline-block relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
                <span className="inline-block mr-3 text-cyan-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 inline-block animate-[float_4s_ease-in-out_infinite]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </span>
                {"My Projects".split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-700 ${
                      animateTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6 opacity-0 animate-[fadeInUp_0.8s_0.5s_forwards]">
              Explore my portfolio of web development projects showcasing my skills in frontend and backend
              technologies.
            </p>
          </div>

          {/* Project Display Layout */}
          <div className="flex flex-col gap-8 items-center justify-center opacity-0 animate-[fadeInUp_0.8s_0.9s_forwards]">
            {displayedLarge[0] && (
              <div className="w-full transform transition-all duration-500 hover:translate-y-[-5px]">
                <LargeCard
                  key={displayedLarge[0].id}
                  title={displayedLarge[0].title}
                  image={displayedLarge[0].image}
                  link={displayedLarge[0].link}
                  description={displayedLarge[0].description}
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
              {displayedSmall.slice(0, 2).map((project, index) => (
                <div
                  key={project.id}
                  className="transform transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <SmallCard title={project.title} image={project.image} link={project.link} />
                </div>
              ))}
            </div>

            {displayedLarge[1] && (
              <div className="w-full transform transition-all duration-500 hover:translate-y-[-5px]">
                <LargeCard
                  key={displayedLarge[1].id}
                  title={displayedLarge[1].title}
                  image={displayedLarge[1].image}
                  link={displayedLarge[1].link}
                  description={displayedLarge[1].description}
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
              {displayedSmall.slice(2, 4).map((project, index) => (
                <div
                  key={project.id}
                  className="transform transition-all duration-500"
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <SmallCard title={project.title} image={project.image} link={project.link} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-3 opacity-0 animate-[fadeInUp_0.8s_1.1s_forwards]">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={`p-3 rounded-full border-2 transition-all duration-300 ${
                  currentPage === 1
                    ? "border-gray-700 text-gray-600 cursor-not-allowed"
                    : "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
                }`}
                disabled={currentPage === 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-10 h-10 mx-1 rounded-lg transition-all duration-300 ${
                      currentPage === idx + 1
                        ? "bg-cyan-500 text-white font-medium"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className={`p-3 rounded-full border-2 transition-all duration-300 ${
                  currentPage === totalPages
                    ? "border-gray-700 text-gray-600 cursor-not-allowed"
                    : "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
                }`}
                disabled={currentPage === totalPages}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}


        </div>
      </section>
    </>
  )
}

