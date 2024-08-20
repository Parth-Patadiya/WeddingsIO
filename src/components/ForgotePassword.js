import React, { useEffect, useState } from "react";
import { ReactComponent as PasswordImg } from "../assets/Images/Signup/Password.svg";
import { useLocation, useNavigate } from "react-router-dom";

const ForgotePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
          Reset Password to Wedding.io
        </p>
        <p className="md:text-3xl text-2xl  font-semibold ">Hello, New Password !</p>
        <form className="flex justify-center">
          <div className="w-full pt-6">
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col md:p-3 p-2 w-full">
                <div className="felx text-start">
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
                <div className="felx text-start mt-4">
                  <label className="felx text-start w-auto text-gray-400 font-semibold">
                    Confirm Password
                  </label>
                  <span className="text-red-500 ml-1">*</span>
                </div>
                <div className="relative">
                  <div className="felx text-start">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md "
                    />
                    <button
                      type="button"
                      onClick={toggleShowConfirmPassword}
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
          </div>
        </form>
            <div className="w-full flex justify-center pt-10">
          <button
            className="bg-light text-white font-bold md:py-4 py-3 md:px-16 px-5 w-[70%] rounded-full hover:bg-yellow-500"
            onClick={() => navigate("/signIn")}
          >
            Change password
          </button>
        </div>
      </div>
    </div>
  );
};
export default ForgotePassword;
