import React from 'react'
import CarouselMain from '../components/CarouselMain';
import VideoCarousel from '../components/VideoCarousel';
import LogoCarousel from '../components/LogoCarousel';
import FeedBackCarousel from '../components/FeedBackCarousel';
import WhyWeddingsIo from '../components/WhyWeddingsIo';
import PlanWithEase from '../components/PlanWithEase';

const HomeScreen = () => {
  return (
    <div>
      <CarouselMain />
      <LogoCarousel />
      <VideoCarousel />
      <FeedBackCarousel />
      <WhyWeddingsIo />
      <PlanWithEase />
      <WhyWeddingsIo />

    </div>
  )
}
export default HomeScreen;