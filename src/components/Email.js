import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Email = () => {
    const navigate = useNavigate();
    const ScrollToTop = () =>  {
      const { pathname } = useLocation();
  
      useEffect(() => {
          window.scrollTo(0, 0);
      }, [pathname]);
  
      return null;
  }
  ScrollToTop();

  return (
    <div className="w-full flex justify-center">
      <div className="sm:w-[60%] md:w-[85%] w-[85%] rounded-3xl border-gray-300 border-[1px] flex flex-col justify-center md:my-40 my-16 py-14 md:px-10 px-5">
        <p className="text-sm font-semibold text-gray-400 pb-4">
          Password assistance to weddings.io
        </p>
        <p className="md:text-3xl text-2xl  font-semibold ">
          Hello, Email !
        </p>
        <form className="flex justify-center">
          <div className="w-full pt-6">
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col md:p-3 p-2 w-full">
                <div className="felx text-start">
                  <label className="felx text-start w-auto text-gray-400 font-semibold">
                    Email
                  </label>
                  <span className="text-red-500 ml-1">*</span>
                </div>
                <input
                  className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md"
                  type="email"
                  id="email"
                  required
                />
              </div>
            </div>
          <div className="w-full flex justify-center pt-10">
          <button
            className="bg-light text-white font-bold md:py-4 py-3 md:px-16 px-5 w-[70%] rounded-full hover:bg-yellow-500"
            onClick={() => navigate("/forgotPassword")}
          >
            Send Link
          </button>
        </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Email;
