import { Server } from "lucide-react";
import { experiences } from "./data";
import Kuraz from "../../assets/kurazlogo.png"; // Ensure this is a high-quality image

export default function Experience() {
  return (
    <>
      <section data-aos="fade-right" className=" shadow-2xl px-4 md:px-0 bg-white/10 ">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-white">
          <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-md">
            <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </span>
          Work Experience
        </h2>
        <div className="space-y-6 ">
          {experiences.map((exp, index) => (
            <div key={index} className=" bg-white/10  rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-xl text-white ">{exp.position}</h3>
              <span className="px-3 py-1 text-white rounded-full text-sm">
                {exp.period}
              </span>

              {/* Logo and Company Name */}
              <div className="flex items-center gap-1mt-2">
                <img 
                  src={Kuraz}
                  alt="Kuraz Tech Logo"
                  className="w-12 h-12 object-contain rounded-full  "
                />
                <p className="text-white">{exp.company}</p>
              </div>

              <p className="text-white mt-3">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
