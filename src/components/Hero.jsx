"use client"
import React, { useState, useEffect } from 'react';
// import 'swiper/css';

const Hero = () => {
  // 3 Startup & Innovation themed slides
  const slides = [
    {
      id: 1,
      title: "Shape the Future with Innovation",
      subtitle: "EMPOWERING NEXT-GEN STARTUPS",
      description: "Transform your unique ideas into reality. We provide the cutting-edge tech, resources, and expert guidance needed to scale your startup to new heights.",
      bgGradient: "from-slate-900 via-indigo-950 to-slate-900",
      accentColor: "text-indigo-400",
    },
    {
      id: 2,
      title: "Disrupt Industries, Build Reality",
      subtitle: "BREAK TRADITIONAL BOUNDARIES",
      description: "Break the mold and create what's next. Leverage our global network and robust framework to build, validate, and supercharge your business model.",
      bgGradient: "from-slate-900 via-purple-950 to-slate-900",
      accentColor: "text-purple-400",
    },
    {
      id: 3,
      title: "Scale Your Vision Globally",
      subtitle: "COLLABORATE AND GROW",
      description: "Innovation thrives on connection. Connect with world-class mentors, partners, and investors to expand your startup’s footprint across borders.",
      bgGradient: "from-slate-900 via-cyan-950 to-slate-900",
      accentColor: "text-cyan-400",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay logic: changes slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-slate-950 text-white font-sans">
      
      {/* Slides Container */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full bg-gradient-to-r ${slide.bgGradient} transition-opacity duration-1000 ease-in-out flex items-center ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Content Area */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-6">
                
                {/* Subtitle */}
                <span className={`text-xs md:text-sm font-bold tracking-[0.2em] uppercase ${slide.accentColor} block`}>
                  {slide.subtitle}
                </span>
                
                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
                  {slide.title}
                </h1>
                
                {/* Description */}
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                  {slide.description}
                </p>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <button className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 transition-all duration-300">
                    <span className="relative px-8 py-3.5 transition-all ease-in duration-700 bg-slate-900 rounded-md group-hover:bg-opacity-0 text-base font-semibold flex items-center gap-2">
                      Explore Ideas
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </button>
                </div>

              </div>
              
              {/* Right Side Visual (Decorative Glow) */}
              <div className="hidden md:col-span-4 md:flex justify-center relative">
                <div className={`w-72 h-72 rounded-full filter blur-3xl opacity-20 animate-pulse bg-current ${slide.accentColor}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-cyan-400" : "w-2.5 bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Left/Right Arrow Buttons (Manual Controls) */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-slate-900/50 hover:bg-slate-800 p-2 rounded-full border border-slate-700 backdrop-blur-sm text-gray-400 hover:text-white transition-colors hidden md:block"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-slate-900/50 hover:bg-slate-800 p-2 rounded-full border border-slate-700 backdrop-blur-sm text-gray-400 hover:text-white transition-colors hidden md:block"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>

    </div>
  );
};

export default Hero;