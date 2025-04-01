"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"
import Header from "../Header"
import { certificates } from "./data"

export default function CertificateShowcase() {
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 7000)
    return () => clearTimeout(timer)
  }, [])

  // Handle ESC key to close fullscreen image
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const text = "Certifications".split("")

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-900 py-12 px-6 relative overflow-hidden">
        {/* Confetti Celebration */}
        {showConfetti && <Confetti width={width} height={height} />}

        {/* Animated Title on Scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center items-center mt-4 mb-6"
        >
          <h1 className="text-cyan-500 text-3xl">🏆</h1>
          <h1 className="text-3xl font-bold text-white flex ml-2">
            {text.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-xl p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              {/* Certificate Image - Fixed aspect ratio container */}
              <div
                className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-700 flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>

              {/* Certificate Details */}
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Image Viewer */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Certificate fullscreen view"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
                <button
                  className="absolute top-4 right-4 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all duration-200"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

