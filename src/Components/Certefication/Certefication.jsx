import { useState } from "react";
import { motion } from "framer-motion";
import { certificates } from "./data"; // Import an array of certificates
import Header from "../Header"

export default function CertificationShowcase() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
<>

<Header/>

    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">My Certifications</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all text-white"
            onClick={() => setSelectedCert(cert)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={cert.image} alt={cert.title} className="rounded-lg" />
            <h2 className="text-lg font-semibold mt-2">{cert.title}</h2>
            <p className="text-sm text-white">{cert.organization}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Modal for viewing certificate details */}
      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-2xl max-w-lg text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <img src={selectedCert.image} alt={selectedCert.title} className="rounded-lg" />
            <h2 className="text-2xl font-bold mt-4">{selectedCert.title}</h2>
            <p className="text-white mt-2">{selectedCert.description}</p>
            <button className="mt-4 px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700" onClick={() => setSelectedCert(null)}>Close</button>
          </motion.div>
        </div>
      )}
    </div>
</>

  );
}
