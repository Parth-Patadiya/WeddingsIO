import React, { useState, useEffect } from 'react';
import { HeroButtonImg, HeroSlider1, HeroSlider2, HeroSlider3, HeroSlider4 } from '../common/commonImport';
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CarouselMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const GenerateModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white rounded-lg py-10 flex flex-col items-center px-6 w-full max-w-lg mx-auto">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
          </button>
          <h2 className="text-2xl font-bold mb-4 flex justify-center">Stay in Touch</h2>
          {/* <div className='w-full flex justify-center'> */}
            <h2 className="text-sm mb-10 w-[70%] text-gray-500 flex text-center justify-center">Subscribe to our newsletter so we can keep you updated with our AI early access</h2>
            {/* </div> */}
          <form className='w-[70%]'>
            <div className="mb-10 flex justify-center">
              <input
                className="w-full px-3 py-2 border border-gray-200 rounded-md"
                placeholder="Enter Your Email Here"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="w-full flex justify-center">
              <button className="flex px-10 py-2 rounded-full bg-yellow-500 text-light-500 border hover:bg-yellow-500 text-white focus:outline-none border-light text-sm">
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const images = [
    HeroSlider1,
    HeroSlider2,
    HeroSlider3,
    HeroSlider4
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
          <button className="block flex sm:hidden pl-2 mt-4 pr-5 py-2 right-0 rounded-full bg-yellow-500 text-light-500 border hover:bg-yellow-500 hover:text-white focus:outline-none border-light text-sm" onClick={openModal}>
              <img className='w-4 mr-2 mt-0.5 ml-2 bg-transparent' src={HeroButtonImg} />
              Generate
            </button>
          <div className="relative w-[60%] mt-7 hidden sm:block">
            <input type="text" className="pl-5 w-full pr-20 py-4 border placeholder-white text-white rounded-full bg-black bg-opacity-30 focus:outline-none sm:pr-28 md:pr-32 lg:pr-40 border-gray-400" placeholder="Generate Your Wedding Plan" />
            <button className="flex h-8 absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 pr-7 pl-4 pb-8 pt-2 rounded-full bg-yellow-500 text-light-500 border hover:bg-yellow-500 hover:text-white focus:outline-none border-light text-sm" onClick={openModal}>
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
      <GenerateModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CarouselMain;
