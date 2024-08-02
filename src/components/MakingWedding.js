import React from 'react'
import { BottomFrame, Design, MakingW1, MakingW2, MakingW3, MakingW4 } from '../common/commonImport';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';

const MakingWedding = () => {
  return (
    <div className='flex align-middle flex-col items-center justify-center mt-4'>
      <img className='flex-col items-center justify-center w-[40%] my-10' src={Design} />
      <div className='w-[60%] flex align-middle flex-col items-center justify-center mb-50'>
        <Icon className='w-24 h-7 mb-2.5 mt-8' />
        <div className="text-2xl md:text-4xl font-semibold mt-4">
          Making Wedding
        </div>
        <div className="text-2xl md:text-4xl font-semibold mt-3 mb-5">
          Planning FUN!
        </div>
        <div className="text-sm text-gray-500">
          Our AI-powered platform streamlines planning, ensuring a
        </div>
        <div className="text-sm text-gray-500 mb-10">
          memorable wedding celebration.
        </div>
      </div>
      <div className='w-full md:w-[60%] flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between'>
        <div className='w-full md:w-[48.5%] p-8 border border-gray-200 rounded-2xl flex flex-col justify-start'>
          <img className='w-[20%]' src={MakingW1} />
          <div className="font-bold text-xl rounded-lg text-start mb-4 mt-8">
            Enhanced Experience
          </div>
          <div className='text-gray-500 text-sm flex text-start'>
            Let our AI do the heavy lifting so you can
          </div>
          <div className='text-gray-500 text-sm flex text-start mb-4'>
            stay creative, fun and focus on your vision.
          </div>
        </div>
        <div className='w-full md:w-[48.5%] p-8 border border-gray-200 rounded-2xl flex flex-col justify-start'>
          <img className='w-[20%]' src={MakingW2} />
          <div className="font-bold text-xl rounded-lg text-start mb-4 mt-8">
            Stress-Free Planning
          </div>
          <div className='text-gray-500 text-sm flex text-start'>
            Utilize a growing and evolving knowledge base from the best wedding planners in the world to get the guidance you need for the perfect wedding day.
          </div>
        </div>
      </div>
      <div className='w-full md:w-[60%] mt-6 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between'>
        <div className='w-full md:w-[48.5%] p-8 border border-gray-200 rounded-2xl flex flex-col justify-start'>
          <img className='w-[20%]' src={MakingW3} />
          <div className="font-bold text-xl rounded-lg text-start mb-4 mt-8">
            Save-time
          </div>
          <div className='text-gray-500 text-sm flex text-start'>
            The average wedding takes 6-12 months to plan, with weddings.io, you can save up to 50% of your time.
          </div>
        </div>
        <div className='w-full md:w-[48.5%] p-8 border border-gray-200 rounded-2xl flex flex-col justify-start'>
          <img className='w-[20%]' src={MakingW4} />
          <div className="font-bold text-xl rounded-lg text-start mb-4 mt-8">
            Collaborative Planning
          </div>
          <div className='text-gray-500 text-sm flex text-start'>
            Invite users and enjoy collaborative planning through all our tools, in an all-in-one platform.
          </div>
        </div>
      </div>
      <div className="relative rounded-2xl mt-12 w-[80%] h-52 bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center" style={{ backgroundImage: `url(${BottomFrame})` }}>
        <div className='text-xs text-white pt-3 font-semibold italic'>Launch July 1,2024</div>
        <div className='text-3xl text-white pt-4 font-semibold'>Sign Up For Early Access</div>
        <div className='flex h-15 w-full pt-8 justify-center align-middle'>
          <button className="flex right-0 p-3 px-10 rounded-full bg-light text-light-500 border hover:bg-yellow-500 text-white font-semibold focus:outline-none border-light text-sm">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>

  )
}
export default MakingWedding;