import React, { useEffect, useRef, useState } from 'react';

const FeedBackCarousel = () => {
  const testimonials = [
    { id: 1, name: "Emily", company: "Happily Married", text: "I recently had my wedding in 2023, and I can’t help but think how much time and money I could have saved with Weddings.io. Wedding planning is incredibly time-consuming, and any assistance is immensely appreciated. From selecting the perfect venue to coordinating with multiple vendors, the process can quickly become overwhelming.", rating: 5 },
    { id: 2, name: "Sophia", company: "Happily Married", text: "I’m in the middle of planning my wedding while raising my infant. Having a platform like weddings.io would have saved me so much time especially since time in general is scarce at the moment. Having everything in one platform would absolutely change the game and help keep you organized. I can’t wait to see weddings.io in action and making the wedding planning process less stressful and way more fun!", rating: 4 },
    { id: 3, name: "Ruth", company: "Happily Married", text: "I just had my destination wedding in Mexico and weddings.io would have saved me SO MUCH TIME AND MONEY. Wedding planning was so time consuming and stressful. Weddings.io would have been very helpful to navigate the convoluted process of wedding planning. Especially with how AI is going, we can’t wait to see the benefits of something like this!", rating: 5 },
    { id: 4, name: "Vannly", company: "Happily Married", text: "Paul is obsessed with AI anything. This is very cool. I would have loved a tool that helped with finding vendors. I’ll mention this in the review. Authenticity and reliability are such hard things to find too", rating: 4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;
  const slideIntervalRef = useRef(null);

  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [totalSlides]);

  return (
    <div className='sm:w-full w-[90%] max-w-2xl mx-auto'>
      <div className="relative w-full overflow-hidden">
        <div className="relative mb-5 w-full flex items-center">
          <div
            className="flex w-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full px-4 transition-transform duration-500 ease-in-out"
                style={{
                  opacity: index === currentIndex ? 1 : 0.5,
                  transform: index === currentIndex ? 'scale(1.05)' : 'scale(0.95)',
                }}
              >
                <div className="flex w-full flex-col items-center justify-center sm:p-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3 h-3 ${star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="sm:text-xl text-md text-gray-700 mt-4 italic">"{testimonial.text}"</p>
                  <p className="sm:text-lg text-sm text-gray-700 mt-4">{testimonial.name}</p>
                  <p className="sm:text-lg text-sm text-gray-400 ">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
      <div className='flex h-15 w-full p-8 justify-center align-middle'>
        <button className="flex right-0 p-3 px-10 rounded-full bg-light text-light-500 border hover:bg-yellow-500 text-white font-semibold focus:outline-none border-light text-sm">
          Start Planning Now!
        </button>
      </div>
    </div>
  );
};

export default FeedBackCarousel;
