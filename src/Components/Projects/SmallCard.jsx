
import img1 from "../../assets/sample2.jfif";
import { FaGithub } from "react-icons/fa";

export default function SmallCard() {
  return (
<div className="p-4 ">

    <div className="flex flex-col gap-4 p-4 mt-4 text-white rounded-2xl shadow-cyan-500 shadow-sm overflow-hidden border border-gray-700 transition-all  hover:shadow-lg max:w-[500px] mx-auto">
      {/* Image Section */}
      <div className="w-full flex justify-center items-center">
        <img src={img1} alt="Project" className="w-full h-55 object-contain rounded-lg shadow-md" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-4 w-full  text-center">
        <h1 className="text-2xl font-extrabold tracking-wide text-white">Project Title</h1>


        <div className="flex gap-3 justify-end md:justify-start">
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

