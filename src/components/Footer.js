import React from 'react';
import { Facebook, HomeLogo, Instagram, Linkedin, Mail, Phone, Tiktok, YouTube } from '../common/commonImport';

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full sm:mt-24 mt-14 pb-10 bg-gray-100'>
      <div className='w-11/12 lg:w-[80%] my-16 flex flex-col items-center justify-center md:flex-row md:items-start'>
        <div className='w-full md:w-[40%] flex flex-col items-start mb-8 md:mb-0'>
          <img className='w-[70%] mb-10 sm:mb-12' src={HomeLogo} alt="Home Logo" />
          <div className='w-[60%] flex flex-col space-y-2 items-start'>
            <div className='flex items-center'>
              <img className='sm:w-5 w-7 mr-2' src={Mail} alt="Mail" />
              <div className='sm:text-xs text-lg'>support@wedding.io</div>
            </div>
            <div className='flex items-center'>
              <img className='sm:w-4 w-5 h-4 mr-2' src={Phone} alt="Phone" />
              <div className='sm:text-xs text-lg'>+1 (800) 123-4567</div>
            </div>
          </div>
          <div className='w-full sm:w-[60%] flex sm:justify-start justify-center my-10 space-x-2'>
            <img className='sm:w-8 w-11 ' src={Instagram} alt="Instagram" />
            <img className='sm:w-8 w-11 ' src={Facebook} alt="Facebook" />
            <img className='sm:w-8 w-11 ' src={Tiktok} alt="Tiktok" />
            <img className='sm:w-8 w-11 ' src={Linkedin} alt="Linkedin" />
            <img className='sm:w-8 w-11 ' src={YouTube} alt="YouTube" />
          </div>
        </div>
        <div className='w-full flex flex-col sm:flex-row'>
          <div className='w-full md:w-[30%] mb-8 md:mb-0'>
            <div className='flex flex-col items-start mr-3'>
              <div className='mb-3 text-sm'>Navigation</div>
              {['Home', 'Features', 'Product', 'Resources', 'Pricing', 'Terms of Service', 'Privacy & Policy', 'Contact'].map((item, index) => (
                <a key={index} href='#' className='text-xs mb-2 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='w-full md:w-[30%] mb-8 md:mb-0'>
            <div className='flex flex-col items-start mr-3'>
              <div className='mb-3 text-sm '>Wedding Venues</div>
              {['Loft Weddings', 'Concert Venues', 'Other Venues', 'Hotel Weddings', 'Restaurants Weddings', 'Winery Weddings', 'Farm Weddings', 'Mansion Weddings', 'Wedding Banquet Halls', 'Banquet Halls', 'Micro Weddings', 'Destination Weddings'].map((item, index) => (
                <a key={index} href='#' className='text-xs mb-2 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='w-full md:w-[30%] mb-8 md:mb-0'>
            <div className='flex flex-col items-start mr-3'>
              <div className='mb-3 text-sm '>Wedding Vendors</div>
              {['Catering', 'Photography', 'Videography', 'Planning and Coordination', 'DJ and Music', 'Cakes and Baking', 'Florals and Decor', 'Rentals', 'Officiants', 'Entertainment', 'Photo Booths', 'Transportation', 'Invitations', 'Stationery', 'Accommodations', 'Travel and Honeymoon'].map((item, index) => (
                <a key={index} href='#' className='text-xs mb-2 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='w-full md:w-[30%]'>
            <div className='flex flex-col items-start mr-3'>
              <div className='mb-3 text-sm text-start'>Wedding Attire & Accessories</div>
              {['Dresses', 'Suiting', 'Jewelry', 'Hair and Makeup', 'Fitness', 'Accessories'].map((item, index) => (
                <a key={index} href='#' className='text-xs mb-2 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className='font-semibold text-sm'>© 2024 Wedding.io. All Rights Reserved.</div>
    </div>
  )
}
export default Footer;
