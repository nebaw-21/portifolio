import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Header from "../Header"
import {certificates} from "./data";

export default function CertificateShowcase() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (

    <>
    <Header />
    
    <div className="min-h-screen bg-gray-900 py-12 px-6 relative overflow-hidden">
      {/* Confetti Celebration */}
      {showConfetti && <Confetti width={width} height={height} />}


      <h2 className="text-center text-white text-4xl font-bold mb-10">
        Certifications 🏆
      </h2>

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
            {/* Certificate Image */}
            <div className="relative w-full h-48 mb-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Certificate Details */}
            <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    
    
    </>
  );
}
