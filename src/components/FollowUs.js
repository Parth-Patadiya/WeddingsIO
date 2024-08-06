import React from 'react';
import { ReactComponent as Icon } from '../assets/Images/Stars.svg';
import { Facebook, Instagram, Linkedin, Mail, Phone, Tiktok, Ww1, Ww2, Ww3, Ww4, YouTube } from '../common/commonImport';

const FollowUs = () => {
  return (
    <div className='flex align-middle flex-col items-center justify-center mt-4 h-full'>
      <div className='sm:w-[40%] w-[75%] flex align-middle flex-col items-center justify-center'>
        <Icon className='w-24 h-7 mb-2.5 mt-10' />
        <h1 className="text-2xl md:text-4xl font-semibold my-4">
          Follow Us on Social Media
        </h1>
        <div className="text-sm text-gray-500">
          Stay connected with us for the latest wedding trends, inspiration, and tips! Follow Wedding.io on Facebook, Instagram, and Twitter to join our community of happy couples and industry experts.
        </div>

        <div className='w-[70%] items-center justify-center my-10 flex  sm:justify-between md:flex-row lg:flex-row'>
         <img className='w-12' src={Instagram} />
         <img className='w-12' src={Facebook} />
         <img className='w-12' src={Tiktok} />
         <img className='w-12' src={Linkedin} />
         <img className='w-12' src={YouTube} />
        </div>
      </div>
    </div>
  )
}
export default FollowUs;
