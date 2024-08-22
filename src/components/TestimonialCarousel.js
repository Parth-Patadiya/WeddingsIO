import React, { useEffect, useRef, useState } from 'react';
import { Design, MakingW4 } from '../common/commonImport';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';


const TestimonialCarousel = () => {
  const items = [
    { id: 1, content: "This is an amazing service!", rating: 5 },
    { id: 2, content: "I had a great experience.", rating: 4 },
    { id: 3, content: "Highly recommended!", rating: 5 },
    { id: 4, content: "Very satisfied with the product.", rating: 4 },
    { id: 5, content: "An excellent choice for anyone.", rating: 5 },
    { id: 6, content: "Great quality and support.", rating: 5 },
    { id: 7, content: "Would use it again.", rating: 4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsRef = useRef(null);

  const totalItems = items.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalItems * 2));
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [totalItems]);

  useEffect(() => {
    if (itemsRef.current) {
      const transitionDuration = currentIndex === 0 ? '0s' : '0.7s';
      itemsRef.current.style.transition = `transform ${transitionDuration} ease-in-out`;
      itemsRef.current.style.transform = `translateX(-${(currentIndex % totalItems) * (100 / totalItems)}%)`;
    }

    if (currentIndex === totalItems) {
      setTimeout(() => {
        itemsRef.current.style.transition = 'none';
        itemsRef.current.style.transform = 'translateX(0)';
        setCurrentIndex(0);
      }, 700);
    }
  }, [currentIndex, totalItems]);

  return (
    <div className='flex align-middle flex-col items-center justify-center mt-10 h-full'>
      <div className='w-[80%] flex align-middle flex-col items-center justify-center'>
        <Icon className='w-24 h-7 mb-2.5 mt-12' />
        <h1 className="text-2xl md:text-4xl lg:text-2xl xl:text-6xl font-semibold my-4">
          What Our Couples Are Saying
        </h1>
        <div className="text-sm text-gray-500 xl:text-xl mb-5">
          Here is how wedding.io has helped create real weddings
        </div>
      </div>

      <div className="relative mt-10 mb-4 w-full overflow-hidden">
        <div className="hidden sm:block absolute z-10 inset-y-0 left-0 w-[500px] bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="hidden sm:block absolute z-10 inset-y-0 right-0 w-[500px] bg-gradient-to-l from-white via-transparent to-transparent pointer-events-none"></div>
        <div ref={itemsRef} className="flex w-fit">
          {items.map((item) => (
            <div key={item.id} className="w-[350px] m-4">
              <div className='w-full p-8 border border-gray-200 rounded-2xl flex flex-col items-center'>
                <img className='w-[20%] ' src={MakingW4} alt='' />
                <div className="font-bold text-md rounded-lg justify-center mb-1 mt-2">
                  Steven & Marry
                </div>
                <div className='text-gray-400 text-xs flex justify-center'>
                  Happily Married in London
                </div>
                <div className='text-gray-500 text-xs flex mt-3 justify-center'>
                  "Wedding.io made planning my wedding so much easier! The Al was like having a personal assistant whe knew exactly what I wanted. I couldn't have done it without them."
                </div>
              </div>
            </div>
          ))}
          {items.map((item) => (
            <div key={item.id} className="w-[350px] m-4">
              <div className='w-full p-8 border border-gray-200 rounded-2xl flex flex-col items-center'>
                <img className='w-[20%] ' src={MakingW4} alt='' />
                <div className="font-bold text-md rounded-lg justify-center mb-1 mt-2">
                  Steven & Marry
                </div>
                <div className='text-gray-400 text-xs flex justify-center'>
                  Happily Married in London
                </div>
                <div className='text-gray-500 text-xs flex mt-3 justify-center'>
                  "Wedding.io made planning my wedding so much easier! The Al was like having a personal assistant whe knew exactly what I wanted. I couldn't have done it without them."
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className='flex-col items-center justify-center w-[70%] sm:w-[50%] my-10' src={Design} alt='' />
    </div>
  );
};

export default TestimonialCarousel;
