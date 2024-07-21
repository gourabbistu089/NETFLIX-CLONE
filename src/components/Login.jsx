import React, { useState } from 'react';
import Header from './Header';
import netflixBg from '../assets/netflixBg.webp';

const Login = () => {
    const [isSignInForm, setIsSignInForm] =useState(true)
    const toggleForm = () =>{
        console.log('idj')
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${netflixBg})` }}>
            <div className="absolute inset-0 bg-black opacity-65"></div>
            <div className="relative p-3 m-3">
                <Header />
                <div className="flex  justify-center ">
                    <div className="bg-[#00000090] p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h1 className="text-3xl font-bold text-white mb-6 text-center">{isSignInForm ? "Sign In " : "Sign Up"}</h1>
                        <form>
                            {
                                !isSignInForm && 
                                <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                                    User Name 
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="User name or Id"
                                />
                            </div>
                            }
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                                    Email or phone number
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email or phone number"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <button
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                    type="button"
                                >
                                    {isSignInForm ? "Sign In" : "Sign Up"}
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="inline-flex items-center text-gray-400">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-gray-400 hover:text-white">
                                    Need help?
                                </a>
                            </div>
                        </form>
                        <div className="mt-6 text-center">
                            <p className="text-gray-400">
                               {
                                isSignInForm ? ' New to Netflix? ':'Already register?'
                               }<span
                                 onClick={toggleForm} 
                                className="text-white cursor-pointer hover:underline">
                                    {isSignInForm ? "Sign Up Now"  :  "Sign In Now"}
                                    </span>.
                            </p>
                            <p className="text-gray-400 mt-2 text-xs">
                                This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-white hover:underline">Learn more.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
