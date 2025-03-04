import { useState, useEffect } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./About/Aboutpage";
import Skill from "./Skill/Skill";
import Experiance from "./Experiance/Experiance";
import TestimonialSlider from "./Testimonial";
import Education from "./Education";
import Footer from "./Footer";
import Loading from "./LoadingPage";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <div className="bg-gray-900 h-full">
      {isLoading ? (
        <Loading /> // Show loading screen for 3 seconds
      ) : (
        <>
          <Header />
          <HeroSection />
          <About />
          <Skill />
          <Education />
          <Experiance />
          <TestimonialSlider />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
