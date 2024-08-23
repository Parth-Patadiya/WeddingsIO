import React, { useState } from 'react';
import { Design, NextButton, video1, video2, video3, video4 } from '../common/commonImport';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, content: video1 },
    { id: 2, content: video2 },
    { id: 3, content: video3 },
    { id: 4, content: video4 },
    // { id: 5, content: 'https://www.w3schools.com/html/mov_bbb.mp4' }
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
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold mt-3">
        What is weddings.io?
      </h1>
      <div className="text-sm text-gray-500 xl:text-xl mt-5">
        We are a one-stop-shop for couples and wedding vendors to plan, manage
      </div>
      <div className="text-sm xl:text-xl text-gray-500">
        and and organize for the big wedding day
      </div>
      <div className="relative w-full h-[200px] sm:h-full overflow-hidden mt-11 ">
        <div className="hidden sm:block absolute z-10 inset-y-0 left-0 w-[400px] bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute hidden sm:block  z-10 inset-y-0 right-0 w-[400px] bg-gradient-to-l from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="flex justify-center items-center h-full">
          <div className="flex w-[80%] sm:w-2/3 transition-transform duration-500 h-full ease-in-out" style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}>
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

                    <img className="absolute left-[-25px] transform -translate-y-1/2 w-10 sm:w-20 z-10 cursor-pointer" style={{ top: '54%' }} src={NextButton} onClick={handlePrev} alt='' />
                    <img className="absolute right-[-25px] transform -translate-y-1/2 w-10 sm:w-20 z-10 rotate-180 cursor-pointer" style={{ top: '50%' }} src={NextButton} onClick={handleNext} alt='' />                </>
                  }
                  <div className="w-full sm:h-full h-[95%] bg-gray-200 flex items-center justify-center rounded-other sm:rounded-custom sm:p-4  p-2">
                    <img className="w-full h-full bg-black flex items-center justify-center rounded-other sm:rounded-custom " src={slide.content} alt='' />
                      {/* <source className='w-full h-full' src={slide.content} /> */}
                    {/* </video> */}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <img className='flex-col items-center justify-center w-[70%] sm:w-[50%] my-10' src={Design} alt='' />
    </div>
  );
};


export default VideoCarousel;
