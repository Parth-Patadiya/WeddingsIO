import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import { Design, NextButton, video1, video2, video3, video4 } from '../common/commonImport';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slides = [video1, video2, video3, video4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '10%',
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: null,
    prevArrow: null,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <div className='w-full flex flex-col align-middle justify-center items-center' id="AboutUs">
      <Icon className='w-24 h-7 mb-2.5' />
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold mt-3">
        What is weddings.io?
      </h1>
      <div className="text-sm text-gray-500 xl:text-xl mt-5">
        We are a one-stop-shop for couples and wedding vendors to plan, manage
      </div>
      <div className="text-sm xl:text-xl text-gray-500">
        and organize for the big wedding day
      </div>
      <div className="relative w-full h-[200px] sm:h-full overflow-hidden mt-11">
      <div className="hidden sm:block absolute z-10 inset-y-0 left-0 w-[400px] bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute hidden sm:block z-10 inset-y-0 right-0 w-[400px] bg-gradient-to-l from-white via-transparent to-transparent pointer-events-none"></div>
        <Slider {...settings} className="flex justify-center items-center h-full" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div key={index} className="px-2 flex items-center justify-center relative">
              <div
                className={`w-full sm:h-full h-[95%] flex items-center justify-center rounded-other sm:rounded-custom sm:p-4 p-2 transition-transform duration-500 ease-in-out`}
              >
                <img
                  className="w-full h-full bg-black flex items-center justify-center rounded-other sm:rounded-custom"
                  src={slide}
                  alt=''
                />
              </div>
              {currentSlide === index && (
                <>
                  <button
                    className="absolute left-0 md:top-[52%] top-[54%]  transform -translate-y-1/2 z-10 cursor-pointer"
                    onClick={() => sliderRef.current.slickPrev()}
                  >
                    <img src={NextButton} className='md:w-full w-[50%]'  alt="Previous" />
                  </button>
                  <button
                    className="absolute md:right-0 -right-[48px] top-[49%]  transform -translate-y-1/2 z-10 cursor-pointer"
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <img src={NextButton} className="rotate-180 md:w-full w-[50%]" alt="Next" />
                  </button>
                </>
              )}
            </div>
          ))}
        </Slider>
      </div>
      <img className='flex-col items-center justify-center w-[70%] sm:w-[50%] my-10' src={Design} alt='' />
    </div>
  );
};

export default VideoCarousel;
