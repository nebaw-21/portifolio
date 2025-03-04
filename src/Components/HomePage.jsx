import Header from "./Header"
import HeroSection from "./HeroSection";
import About from "./About/Aboutpage";
import Skill from "./Skill/Skill"
import Experiance from "./Experiance/Experiance"
import TestimonialSlider from "./Testimonial";
import Education from "./Education"
import Footer from "./Footer"

const Home = () => {
  
  return (
<div className="bg-gray-900 h-full"> 
<Header />
<HeroSection />
<About />
<Skill />
<Education />
<Experiance />
<TestimonialSlider />
<Footer />



</div>

  );
};

export default Home;
