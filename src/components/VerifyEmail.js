import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const Back = require("../assets/Images/VerifyEmail/Back.png");
  const [code, setCode] = useState(["", "", "", ""]);

  const navigate = useNavigate();
  
  const handleChange = (element, index) => {
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div className="w-full flex justify-center my-32">
      <div className="md:w-[30%] w-[85%] rounded-3xl border-gray-300 border-[1px] flex flex-col justify-center my-30 py-10 md:px-10 px-5">
        <div className="w-full flex">
          <a href="/signUp" className="w-full flex justify-end">
            <img className="w-[7%] h-[75%] mb-2.5" src={Back} alt="" />
          </a>
        </div>
        <p className="text-3xl md:text-2xl font-semibold mt-4">Email Verification</p>
        <div className="flex justify-center pt-2">
          <p className="md:text-sm text-xs font-semibold text-gray-400 pb-4 mr-1">
            Enter the Code sent to
          </p>
          <a
            href="mailto:wedding.io@example"
            className="md:text-sm text-xs font-semibold text-blue-800 pb-4"
          >
            wedding.io@example
          </a>
        </div>
        <div className="w-full flex justify-center">
          
        <div className="flex justify-between mb-4 w-[75%]">
          {code.map((num, index) => (
            <input
            key={index}
            type="text"
            maxLength="1"
              value={num}
              onChange={(e) => handleChange(e.target, index)}
              className="w-12 h-12 text-center text-2xl font-semibold border-b-2 border-light focus:outline-none"
            />
          ))}
        </div>
            </div>

            <div className="w-full flex justify-center pt-10">
          <button
            className="bg-light text-white font-bold md:py-4 py-3 md:px-16 px-5 w-[70%] rounded-full hover:bg-yellow-500"
            onClick={() => navigate("/")}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};
export default VerifyEmail;
