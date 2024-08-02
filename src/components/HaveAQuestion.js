import React from 'react';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';
import { Mail, Phone, Ww1, Ww2, Ww3, Ww4 } from '../common/commonImport';

const HaveAQuestion = () => {
  return (
    <div className='flex align-middle flex-col items-center justify-center mt-4 h-full bg-gray-100'>
      <div className='w-[40%] flex align-middle flex-col items-center justify-center'>
        <Icon className='w-24 h-7 mb-2.5 mt-10' />
        <h1 className="text-2xl md:text-4xl font-semibold my-4">
          Have a question?
        </h1>
        <div className="text-sm text-gray-500">
          Whether you have questions about our services, need technical
        </div>
        <div className="text-sm text-gray-500 mb-7">
          support, or just want some advice, we're here for you.
        </div>
        <div className='w-[60%] justify-between flex flex-col sm:flex-col md:flex-col lg:flex-row'>
          <div className='flex justify-start w-fit'>
            <img className='w-5 mr-2' src={Mail} />
            <div className='text-xs'>support@wedding.io</div>
          </div>
          <div className='flex justify-end w-fit'>
            <img className='w-4 h-4 mr-2' src={Phone} />
            <div className='text-xs'>+1 (800) 123-4567</div>
          </div>
        </div>
        <div className='flex flex-col w-full justify-between my-10'>
          <input type='text' className='border mb-3 bottom-1 rounded-lg w-full p-3block p-3  py-1.5 sm:text-sm sm:leading-6' placeholder='Your Name' />
          <input type='text' className='border mb-3 bottom-1 rounded-lg w-full p-3block p-3 py-1.5 sm:text-sm sm:leading-6' placeholder='Your Email' />
          <textarea id="about" name="about" rows="4" placeholder='Your Message' class="block w-full p-3 rounded-lg border py-1.5 sm:text-sm sm:leading-6"></textarea>
        <div className='flex h-15 w-full pt-8 justify-center align-middle'>
          <button className="flex right-0 p-3 px-10 rounded-full bg-light text-light-500 border hover:bg-yellow-500 text-white font-semibold focus:outline-none border-light text-sm">
            Send Message
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}
export default HaveAQuestion;
