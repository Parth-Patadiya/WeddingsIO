import React from 'react';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';
import { Facebook, Instagram, Linkedin, Tiktok, YouTube } from '../common/commonImport';

const FollowUs = () => {
  return (
    <div className='flex align-middle flex-col items-center justify-center mt-4 h-full'>
      <div className='lg:w-[40%] w-[75%] flex align-middle flex-col items-center justify-center'>
        <Icon className='w-24 h-7 mb-2.5 mt-10' />
        <h1 className="text-2xl md:text-4xl font-semibold my-4">
          Follow Us on Social Media
        </h1>
        <div className="text-sm text-gray-500">
          Stay connected with us for the latest wedding trends, inspiration, and tips! Follow Wedding.io on Facebook, Instagram, and Twitter to join our community of happy couples and industry experts.
        </div>

        <div className='w-[87%] sm:w-full items-center justify-between my-10 flex  sm:justify-between md:flex-row lg:flex-row'>
         <img className='sm:w-16 w-10' src={Instagram} alt='' />
         <img className='sm:w-16 w-10' src={Facebook} alt='' />
         <img className='sm:w-16 w-10' src={Tiktok} alt='' />
         <img className='sm:w-16 w-10' src={Linkedin} alt='' />
         <img className='sm:w-16 w-10' src={YouTube} alt='' />
        </div>
      </div>
    </div>
  )
}
export default FollowUs;
