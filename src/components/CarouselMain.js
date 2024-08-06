import React, { useState, useEffect } from 'react';
import { HeroButtonImg, HeroSlider } from '../common/commonImport';

const CarouselMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const SignupModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white rounded-lg p-6 w-full max-w-md mx-auto">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="yellow-500" fill="#fff" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <h2 className="text-sm mb-4 text-gray-300">Sign Up for Subscribe to our Newsletter</h2>
          <form>
            <div className="mb-4">
              <input className="w-[70%] px-3 py-2 border border-gray-200 rounded-md" placeholder='Enter Your Name Here' type="text" id="name" required />
            </div>
            <div className="mb-4">
              <input className="w-[70%] px-3 py-2 border border-gray-200 rounded-md" placeholder='Enter Your Email Here' type="email" id="email" required />
            </div>
            <div className="mb-4">
              <input className="w-[70%] px-3 py-2 border border-gray-200 rounded-md" placeholder='Enter Your Password Here' type="password" id="password" required />
            </div>
            <div className='w-full flex justify-center'>
              <button className="flex px-10 py-2 rounded-full bg-yellow-500 text-light-500 border hover:bg-yellow-500 hover:text-white focus:outline-none border-light text-sm">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );

  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <div className="relative w-full mt-7 hidden sm:block">
            <input type="text" className="pl-5 w-full pr-20 py-2 border placeholder-white text-white rounded-full bg-black bg-opacity-30 focus:outline-none sm:pr-28 md:pr-32 lg:pr-40 border-gray-400" placeholder="Generate Your Wedding Plan" />
            <button className="flex h-8 absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 pr-4 pl-0.5 pt-1 rounded-full bg-yellow-500 text-light-500 border hover:bg-yellow-500 hover:text-white focus:outline-none border-light text-sm" onClick={openModal}>
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
      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CarouselMain;
