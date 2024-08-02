import React from 'react';
import { Facebook, HomeLogo, Instagram, Linkedin, Mail, Phone, Tiktok, YouTube } from '../common/commonImport';

const Footer = () => {
  return (
    <div className='flex w-full align-middle flex-col items-center justify-center mt-24 pb-10 h-full bg-gray-100'>
      <div className='w-[80%] my-16 flex align-middle flex-col items-center justify-center md:flex-row md:items-start'>
        <div className='w-[40%] flex flex-col items-center md:items-start'>
          <img className='w-[50%] mb-12' src={HomeLogo} />
          <div className='w-[60%] justify-between flex flex-col'>
            <div className='flex justify-start w-fit mb-2'>
              <img className='w-5 mr-2' src={Mail} />
              <div className='text-xs'>support@wedding.io</div>
            </div>
            <div className='flex justify-end w-fit'>
              <img className='w-4 h-4 mr-2' src={Phone} />
              <div className='text-xs'>+1 (800) 123-4567</div>
            </div>
          </div>
          <div className='w-[60%] items-center my-10 flex flex-row '>
            <img className='w-5 mx-1' src={Instagram} />
            <img className='w-5 mx-1' src={Facebook} />
            <img className='w-5 mx-1' src={Tiktok} />
            <img className='w-5 mx-1' src={Linkedin} />
            <img className='w-5 mx-1' src={YouTube} />
          </div>
        </div>
        <div className='w-[30%] mb-3 md:mb-0'>
          <div className='flex flex-col items-center md:items-start'>
            <div className='mb-3 text-sm'>Navigation</div>
            <a href='#' className='text-xs mb-2 text-gray-400'>Home</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Features</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Product</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Resources</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Pricing</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Terms of Service</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Privacy & Policy</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Contact</a>
          </div>
        </div>
        <div className='w-[30%] mb-3 md:mb-0'>
          <div className='flex flex-col items-center md:items-start'>
            <div className='mb-3 text-sm'>Wedding Venues</div>
            <a href='#' className='text-xs mb-2 text-gray-400'>Loft Weddings</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Concert Values</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Other Venues</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>HHotel Weddingsome</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Restaurants Weddings</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Winery Weddings</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Farm Weddings</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Mansion Weddings</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Wedding Banquet Halls</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Banquet Halls</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Micro Weddings</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Destination Weddings</a>
          </div>
        </div>
        <div className='w-[30%] mb-3 md:mb-0'>
          <div className='flex flex-col items-center md:items-start'>
            <div className='mb-3 text-sm'>Wedding Vendors</div>
            <a href='#' className='text-xs mb-2 text-gray-400'>Catering</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Photography</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Videography</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Planning and Coordination</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>DJ and Music</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Cakes and Baking</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Florals and Decor</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Rentals</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Officiants</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Entertainment</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Photo Booths</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Transportation</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Invitations</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Stationary</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Accommodations</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Travel and Honeymoon</a>
          </div>
        </div>
        <div className='w-[30%] mb-3 md:mb-0'>
          <div className='flex flex-col items-center md:items-start'>
            <div className='mb-3 text-sm'>Wedding Attire & Accessories</div>
            <a href='#' className='text-xs mb-2 text-gray-400'>Dresses</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Suiting</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Jewelry</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Hair and Makeup</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Fitness</a>
            <a href='#' className='text-xs mb-2 text-gray-400'>Accessories</a>
          </div>
        </div>
      </div>
      <div className='font-semibold text-sm'>© 2024 Wedding.io. All Rights Reserved.</div>
    </div>
  )
}
export default Footer;
