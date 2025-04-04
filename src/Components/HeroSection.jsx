  import { useState, useEffect } from "react";
  import telegram from "../assets/telegram-svgrepo-com.svg";
  import instagram from "../assets/instagram-1-svgrepo-com.svg";
  import linkedin from "../assets/linkedin-svgrepo-com.svg";
  import github from "../assets/github-142-svgrepo-com.svg";
  import nebiyu from "../assets/nebiyu.png";
  import { FaDownload } from "react-icons/fa";

  const HeroSection = () => {
    const [angles, setAngles] = useState([
      { name: "telegram", angle: 150 },
      { name: "instagram", angle: 70 },
      { name: "linkedin", angle: 110 },
      { name: "github", angle: 20 },
    ]);

    // Adjust angles based on screen width
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          // Mobile screen angles (more spread out)
          setAngles([
            { name: "telegram", angle: 130 },
            { name: "instagram", angle: 70 },
            { name: "linkedin", angle: 100 },
            { name: "github", angle: 40 },
          ]);
        } else {
          // Default angles for larger screens
          setAngles([
            { name: "telegram", angle: 150 },
            { name: "instagram", angle: 70 },
            { name: "linkedin", angle: 110 },
            { name: "github", angle: 20 },
          ]);
        }
      };

      handleResize(); // Set angles on first render
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const downloadResume = () => {
      const googleDriveLink = "https://drive.google.com/file/d/1BQ7qN5uzDdU4eK9FCjbMZs8DIDhkJDQC/view?usp=drive_link"; 
      const link = document.createElement("a");
      link.href = googleDriveLink;
      link.download = "Nebiyu_Zewge_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <section className="relative bg-gray-900 text-white min-h-[650px] md:min-h-[530px] flex items-center shadow-2xl">
        <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 md:px-0">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-duration="1500" className="max-w-lg flex justify-center flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center inter-extrabold ">
              Hello! I'm <span className="block text-3xl md:text-4xl inter-extrabold ">Nebiyu Zewge</span>
            </h1>
            <p className=" text-sm md:text-lg text-white mt-6 text-center  inter-black">Full Stack Software Developer and Certified AWS Solution Architect</p>
            <button onClick={downloadResume} className="mt-6 bg-transparent border hover:shadow-2xl shadow-lg shadow-cyan-500 border-white px-8 py-3 rounded-lg flex items-center gap-2  transition">
              Get Resume <FaDownload />
            </button>
          </div>

          {/* Right Content - Image & Social Links */}
          <div data-aos="fade-left" data-aos-duration="1500" className="relative mt-10 md:mt-0 md:mr-32 bg-inherit">
            <img
              src={nebiyu}
              alt="Nebiyu Zewge"
              className="w-72 md:w-96 bg-inherit hover:scale-105 transition-transform duration-500 hover:shadow-xl"
            />

            {/* Social Media Icons (Half-Moon Shape) */}
            <div className="hidden  md:block absolute top-[150px] md:top-[205px] lg:top-[200px] right-[130px] md:right-[100px] transform -translate-y-1/2 px-2">
              <div className="relative h-[200px] w-[100px]">
                {[
                  { img: telegram, link: "https://t.me/nebaw_21", name: "telegram" },
                  { img: instagram, link: "https://www.instagram.com/nebiyu_zewge", name: "instagram" },
                  { img: linkedin, link: "https://www.linkedin.com/in/nebiyu-zewge", name: "linkedin" },
                  { img: github, link: "https://github.com/nebaw-21", name: "github" },
                ].map((social, index) => {
                  // Find the matching angle from state
                  const socialAngle = angles.find((a) => a.name === social.name)?.angle || 0;
                  const angleInRadians = (socialAngle * Math.PI) / 180;
                  const radius = 165; // Radius of the half-moon
                  const x = Math.sin(angleInRadians) * radius;
                  const y = -Math.cos(angleInRadians) * radius;

                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className= {` ${social.name === "github" ? "bg-white" : ""} absolute  w-8 h-8 rounded-full flex items-center justify-center transition transform -translate-x-1/2 -translate-y-1/2 hover:scale-110`} 
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                      aria-label={`Social media link ${index + 1}`}
                    >
                      <img src={social.img} alt={`Social icon ${index + 1}`} className="w-8 h-8 object-contain" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;
