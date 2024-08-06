"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HomeLogo } from "../common/commonImport";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const SignupModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white rounded-lg p-6 w-full max-w-md mx-auto">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
          </button>
          <h2 className="text-2xl font-bold mb-4 flex justify-center">Sign Up</h2>
          <h2 className="text-sm mb-4 text-gray-300 flex justify-center">Sign Up for Subscribe to our Newsletter</h2>
          <form>
            <div className="mb-4 flex justify-center">
              <input
                className="w-[70%] px-3 py-2 border border-gray-200 rounded-md"
                placeholder="Enter Your Name Here"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="mb-4 flex justify-center">
              <input
                className="w-[70%] px-3 py-2 border border-gray-200 rounded-md"
                placeholder="Enter Your Email Here"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-4 flex justify-center">
              <input
                className="w-[70%] px-3 py-2 border border-gray-200 rounded-md"
                placeholder="Enter Your Password Here"
                type="password"
                id="password"
                required
              />
            </div>
            <div className="w-full flex justify-center">
              <button className="flex px-10 py-2 rounded-full bg-yellow-500 text-light-500 border hover:bg-yellow-500 hover:text-white focus:outline-none border-light text-sm">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-white px-13 shadow-md z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={HomeLogo} className="h-8 mr-48 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 justify-end">
          <button
            className={`${
              activePage === "home"
                ? "text-sm font-semibold leading-6 text-black p-1 border-b-2 border-light"
                : "text-sm font-semibold leading-6 p-1 text-gray-600"
            }`}
            onClick={() => setActivePage("home")}
          >
            Home
          </button>
          <button
            className={`${
              activePage === "about us"
                ? "text-sm font-semibold leading-6 text-black p-1 border-b-2 border-light"
                : "text-sm font-semibold leading-6 p-1 text-gray-600"
            }`}
            onClick={() => setActivePage("about us")}
          >
            About Us
          </button>
          <button
            className={`${
              activePage === "features"
                ? "text-sm font-semibold leading-6 text-black p-1 border-b-2 border-light"
                : "text-sm font-semibold leading-6 p-1 text-gray-600"
            }`}
            onClick={() => setActivePage("features")}
          >
            Features
          </button>
          <button
            className={`${
              activePage === "resources"
                ? "text-sm font-semibold leading-6 text-black p-1 border-b-2 border-light"
                : "text-sm font-semibold leading-6 p-1 text-gray-600"
            }`}
            onClick={() => setActivePage("resources")}
          >
            Resources
          </button>
          <button
            className={`${
              activePage === "contact us"
                ? "text-sm font-semibold leading-6 text-black p-1 border-b-2 border-light"
                : "text-sm font-semibold leading-6 p-1 text-gray-600"
            }`}
            onClick={() => setActivePage("contact us")}
          >
            Contact Us
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-5 flex items-center">
          <div className="text-sm font-semibold leading-6 ml-9 text-gray-600 w-44">
            Are You a Vendor?
          </div>
          <button className="bg-light text-white font-bold py-1 px-3 w-28 rounded-full hover:bg-yellow-500 ">
            Log In
          </button>
          <button
            className="bg-light text-white font-bold py-1 px-3 w-28 rounded-full hover:bg-yellow-500"
            onClick={openModal}
          >
            Sign Up
          </button>
        </div>
      </nav>
      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={HomeLogo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
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
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Are You a Vendor?
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={openModal}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
