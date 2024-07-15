import React from 'react'
import NetflixLogo from '../assets/NetflixLogo.png'

const Header = () => {
  return (
    <div className=' px-6 py-4 '> 
        <div>
            <img className='w-44' src={NetflixLogo} alt="" />
        </div>
    </div>
  )
}

export default Header