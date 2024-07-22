import React from 'react'
import { FaPlay } from "react-icons/fa";
function VideoTitle({title,overview}) {
  return (
    <div className=' px-12 absolute text-white bg-gradient-to-tr from-black w-screen aspect-video  pt-[15%] overflow-hidden '>
      <h1 className=' text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4
       overflow-hidden'>{overview.substr(0,80)}</p>
      <div className='flex gap-4 overflow-hidden'>
        <button className= ' bg-gray-500  px-14 py-2 text-white text-lg flex justify-center items-center gap-1 rounded-lg opacity-80'><FaPlay />
        Play</button>
        <button  className= ' bg-gray-500  px-12 py-2 text-white text-lg flex justify-center items-center gap-1 rounded-lg opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle