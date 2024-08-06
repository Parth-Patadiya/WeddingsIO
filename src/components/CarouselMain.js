import React, { useState, useEffect } from 'react';
import { HeroButtonImg, HeroSlider } from '../common/commonImport';

const CarouselMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    HeroSlider,
    HeroSlider,
    HeroSlider,
    HeroSlider,
    HeroSlider
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute flex justify-center w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="relative z-10 w-8/12 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-lg font-light">Your personal AI wedding planner</h2>
          <h1 className="text-5xl md:text-6xl font-bold mt-2">Revolutionize Your Wedding Planning with AI</h1>
          <p className="mt-4 text-xl">
            Introducing weddings.io. The AI-powered wedding planner for a stress-free, organized and unforgettable wedding.
          </p>
          <button className="block flex sm:hidden pl-2 mt-4 pr-5 py-2 right-0 rounded-full bg-yellow-500 text-light-500 border hover:bg-yellow-500 hover:text-white focus:outline-none border-light text-sm">
              <img className='w-4 mr-2 mt-0.5 ml-2 bg-transparent' src={HeroButtonImg} />
              Generate
            </button>
          <div className="relative w-full mt-7 hidden sm:block">
            <input type="text" className="pl-5 w-full pr-20 py-2 border placeholder-white text-white rounded-full bg-black bg-opacity-30 focus:outline-none sm:pr-28 md:pr-32 lg:pr-40 border-gray-400" placeholder="Generate Your Wedding Plan" />
            <button className="flex h-8 absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 pr-4 pl-0.5 pt-1 rounded-full bg-yellow-500 text-light-500 border hover:bg-yellow-500 hover:text-white focus:outline-none border-light text-sm">
              <img className='w-4 mr-2 mt-0.5 ml-2 bg-transparent' src={HeroButtonImg} />
              Generate
            </button>
          </div>
          <p className="mt-4 text-sm">No personal credit checks or founder guarantee.</p>
        </div>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition duration-500 ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselMain;
