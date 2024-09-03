import React from 'react';
import Slider from 'react-slick';

const FeedBackCarousel = () => {
  const testimonials = [
    { id: 1, name: "Emily", company: "Happily Married", text: "I recently had my wedding in 2023, and I can’t help but think how much time and money I could have saved with Weddings.io. Wedding planning is incredibly time-consuming, and any assistance is immensely appreciated. From selecting the perfect venue to coordinating with multiple vendors, the process can quickly become overwhelming.", rating: 5 },
    { id: 2, name: "Sophia", company: "Happily Married", text: "I’m in the middle of planning my wedding while raising my infant. Having a platform like weddings.io would have saved me so much time especially since time in general is scarce at the moment. Having everything in one platform would absolutely change the game and help keep you organized. I can’t wait to see weddings.io in action and making the wedding planning process less stressful and way more fun!", rating: 4 },
    { id: 3, name: "Ruth", company: "Happily Married", text: "I just had my destination wedding in Mexico and weddings.io would have saved me SO MUCH TIME AND MONEY. Wedding planning was so time consuming and stressful. Weddings.io would have been very helpful to navigate the convoluted process of wedding planning. Especially with how AI is going, we can’t wait to see the benefits of something like this!", rating: 5 },
    { id: 4, name: "Vannly", company: "Happily Married", text: "Paul is obsessed with AI anything. This is very cool. I would have loved a tool that helped with finding vendors. I’ll mention this in the review. Authenticity and reliability are such hard things to find too", rating: 4 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '1px', left: '50%', transform: 'translateX(-50%)' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className='sm:w-full w-[90%] max-w-2xl xl:max-w-6xl xl:mt-4 mx-auto'>
      <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold mt-3 mb-5">
        Read what our couples are saying about weddings.io
      </h1>
      <div className="relative w-full overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg">
              <div className="flex w-full justify-center space-x-1 mb-5">
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
              <p className="sm:text-xl text-md xl:text-3xl text-gray-700 mt-4 italic">"{testimonial.text}"</p>
              <p className="sm:text-lg text-sm text-gray-700 mt-4">{testimonial.name}</p>
              <p className="sm:text-lg text-sm text-gray-400">{testimonial.company}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex h-15 w-full p-8 justify-center align-middle'>
        <button className="button-gradient flex p-3 px-10 rounded-full bg-light text-light-500 text-white font-semibold focus:outline-none text-sm">
          Start Planning Now!
        </button>
      </div>
    </div>
  );
};

export default FeedBackCarousel;
