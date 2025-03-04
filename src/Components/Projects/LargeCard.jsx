import img1 from "../../assets/download-removebg-preview.png";
import { FaGithub } from "react-icons/fa";


export default function LargeCard() {
  return (
<div className="p-4 md:p-0">

    <div className="flex flex-col md:flex-row gap-8 p-4 mt-4 text-white rounded-2xl shadow-cyan-500 shadow-sm overflow-hidden border border-gray-700 transition-all  hover:shadow-lg  max-w-5xl mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={img1} alt="Project" className="w-full h-55 object-contain rounded-lg shadow-md" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-4 w-full md:w-2/3 text-center">
        <h1 className="text-3xl font-extrabold tracking-wide text-white">Project Title</h1>
        <p className="text-lg text-white leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, fermentum nisl. Donec turpis odio, lacinia eu mi sit amet, dictum aliquam purus.
        </p>

        <div className="flex gap-3 justify-end md:justify-start  ">
<FaGithub className=" w-6 h-8"/>
        <a href="#" className="text-lg font-semibold text-blue-500 hover:underline self-start transition-transform transform hover:translate-x-2">
          View Project →
        </a>
        </div>
      </div>
    </div>






</div>

  );
}