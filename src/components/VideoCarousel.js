import React, { useState } from 'react';
import { Design, NextButton } from '../common/commonImport';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, content: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 2, content: 'https://www.w3schools.com/html/movie.mp4' },
    { id: 3, content: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 4, content: 'https://www.w3schools.com/html/movie.mp4' },
    { id: 5, content: 'https://www.w3schools.com/html/mov_bbb.mp4' }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className='w-full flex flex-col align-middle justify-center items-center '>
      <Icon className='w-24 h-7 mb-2.5' />
      <h1 className="text-2xl md:text-4xl font-semibold mt-3">
        Wedding Planning AI?
      </h1>
      <div className="text-sm text-gray-500 mt-5">
        Learn about the word's first wedding planning AI
      </div>
      <div className="text-sm text-gray-500">
        and how we are changing the wedding industry.
        </div>
      <div className="relative w-full overflow-hidden mt-11 h-80">
        <div className="absolute z-10 inset-y-0 left-0 w-[400px] bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute z-10 inset-y-0 right-0 w-[400px] bg-gradient-to-l from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="flex justify-center items-center h-full">
          <div className="flex w-2/3 transition-transform duration-500 h-full ease-in-out" style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}>
            {slides.map((slide, index) => (
              <>
                <div
                  key={slide.id}
                  className={`flex-shrink-0 ${index === currentIndex ? 'w-full' : 'w-1/3'} px-2`}
                  style={{
                    opacity: index === currentIndex ? 1 : 0.5,
                    transform: index === currentIndex ? 'scale(1)' : 'scale(0.8)'
                  }}
                >
                  {index === currentIndex && <>

                    <img className="absolute left-0 transform -translate-y-1/2 w-14 z-10" style={{ top: '54%' }} src={NextButton} onClick={handlePrev} />
                    <img className="absolute right-0 transform -translate-y-1/2 w-14 z-10 rotate-180" style={{ top: '50%' }} src={NextButton} onClick={handleNext} />                </>
                  }
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-custom p-2">
                    <video className="w-full h-full bg-black flex items-center justify-center rounded-custom ">
                      <source className='w-full h-full' src={slide.content} />
                    </video>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <img className='flex-col items-center justify-center w-[40%] my-10' src={Design} />
    </div>
  );
};


export default VideoCarousel;