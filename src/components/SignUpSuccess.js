import React from "react";

const SignUpSuccess = () => {
  const Star = require("../assets/Images/Signup/Start.png");
  const Success = require("../assets/Images/Signup/Success.png");
  return (
    <div className="w-full flex justify-center my-32">
      <div className="sm:w-[60%] md:w-[85%] w-[85%] rounded-3xl border-gray-300 border-[1px] flex flex-col justify-center my-30 py-14 md:px-10 px-1">
        <div className="w-full flex justify-center">
            <img className="w-[10%] h-[75%] mb-2.5" src={Star} alt="" />
        </div>
        <p className="text-sm font-semibold text-gray-400 pb-4">
          Congratulations
        </p>
        <p className="text-3xl font-semibold ">Sign Up Success</p>
        <div className="w-full flex justify-center">
            <img className="w-[80%] my-10" src={Success} alt=""/>
        </div>
      </div>
    </div>
  );
};
export default SignUpSuccess;
