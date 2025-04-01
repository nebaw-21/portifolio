import { FaGithub } from "react-icons/fa";

export default function SmallCard({ title, image, link }) {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 mt-4 text-white rounded-2xl shadow-cyan-500 shadow-sm overflow-hidden border border-gray-700 transition-all hover:shadow-lg max-w-[400px] mx-auto">
        {/* Image Section - Fixed aspect ratio container */}
        <div className="w-full  aspect-video bg-gray-800 overflow-hidden flex items-center justify-center">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 w-full p-4 text-center">
          <h1 className="text-lg md:text-xl font-extrabold tracking-wide text-white">
            {title}
          </h1>

          <div className="flex p-2 gap-3 justify-end md:justify-start">
            <FaGithub className="w-6 h-8" />
            <a 
              href={link} 
              className="md:text-lg font-semibold text-blue-500 hover:underline self-start transition-transform transform hover:translate-x-2"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}