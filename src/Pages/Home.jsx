
import { useState, useEffect } from "react";
import "animate.css";
import Aboutpage from './Aboutpage';
import Contact from './Contact';
import Services from './Services';
import set from '/src/Components/Images/set1.png';
import imgr from '/src/Components/Images/img1r.png';
import ok from '/src/Components/Images/ok.png';
const Home = () => {
  const slides = [
    {
      text: "Welcome to Belleza Makeup. Where Beauty Meets Artistry.",
      image: imgr,
    },
    {
      text: "Discover your beauty with Us. Where every face tells a story.",
      image: ok,
    },
    {
      text: "Join us to redefine elegance and style!",
      image: set,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Remove animation class before changing the slide
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimate(true); // Reapply animation class after changing the slide
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimate(true);
    }, 500);
  };

  const prevSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimate(true);
    }, 500);
  };

  return (
    <div>
    <div className="bg-white-chocolate text-dark-brown min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Header */}
      <header className="w-full  text-3xl  pb-5 font-thin tracking-tight text-center lg:mt-5 lg:text-6xl animate__animated animate__fadeIn">
        Belleza Makeup
      </header>

      {/* Carousel */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl px-4 mt-6 space-y-6 md:space-y-0">
        {/* Text Section */}
        <div
          className={`md:w-1/2 text-left animate__animated ${
            animate ? "animate__slideInLeft" : ""
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            {slides[currentSlide].text}
          </h2>
          
          
        </div>

        {/* Image Section */}
        <div
          className={`md:w-1/2 animate__animated ${
            animate ? "animate__slideInRight" : ""
          }`}
        >
          <img
            src={slides[currentSlide].image}
            alt="Makeup Slide"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button
          className="bg-golden-beige text-black py-1 px-3 rounded hover:bg-dark-golden transition text-xl"
          onClick={prevSlide}
        >
          &lt;
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button
          className="bg-golden-beige text-black py-1 px-3 rounded hover:bg-dark-golden transition text-xl"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
     
    </div>
    <div className="bg-black bg-cover">
      <Aboutpage/>
      <Services/>
      <Contact/>
      </div>
</div>
  );
};

export default Home;



