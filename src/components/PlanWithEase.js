import React from 'react';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';
import { Bottom1, Bottom2, FirstBack, SecondFront } from '../common/commonImport';

const PlanWithEase = () => {
  return (
    <div className='flex align-middle flex-col items-center justify-center mt-4' id="Features">
      <div className='lg:w-[80%] w-[90%] flex align-middle flex-col items-center justify-center mb-50'>
        <Icon className='w-24 h-7 mb-2.5 mt-10' />
        <div className="text-2xl md:text-4xl xl:text-6xl font-semibold my-4">
          Features
        </div>
        <div className="text-sm text-gray-500 xl:text-xl mt-5">
          Let us automate those annoying tedious tasks so you can focus on what matters most.
        </div>
        <div className="text-sm xl:text-xl text-gray-500 mb-10">
          Experience curated realtime results that give you a transparent and accurate expectation of your wedding day.
        </div>
        <div className='flex lg:items-start items-end w-full bg-gray-100 lg:flex-row flex-col rounded-xl'>
          <div className='flex flex-col w-[75%] md:w-[87%] lg:w-[40%] justify-center text-start lg:m-10 m-10 mb-5'>
            <div className='font-bold text-xl w-full mb-4'>
              AI Wedding Planner
            </div>
            <div>
              Train your personal AI wedding planner with your wedding vision and get tailored suggestions to save time and money. Get custom vendor suggestions based on your location and budget. Generate tasks to track your wedding progress. Automate your RSVPs and so much more.
            </div>
            <div className='flex h-15 w-full pt-10 justify-center sm:justify-start align-middle'>
              <button className="button-gradient flex right-0 p-3 px-10 rounded-full text-light-500 text-white font-semibold text-sm">
                Schedule a Demo
              </button>
            </div>
          </div>
          <div className='lg:w-[60%] w-[90%] relative overflow-hidden'>
            <img src={FirstBack} className='absolute bottom-0 left-0 w-full h-[90%] transform' alt=''/>
            <img src={SecondFront} className='relative w-full h-[90%] mt-[20%]' alt=''/>
          </div>
        </div>
      </div>
      <div className='lg:w-[80%] w-[90%] h-[80%] flex flex-col sm:flex-row justify-between'>
        <div className='w-full sm:w-[49.5%] mt-2 bg-gray-100 rounded-xl flex flex-col justify-start pt-10 px-10'>
          <div className="font-bold text-xl text-start mb-4">
            Predictive Scheduler
          </div>
          <div className='text-sm flex text-start mb-4'>
            Give us your ideal times for the most important parts of your wedding and generate a suggested schedule tailored to your needs! Test dozens of different ideas in realtime to create the perfect itinerary for your wedding day.
          </div>
          <div className='w-full flex mt-3 justify-between'>
            <div className='w-[49%]  bg-white p-4 rounded-lg'>
              <div className='text-xs text-start leading-normal' >Wedding Day Schedule</div>
              <div className='text-sm text-start leading-normal' >Wedding Party</div>
            </div>
            <div className='w-[49%] bg-white p-4 rounded-lg'>
              <div className='text-xs text-start leading-normal' >Start Time</div>
              <div className='text-sm text-start leading-normal' >10:00 AM - 13:00 AM</div>
            </div>
          </div>
          <img className='mt-3 h-full' src={Bottom1} alt=''/>
        </div>
        <div className='w-full sm:w-[49.5%] mt-2 bg-gray-100 rounded-xl flex flex-col justify-start pt-10 px-10'>
          <div className="font-bold text-xl text-start mb-4">
            AI Budget Tracker
          </div>
          <div className='text-sm flex text-start mb-4'>
            Upload contracts, invoices and receipts and have them all tracked on one platform. Get suggestions on how to best manage your remaining budget and share reports easily with your partner or planner.
          </div>
          <img className='mt-3 h-full' src={Bottom2} alt=''/>
        </div>
      </div>
    </div>
  )
}
export default PlanWithEase;
