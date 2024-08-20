import React, { useEffect, useState } from "react";
import { ReactComponent as PasswordImg } from "../assets/Images/Signup/Password.svg";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
      <div className="md:w-[30%] w-[85%] rounded-3xl border-gray-300 border-[1px] flex flex-col justify-center md:my-40 my-16 py-14 md:px-10 px-5">
        <p className="text-sm font-semibold text-gray-400 pb-4">
          Sign in to weddings.io
        </p>
        <p className="md:text-3xl text-2xl  font-semibold ">Hello, welcome back !</p>
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
                <div className="felx text-start pt-3">
                  <label className="felx text-start w-auto text-gray-400 font-semibold">
                    Password
                  </label>
                  <span className="text-red-500 ml-1">*</span>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md "
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 flex items-center pt-4 pr-3 text-gray-600"
                  >
                    {showPassword ? (
                      <svg
                        xmlns={PasswordImg}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke=""
                        className="w-6 h-6"
                      >
                        <PasswordImg />
                      </svg>
                    ) : (
                      <svg
                        xmlns={PasswordImg}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke=""
                        className="w-6 h-6"
                      >
                        <PasswordImg />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-between mt-3 p-2">
          <label className="flex justify-start md:px-4">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="accent-light border-gray-400-2 mr-2"
            />
            <p className="text-gray-500 md:text-md text-xs">Remember me</p>
          </label>
          <a href="/email" className="text-blue-900 md:text-md text-xs font-semibold md:px-4" >Forgot password?</a>
        </div>

        <div className="w-full flex justify-center pt-10">
          <button
            className="bg-light text-white font-bold md:py-4 py-3 md:px-10 px-5 w-[70%] rounded-full hover:bg-yellow-500"
            onClick={() => navigate("/")}
          >
            Create account
          </button>
        </div>
        <div className="w-full flex pt-10 justify-center">
          <p className="font-semibold text-start md:text-center flex md:text-md text-sm">Don’t have an account?</p>
          <a
            className="font-semibold flex ml-1 text-blue-900 justify-start md:text-md text-sm"
            href="/signUp"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
