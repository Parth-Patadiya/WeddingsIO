import React from 'react';
import { Facebook, HomeLogo, Instagram, Linkedin, Mail, Phone, Tiktok, YouTube } from '../common/commonImport';

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mt-24 pb-10 bg-gray-100'>
      <div className='w-11/12 lg:w-[80%] my-16 flex flex-col items-center justify-center md:flex-row md:items-start'>
        <div className='w-full md:w-[40%] flex flex-col items-center md:items-start mb-8 md:mb-0'>
          <img className='w-[50%] mb-12' src={HomeLogo} alt="Home Logo" />
          <div className='w-[60%] flex flex-col space-y-2 items-center sm:items-start'>
            <div className='flex items-center'>
              <img className='w-5 mr-2' src={Mail} alt="Mail" />
              <div className='text-xs'>support@wedding.io</div>
            </div>
            <div className='flex items-center'>
              <img className='w-4 h-4 mr-2' src={Phone} alt="Phone" />
              <div className='text-xs'>+1 (800) 123-4567</div>
            </div>
          </div>
          <div className='w-[60%] flex justify-center md:justify-start my-10 space-x-2'>
            <img className='w-5' src={Instagram} alt="Instagram" />
            <img className='w-5' src={Facebook} alt="Facebook" />
            <img className='w-5' src={Tiktok} alt="Tiktok" />
            <img className='w-5' src={Linkedin} alt="Linkedin" />
            <img className='w-5' src={YouTube} alt="YouTube" />
          </div>
        </div>
        <div className='w-full flex'>
          <div className='w-full md:w-[30%] mb-8 md:mb-0'>
            <div className='flex flex-col items-start md:items-center mr-3'>
              <div className='mb-3 text-sm'>Navigation</div>
              {['Home', 'Features', 'Product', 'Resources', 'Pricing', 'Terms of Service', 'Privacy & Policy', 'Contact'].map((item, index) => (
                <a key={index} href='#' className='text-xs mb-2 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='w-full md:w-[30%] mb-8 md:mb-0'>
            <div className='flex flex-col items-start md:items-center mr-3'>
              <div className='mb-3 text-sm  text-justify'>Wedding Venues</div>
              {['Loft Weddings', 'Concert Venues', 'Other Venues', 'Hotel Weddings', 'Restaurants Weddings', 'Winery Weddings', 'Farm Weddings', 'Mansion Weddings', 'Wedding Banquet Halls', 'Banquet Halls', 'Micro Weddings', 'Destination Weddings'].map((item, index) => (
                <a key={index} href='#' className='text-xs mb-2 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='w-full md:w-[30%] mb-8 md:mb-0'>
            <div className='flex flex-col items-start md:items-center mr-3'>
              <div className='mb-3 text-sm  text-justify'>Wedding Vendors</div>
              {['Catering', 'Photography', 'Videography', 'Planning and Coordination', 'DJ and Music', 'Cakes and Baking', 'Florals and Decor', 'Rentals', 'Officiants', 'Entertainment', 'Photo Booths', 'Transportation', 'Invitations', 'Stationery', 'Accommodations', 'Travel and Honeymoon'].map((item, index) => (
                <a key={index} href='#' className='text-xs mb-2 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='w-full md:w-[30%]'>
            <div className='flex flex-col items-start md:items-center mr-3'>
              <div className='mb-3 text-sm  text-justify'>Wedding Attire & Accessories</div>
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
