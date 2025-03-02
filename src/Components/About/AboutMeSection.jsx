import { Globe } from "lucide-react";
import { personalDetails } from "./data";

export default function AboutMeSection() {
  return (
    <>
      {/* About Section */}
      <section className="mb-16 px-4 sm:px-6 lg:px-0 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-white">
          <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-md">
            <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </span>
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg leading-relaxed text-white">{personalDetails.bio}</p>
            <p className="text-lg leading-relaxed text-white">
              I'm constantly learning and exploring new technologies to stay at the cutting edge of web development.
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
            </p>
          </div>

          <div data-aos="flip-down" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 ">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Personal Details</h3>
            <div className="space-y-3">
              <div>
                <span className="text-gray-500 dark:text-gray-400">Location:</span>
                <p className="text-gray-900 dark:text-white">{personalDetails.location}</p>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Email:</span>
                <p className="text-gray-900 dark:text-white">{personalDetails.email}</p>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Available for:</span>
                <p className="text-gray-900 dark:text-white">Freelance, Full-time opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
