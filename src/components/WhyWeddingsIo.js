import React from 'react';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';
import { Ww1, Ww2, Ww3, Ww4 } from '../common/commonImport';

const WhyWeddingsIo = () => {
  return (
    <div className='flex align-middle flex-col items-center justify-center mt-4 h-full'>
      <div className='w-[80%] flex align-middle flex-col items-center justify-center'>
        <Icon className='w-24 h-7 mb-2.5 mt-10' />
        <h1 className="text-2xl md:text-4xl font-semibold my-4">
          Why Weddings.IO?
        </h1>
        <div className="text-sm text-gray-500 mb-10">
          Explore real weddings, real couples and see what our our customized tools can do for you.
        </div>
        <div className='flex w-full justify-between'>
          <div className='w-[32.5%] p-3 border border-1 border-gray-200 rounded-lg'>
            <img src={Ww1} className='w-full' />
            <div className='flex justify-between'>
              <div className='w-[30%] pt-3  rounded-lg'>
                <img src={Ww2} className='w-full' />
              </div>
              <div className='w-[30%] pt-3  rounded-lg'>
                <img src={Ww2} className='w-full' />
              </div>
              <div className='w-[30%] pt-3  rounded-lg'>
                <img src={Ww2} className='w-full' />
              </div>
            </div>
            <div className='flex w-full mt-4'>
              <div className='w-[70%]'>
                <div className='flex justify-start'>
                  Angelina & James
                </div>
                <div className='flex justify-start text-xs text-gray-400'>
                  Toronto, Ontario
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-start text-xs mt-2 text-gray-400'>
                  45 Photos
                </div>
              </div>
            </div>
          </div>
          <div className='w-[32.5%] p-3 border border-1 border-gray-200 rounded-lg'>
            <img src={Ww1} className='w-full' />
            <div className='flex justify-between'>
              <div className='w-[30%] pt-3  rounded-lg'>
                <img src={Ww2} className='w-full' />
              </div>
              <div className='w-[30%] pt-3  rounded-lg'>
                <img src={Ww3} className='w-full' />
              </div>
              <div className='w-[30%] pt-3  rounded-lg'>
                <img src={Ww4} className='w-full' />
              </div>
            </div>
            <div className='flex w-full mt-4'>
              <div className='w-[70%]'>
                <div className='flex justify-start'>
                  Angelina & James
                </div>
                <div className='flex justify-start text-xs text-gray-400'>
                  Toronto, Ontario
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-start text-xs mt-2 text-gray-400'>
                  45 Photos
                </div>
              </div>
            </div>
          </div>
          <div className='w-[32.5%] p-3 border border-1 border-gray-200 rounded-lg'>
            <img src={Ww1} className='w-full' />
            <div className='flex justify-between'>
              <div className='w-[30%] pt-3  rounded-lg'>
                <img src={Ww2} className='w-full' />
              </div>
              <div className='w-[30%] pt-3  rounded-lg'>
                <img src={Ww3} className='w-full' />
              </div>
              <div className='w-[30%] pt-3  rounded-lg'>
                <img src={Ww4} className='w-full' />
              </div>
            </div>
            <div className='flex w-full mt-4'>
              <div className='w-[70%]'>
                <div className='flex justify-start'>
                  Angelina & James
                </div>
                <div className='flex justify-start text-xs text-gray-400'>
                  Toronto, Ontario
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-start text-xs mt-2 text-gray-400'>
                  45 Photos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WhyWeddingsIo;