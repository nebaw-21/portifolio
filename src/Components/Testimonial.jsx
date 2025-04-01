
import { useState, useRef, useEffect, useCallback } from "react"
import { TbMessageCircleUser } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tito from "../../src/assets/tito.jfif";


export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef(null);


  const testimonials = [
    {
      id: 1,
      name: "Tito Frezer",
      image: tito,
      text: "I worked with Nebiyu with a web based project that was in high demand for our company(internship management platform). He is a great developer with solid frontend experience especially React.js and UI/UX design. He was also disciplined and committed through out the whole project. I highly recommend to work with him",
  
    },


  ]

  const scrollToTestimonial = (index) => {
    if (sliderRef.current) {
      const scrollAmount = index * sliderRef.current.offsetWidth
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
      setActiveIndex(index)
    }
  }

  const handleScroll = useCallback(() => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft
      const cardWidth = sliderRef.current.offsetWidth
      const newIndex = Math.round(scrollPosition / cardWidth)
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }
  }, [activeIndex])

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener("scroll", handleScroll)
      return () => {
        slider.removeEventListener("scroll", handleScroll)
      }
    }
  }, [handleScroll])

  const text = "Testimonial".split(""); // Splitting text for animation

  return (
    <div  data-aos="flip-right" className="w-full max-w-5xl mx-auto px-4 py-12">
          {/* Animated Title on Scroll */}
          <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Triggers animation when 50% in view
        className="flex justify-center items-center mt-4"
      >
        <TbMessageCircleUser className="text-cyan-500 w-8 h-8 mr-2" /> {/* Icon beside text */}
        <h1 className="text-3xl font-bold text-white flex">
          {text.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }} // Ensures animation only happens once
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      {/* Testimonial Slider */}
      <div
        ref={sliderRef}
        className="flex  mt-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide shadow-2xl shadow-cyan-500"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="min-w-full w-full flex-shrink-0 snap-center px-4">
            <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center relative">
              {/* Profile Image */}
              <Link to={"https://www.linkedin.com/in/tito-frezer-3227661b8/"} className="w-20 h-20 rounded-full overflow-hidden border-4 border-white mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full scale-105 hover:scale-110"
                />
              </Link>

              {/* Testimonial Text */}
              <p className="text-white text-center mb-6 max-w-md">{testimonial.text}</p>

              {/* Signature/Name */}
              <div className="flex flex-col items-center">
                <svg width="100" height="30" viewBox="0 0 100 30" className="mb-2">
                  <path d="M10,20 Q30,5 50,20 Q70,35 90,20" stroke="cyan" fill="transparent" strokeWidth="1" />
                </svg>
                <Link to={"https://www.linkedin.com/in/tito-frezer-3227661b8/"} className="text-white font-semibold tracking-wider">{testimonial.name}</Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index ? "bg-cyan-500 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

