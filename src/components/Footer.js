import React from 'react';
import { Facebook, Instagram, Linkedin, Tiktok, YouTube } from '../common/commonImport';
import { ReactComponent as HomeLogo } from '../assets/Images/Logos/LogoHome.svg';
import { ReactComponent as Mail } from '../assets/Images/HaveAQuestion/Mail.svg';
import { ReactComponent as Phone } from '../assets/Images/HaveAQuestion/Phone.svg';

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full sm:mt-24 mt-1 pb-10 bg-gray-100'>
      <div className='w-[80%] my-16 flex flex-col items-center justify-center md:flex-row md:items-start'>
        <div className='w-full sm:w-[40%] flex flex-col items-start mb-8 md:mb-0'>
          <HomeLogo  className="md:h-7 sm:h-9 h-14 w-auto sm:mb-10 mb-3"/>
          <div className='lg:w-[60%] w-full flex flex-col space-y-2 items-start'>
            <div className='flex items-center'>
              <Mail className='w-4 mr-3' />
              <div className='sm:text-xs text-lg font-semibold'>support@wedding.io</div>
            </div>
            <div className='flex items-center'>
              <Phone className='sm:w-4 w-5 h-4 mr-2' />
              <div className='sm:text-xs text-lg font-semibold'>+1 (800) 123-4567</div>
            </div>
          </div>
          <div className='w-full lg:w-[60%] flex sm:justify-start justify-center my-10 sm:space-x-2 space-x-5'>
            <img className='sm:w-8 md:w-6 w-9 ' src={Instagram} alt="Instagram" />
            <img className='sm:w-8 md:w-6 w-9 ' src={Facebook} alt="Facebook" />
            <img className='sm:w-8 md:w-6 w-9 ' src={Tiktok} alt="Tiktok" />
            <img className='sm:w-8 md:w-6 w-9 ' src={Linkedin} alt="Linkedin" />
            <img className='sm:w-8 md:w-6 w-9 ' src={YouTube} alt="YouTube" />
          </div>
        </div>
        <div className='w-full flex flex-col sm:flex-row'>
          <div className='w-full md:w-[30%] mb-16 md:mb-0'>
            <div className='flex flex-col items-start mr-3'>
              <div className='sm:mb-3 mb-4 sm:text-sm text-[1.125rem]'>Navigation</div>
              {['Home', 'Features', 'Product', 'Resources', 'Pricing', 'Terms of Service', 'Privacy & Policy', 'Contact'].map((item, index) => (
                <a key={index} href='/' className='sm:text-xs text-[1rem] sm:mb-2 mb-1.5 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='w-full md:w-[30%] mb-16 md:mb-0'>
            <div className='flex flex-col items-start mr-3'>
              <div className='sm:mb-3 mb-4 sm:text-sm text-[1.125rem] '>Wedding Venues</div>
              {['Loft Weddings', 'Concert Venues', 'Other Venues', 'Hotel Weddings', 'Restaurants Weddings', 'Winery Weddings', 'Farm Weddings', 'Mansion Weddings', 'Wedding Banquet Halls', 'Banquet Halls', 'Micro Weddings', 'Destination Weddings'].map((item, index) => (
                <a key={index} href='/' className='sm:text-xs text-[1rem] sm:mb-2 mb-1.5 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='w-full md:w-[30%] mb-16 md:mb-0'>
            <div className='flex flex-col items-start mr-3'>
              <div className='sm:mb-3 mb-4 sm:text-sm text-[1.125rem] '>Wedding Vendors</div>
              {['Catering', 'Photography', 'Videography', 'Planning and Coordination', 'DJ and Music', 'Cakes and Baking', 'Florals and Decor', 'Rentals', 'Officiants', 'Entertainment', 'Photo Booths', 'Transportation', 'Invitations', 'Stationery', 'Accommodations', 'Travel and Honeymoon'].map((item, index) => (
                <a key={index} href='/' className='sm:text-xs text-[1rem] sm:mb-2 mb-1.5 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='w-full md:w-[30%]'>
            <div className='flex flex-col items-start mr-3'>
              <div className='sm:mb-3 mb-4 sm:text-sm text-[1.125rem] text-start'>Wedding Attire & Accessories</div>
              {['Dresses', 'Suiting', 'Jewelry', 'Hair and Makeup', 'Fitness', 'Accessories'].map((item, index) => (
                <a key={index} href='/' className='sm:text-xs text-[1rem] sm:mb-2 mb-1.5 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className='font-semibold sm:text-sm text-[1rem]'>© 2024 Wedding.io. All Rights Reserved.</div>
    </div>
  )
}
export default Footer;
