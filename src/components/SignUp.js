import React, { useState } from 'react'
import { ReactComponent as PasswordImg } from '../assets/Images/Signup/Password.svg';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedPlc, setIsCheckedPlc] = useState(false);
    const navigate = useNavigate()
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const handleCheckboxChangePlc = (event) => {
        setIsCheckedPlc(event.target.checked);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='w-full flex justify-center '>
            <div className='md:w-[60%] w-[95%] rounded-3xl border-gray-300 border-[1px] flex flex-col justify-center my-40 py-20 md:px-16 px-1'>
                <p className='text-sm font-semibold text-gray-400 pb-2'>Sign up to Wedding.io</p>
                <p className='text-3xl font-semibold '>Create your Account</p>
                <form className="flex justify-center">
                    <div className='w-full pt-6'>
                        <div className="flex md:flex-row flex-col">
                            <div className='flex flex-col md:p-5 p-2  md:w-[50%] w-full'>
                                <div className='felx text-start'>
                                    <label className='felx text-start w-auto text-gray-400 font-semibold'>First name</label>
                                    <span className="text-red-500 ml-1">*</span>
                                </div>
                                <input
                                    className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md"
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className='flex flex-col md:p-5 p-2 md:w-[50%] w-full'>
                                <div className='felx text-start'>
                                    <label className='felx text-start w-auto text-gray-400 font-semibold'>Last name</label>
                                    <span className="text-red-500 ml-1">*</span>
                                </div>
                                <input
                                    className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md"
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col">
                            <div className='flex flex-col md:p-5 p-2  md:w-[50%] w-full'>
                                <div className='felx text-start'>
                                    <label className='felx text-start w-auto text-gray-400 font-semibold'>Email</label>
                                    <span className="text-red-500 ml-1">*</span>
                                </div>
                                <input
                                    className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md"
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className='flex flex-col md:p-5 p-2 md:w-[50%] w-full'>
                                <div className='felx text-start'>
                                    <label className='felx text-start w-auto text-gray-400 font-semibold'>Phone Number</label>
                                    <span className="text-red-500 ml-1">*</span>
                                </div>
                                <input
                                    className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md"
                                    type="Number"
                                    id="phoneNumber"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4 flex md:flex-row flex-col">
                            <div className='flex flex-col md:p-5 p-2  md:w-[50%] w-full'>
                                <div className='felx text-start'>
                                    <label className='felx text-start w-auto text-gray-400 font-semibold'>Password</label>
                                    <span className="text-red-500 ml-1">*</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
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
                            <div className='mb-4 flex flex-col md:p-5 p-2 md:w-[50%] w-full'>
                                <div className='felx text-start'>
                                    <label className='felx text-start w-auto text-gray-400 font-semibold'>Confirm Password</label>
                                    <span className="text-red-500 ml-1">*</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
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
                </form>
                <label className='flex justify-start px-5 pb-2'>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='accent-light border-gray-400-2 mr-2'
                    />
                    <p className='text-gray-500'>
                        Remember me
                    </p>
                </label>
                <label className='flex justify-start px-5 '>
                    <input
                        type="checkbox"
                        checked={isCheckedPlc}
                        onChange={handleCheckboxChangePlc}
                        className='accent-light border-gray-400-2 mr-2'
                    />
                    <p className='text-gray-500'>
                        I agree to all the Terms and Privacy policy
                    </p>
                </label>
                <div className='w-full flex justify-center pt-10'>
                    <button
                        className="bg-light text-white font-bold md:py-4 py-3 md:px-16 px-5 w-[70%] rounded-full hover:bg-yellow-500"
                        onClick={() => navigate('/verifyEmail')}
                    >
                        Create account
                    </button>
                </div>
                <div className='w-full flex pt-10 justify-center'>
                    <p className='font-semibold flex'>
                        Already have an account?
                    </p>
                    <a className='font-semibold flex ml-1 text-blue-900 justify-center' href='/signIn'>
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    )
}
export default SignUp;
