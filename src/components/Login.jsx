import React, { useState } from 'react'
import Header from './Header'
import netflixbg from '../assets/netflixBg.webp'
const Login = () => {
    const[signInForm, setSignInForm] = useState(true)
    const toggleSignInForm = ()=>{
        setSignInForm(!signInForm)
    }

  return (
    <div style={{ backgroundImage: `url(${netflixbg})` }} className='bg-cover bg-center min-h-screen  '>
        <div className=' h-screen w-screen bg-gradient-to-b from-[#000000ec] '>
        <Header/>
        <div className=' mt-20'> 
            <form className=' bg-[#000000bc]  flex flex-col lg:w-1/4 w-1/2 mx-auto py-8 p-12 pt-2 text-white gap-4 rounded-lg mt-10'>
            <h2 className=' text-white text-3xl mt-10 font-bold mb-6'>{signInForm ? "Sign In" :"Sign Up" }</h2>
               {!signInForm &&  <input type="text" className=' p-2 m-2 w-[80%] bg-[rgb(36,41,54)] ' placeholder='User Name' />}
                <input type="email" className=' p-2 m-2 w-[80%] bg-[rgb(36,41,54)] ' placeholder='Email Address' />
                <input type="password" name="" placeholder='Password' className=' m-2 p-2 w-[80%] bg-[rgb(36,41,54)]' id="" />
                <button className=' bg-[#e50914] p-2 m-2 w-[80%] text-white'>{signInForm ? "Sign In" :"Sign Up" }</button>
                {
                    signInForm ? (<p className=' text-white'>New to Netflix?  <span onClick={toggleSignInForm} className='font-bold  cursor-pointer'> Sign up now.</span></p>)
                    :
                    (
                        <p className=' text-white'>Already have Account! <span onClick={toggleSignInForm} className='font-bold  cursor-pointer'>Explore now.</span></p>
                    )
                }
               
            </form>
        </div>
        </div>
        
    </div>
  )
}

export default Login
