import React from 'react'
import CarouselMain from '../components/CarouselMain';
import VideoCarousel from '../components/VideoCarousel';
import LogoCarousel from '../components/LogoCarousel';
import FeedBackCarousel from '../components/FeedBackCarousel';
import WhyWeddingsIo from '../components/WhyWeddingsIo';
import PlanWithEase from '../components/PlanWithEase';
import MakingWedding from '../components/MakingWedding';
import TestimonialCarousel from '../components/TestimonialCarousel';
import HaveAQuestion from '../components/HaveAQuestion';
import FollowUs from '../components/FollowUs';

const HomeScreen = () => {
  return (
    <div>
      <CarouselMain />
      <LogoCarousel />
      <VideoCarousel />
      <FeedBackCarousel />
      <WhyWeddingsIo />
      <PlanWithEase />
      <MakingWedding />
      <TestimonialCarousel />
      <HaveAQuestion />
      <FollowUs />
    </div>
  )
}
export default HomeScreen;