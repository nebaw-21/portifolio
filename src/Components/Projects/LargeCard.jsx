import { FaGithub } from "react-icons/fa";

export default function LargeCard({ title, image, link, description }) {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row p-2 gap-6 text-white rounded-2xl shadow-cyan-500 shadow-sm overflow-hidden border border-gray-700 transition-all hover:shadow-lg max-w-5xl mx-auto">
        {/* Image Section - Fixed aspect ratio container */}
        <div className="w-full md:w-1/2 aspect-video bg-gray-800 overflow-hidden rounded-lg flex items-center justify-center">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 p-4 md:p-6">
          <h1 className="text-lg md:text-xl font-extrabold tracking-wide text-white">
            {title}
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            {description}
          </p>

          <div className="flex gap-3 items-center mt-2">
            <FaGithub className="w-5 h-5 text-gray-400" />
            <a 
              href={link} 
              className="text-blue-500 hover:text-blue-400 font-semibold hover:underline transition-transform transform hover:translate-x-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}