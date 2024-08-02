import React from 'react';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';
import { Bottom1, Bottom2, FirstBack, SecondFront } from '../common/commonImport';

const PlanWithEase = () => {
  return (
    <div className='flex align-middle flex-col items-center justify-center mt-4'>
      <div className='w-[80%] flex align-middle flex-col items-center justify-center mb-50'>
        <Icon className='w-24 h-7 mb-2.5 mt-10' />
        <div className="text-2xl md:text-4xl font-semibold my-4">
          Plan with Ease
        </div>
        <div className="text-sm text-gray-500">
          Unlock the full potential of your wedding planning with our AI-driven
        </div>
        <div className="text-sm text-gray-500 mb-10">
          platform. Enjoy a stress-free and delightful planning journey!
        </div>
        <div className='flex w-full bg-gray-100 rounded-xl'>
          <div className='flex flex-col w-full md:w-[40%] justify-center text-start m-10'>
            <div className='font-bold text-xl w-full mb-4'>
              AI Wedding Planner
            </div>
            <div className='text-gray-400'>
              Develop your wedding vision in realtime with our AI wedding planner. Get custom vendor suggestions, scheduling, task management and details specific to your wedding vision.
            </div>
            <div className='flex h-15 w-full pt-10 justify-start align-middle'>
              <button className="flex right-0 p-3 px-10 rounded-full bg-light text-light-500 border hover:bg-yellow-500 text-white font-semibold focus:outline-none border-light text-sm">
                Schedule a Demo
              </button>
            </div>
          </div>
          <div className=' w-[60%] relative overflow-hidden hidden lg:block'>
            <img src={FirstBack} className='absolute bottom-0 left-0 w-full h-[90%] transform' />
            <img src={SecondFront} className='relative w-full h-[90%] mt-[20%]' />
          </div>
        </div>
      </div>
      <div className='w-[80%] h-[80%] flex justify-between'>
        <div className='w-[49.5%] mt-2 bg-gray-100 rounded-xl flex flex-col justify-start pt-5 px-10'>
          <div className="font-bold text-xl text-start mb-4">
            AI Vendor Matchmaking
          </div>
          <div className='text-gray-500 text-sm flex text-start mb-4'>
          Use prompts to filter for only the most relevant wedding services based on your budget, location and unique wedding preferences. Let our AI find all the vendors for you while ensuring they meet your specific wedding criteria.
          </div>
          <div className='w-full flex mt-3 justify-between'>
            <div className='w-[49%]  bg-white p-4 rounded-lg'>
              <div className='text-xs text-gray-500 text-start leading-normal' >Wedding Day Schedule</div>
              <div className='text-sm text-start leading-normal' >Wedding Party</div>
            </div>
            <div className='w-[49%] bg-white p-4 rounded-lg'>
              <div className='text-xs text-gray-500 text-start leading-normal' >Start Time</div>
              <div className='text-sm text-start leading-normal' >10:00 AM - 13:00 AM</div>
            </div>
          </div>
          <img className='mt-3 h-full' src={Bottom1} />
        </div>
        <div className='w-[49.5%] mt-2 bg-gray-100 rounded-xl flex flex-col justify-start pt-5 px-10'>
          <div className="font-bold text-xl text-start mb-4">
            Plan with Ease
          </div>
          <div className='text-gray-500 text-sm flex text-start mb-4'>
            Create your wedding day schedule in minutes! Get the guidance from our database of wedding planners to perfectly create a wedding day intinerary, tailored perfectly to your prompts and requirements.
          </div>
          <div className='w-full flex mt-3 justify-between'>
            <div className='w-[49%]  bg-white p-4 rounded-lg'>
              <div className='text-xs text-gray-500 text-start leading-normal' >Wedding Day Schedule</div>
              <div className='text-sm text-start leading-normal' >Wedding Party</div>
            </div>
            <div className='w-[49%] bg-white p-4 rounded-lg'>
              <div className='text-xs text-gray-500 text-start leading-normal' >Start Time</div>
              <div className='text-sm text-start leading-normal' >10:00 AM - 13:00 AM</div>
            </div>
          </div>
          <img className='mt-3 h-full' src={Bottom2} />
        </div>
      </div>
    </div>
  )
}
export default PlanWithEase;
