import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Tiktok, YouTube } from '../common/commonImport';
import { ReactComponent as HomeLogo } from '../assets/Images/Logos/LogoHome.svg';
import { ReactComponent as Mail } from '../assets/Images/HaveAQuestion/Mail.svg';
import { ReactComponent as Phone } from '../assets/Images/HaveAQuestion/Phone.svg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const NavigationDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-7  w-full flex justify-center flex-col items-center">
      <div
        className="text-lg font-bold cursor-pointer flex items-center mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className='ml-3'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && (
        <div className="flex flex-col mt-2">
          {items.map((item, index) => (
            <a key={index} href="/" className="text-gray-400 mb-3 text-lg">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full sm:mt-24 mt-1 pb-10 bg-gray-100'>
      <div className='w-[80%] my-16 flex flex-col items-center justify-center lg:flex-row md:items-start'>
        <div className='w-full lg:w-[40%] flex flex-col lg:items-start items-center mb-8 md:mb-0'>
          <HomeLogo className="lg:h-12 h-10 w-auto lg:mb-10 mb-16" />
          <div className='lg:w-[60%] w-full flex flex-col space-y-2 lg:items-start items-center'>
            <div className='flex items-center lg:mb-0 mb-4'>
              <Mail className='w-4 mr-3' />
              <div className='lg:text-xs text-lg font-semibold'>support@weddings.io</div>
            </div>
            <div className='flex items-center'>
              <Phone className='sm:w-4 w-5 h-4 mr-2' />
              <div className='lg:text-xs text-lg font-semibold'>+1 (800) 123-4567</div>
            </div>
          </div>
          <div className='w-full hidden lg:block'>
            <div className='lg:w-[60%] flex sm:justify-start justify-center my-10 sm:space-x-2 space-x-5 '>
              <img className='sm:w-8 md:w-6 w-9' src={Instagram} alt="Instagram" />
              <img className='sm:w-8 md:w-6 w-9' src={Facebook} alt="Facebook" />
              <img className='sm:w-8 md:w-6 w-9' src={Tiktok} alt="Tiktok" />
              <img className='sm:w-8 md:w-6 w-9' src={Linkedin} alt="Linkedin" />
              <img className='sm:w-8 md:w-6 w-9' src={YouTube} alt="YouTube" />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col lg:flex-row'>
          <div className='lg:w-[30%] w-full mb-16 md:mb-0 hidden lg:block'>
            <div className='flex flex-col items-start mr-3'>
              <div className='sm:mb-3 mb-4 sm:text-sm text-[1.125rem]'>Navigation</div>
              {['Home', 'Features', 'Product', 'Resources', 'Pricing', 'Terms of Service', 'Privacy & Policy', 'Contact'].map((item, index) => (
                <a key={index} href='/' className='sm:text-xs text-[1rem] sm:mb-2 mb-1.5 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='lg:w-[30%] w-full mb-16 md:mb-0 hidden lg:block'>
            <div className='flex flex-col items-start mr-3'>
              <div className='sm:mb-3 mb-4 sm:text-sm text-[1.125rem] '>Wedding Venues</div>
              {['Loft Weddings', 'Concert Venues', 'Other Venues', 'Hotel Weddings', 'Restaurants Weddings', 'Winery Weddings', 'Farm Weddings', 'Mansion Weddings', 'Wedding Banquet Halls', 'Banquet Halls', 'Micro Weddings', 'Destination Weddings'].map((item, index) => (
                <a key={index} href='/' className='sm:text-xs text-[1rem] sm:mb-2 mb-1.5 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='lg:w-[30%] w-full mb-16 md:mb-0 hidden lg:block'>
            <div className='flex flex-col items-start mr-3'>
              <div className='sm:mb-3 mb-4 sm:text-sm text-[1.125rem] '>Wedding Vendors</div>
              {['Catering', 'Photography', 'Videography', 'Planning and Coordination', 'DJ and Music', 'Cakes and Baking', 'Florals and Decor', 'Rentals', 'Officiants', 'Entertainment', 'Photo Booths', 'Transportation', 'Invitations', 'Stationery', 'Accommodations', 'Travel and Honeymoon'].map((item, index) => (
                <a key={index} href='/' className='sm:text-xs text-[1rem] sm:mb-2 mb-1.5 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
          <div className='lg:w-[30%] w-full hidden lg:block'>
            <div className='flex flex-col items-start mr-3'>
              <div className='sm:mb-3 mb-4 sm:text-sm text-[1.125rem] text-start'>Wedding Attire & Accessories</div>
              {['Dresses', 'Suiting', 'Jewelry', 'Hair and Makeup', 'Fitness', 'Accessories'].map((item, index) => (
                <a key={index} href='/' className='sm:text-xs text-[1rem] sm:mb-2 mb-1.5 text-gray-400 text-start'>{item}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:hidden block w-full">
          <div className='flex mt-16 flex-col items-center'>
            <NavigationDropdown
              title="Navigation"
              items={['Home', 'Features', 'Product', 'Resources', 'Pricing', 'Terms of Service', 'Privacy & Policy', 'Contact']}
            />
            <NavigationDropdown
              title="Wedding Venues"
              items={['Loft Weddings', 'Concert Venues', 'Other Venues', 'Hotel Weddings', 'Restaurants Weddings', 'Winery Weddings', 'Farm Weddings', 'Mansion Weddings', 'Wedding Banquet Halls', 'Banquet Halls', 'Micro Weddings', 'Destination Weddings']}
            />
            <NavigationDropdown
              title="Wedding Vendors"
              items={['Catering', 'Photography', 'Videography', 'Planning and Coordination', 'DJ and Music', 'Cakes and Baking', 'Florals and Decor', 'Rentals', 'Officiants', 'Entertainment', 'Photo Booths', 'Transportation', 'Invitations', 'Stationery', 'Accommodations', 'Travel and Honeymoon']}
            />
            <NavigationDropdown
              title="Wedding Attire & Accessories"
              items={['Dresses', 'Suiting', 'Jewelry', 'Hair and Makeup', 'Fitness', 'Accessories']}
            />
          </div>
        </div>
        <div className='w-full lg:hidden block'>
          <div className='flex lg:w-[60%] justify-center my-10 sm:space-x-2 space-x-5 '>
            <img className='w-9' src={Instagram} alt="Instagram" />
            <img className='w-9' src={Facebook} alt="Facebook" />
            <img className='w-9' src={Tiktok} alt="Tiktok" />
            <img className='w-9' src={Linkedin} alt="Linkedin" />
            <img className='w-9' src={YouTube} alt="YouTube" />
          </div>
        </div>
      </div>
      <div className='font-semibold lg:text-sm text-md'>© 2024 Wedding.io. All Rights Reserved.</div>
    </div>
  )
}
export default Footer;
