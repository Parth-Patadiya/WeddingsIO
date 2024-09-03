"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeLogo } from '../assets/Images/Logos/LogoHome.svg';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const navigate = useNavigate();

  const home = () => {
    setActivePage("home");
    navigate('/');
  };

  const handleSignUp = () => {
    navigate('/signUp');
    setMobileMenuOpen(false);
  };

  const handleSignIn = () => {
    navigate('/signIn');
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 px-13 shadow-md z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <HomeLogo className="h-9 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 justify-end">
          <Link
            smooth to="/#Home"
            className={`${activePage === "home"
              ? "text-sm font-semibold leading-6 text-black p-1 border-b-2 border-light"
              : "text-sm font-semibold leading-6 p-1 text-gray-600"
              }`}
            onClick={home}
          >
            Home
          </Link>
          <Link smooth to="/#AboutUs"
            className={`${activePage === "about us"
              ? "text-sm font-semibold leading-6 text-black p-1 border-b-2 border-light"
              : "text-sm font-semibold leading-6 p-1 text-gray-600"
              }`}
            onClick={() => setActivePage("about us")}
          >
            About Us
          </Link>
          <Link smooth to="/#Features"
            className={`${activePage === "features"
              ? "text-sm font-semibold leading-6 text-black p-1 border-b-2 border-light"
              : "text-sm font-semibold leading-6 p-1 text-gray-600"
              }`}
            onClick={() => setActivePage("features")}
          >
            Features
          </Link>
          <Link smooth to="/#Resources"
            className={`${activePage === "resources"
              ? "text-sm font-semibold leading-6 text-black p-1 border-b-2 border-light"
              : "text-sm font-semibold leading-6 p-1 text-gray-600"
              }`}
            onClick={() => setActivePage("resources")}
          >
            Resources
          </Link>
          <Link smooth to="/#ContactUs"
            className={`${activePage === "contact us"
              ? "text-sm font-semibold leading-6 text-black p-1 border-b-2 border-light"
              : "text-sm font-semibold leading-6 p-1 text-gray-600"
              }`}
            onClick={() => setActivePage("contact us")}
          >
            Contact Us
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-5 ml-10 flex items-center">
          <div className="text-sm font-semibold leading-6 ml-9 text-gray-600 w-44">
            Are You a Vendor?
          </div>
          <button className="button-gradient text-white font-bold py-1 px-3 w-28 rounded-full"
            onClick={handleSignIn}
          >
            Log In
          </button>
          <button
            className="button-gradient text-white font-bold py-1 px-3 w-28 rounded-full"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <HomeLogo className="h-8 w-auto" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  smooth to="/#Home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link smooth to="/#AboutUs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  smooth to="/#Features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  smooth to="/#Resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Resources
                </Link>
                <Link smooth to="/#ContactUs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
                <button
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={handleSignIn}
                >
                  Log in
                </button>
                <button
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
