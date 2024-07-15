import React from 'react'

export default function NetflixFooter() {
  return (
    <>
      <div className=" text-white p-2">
        Questions? Call 000-800-919-1694
      </div>
      <div className="flex flex-wrap justify-between mt-4  text-white">
        <div className="w-full sm:w-1/2 md:w-1/4 px-4">
          <ul className='list-none'>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Investor Relations</li>
            <li className="mb-2">Privacy</li>
            <li className="mb-2">Speed Test</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4">
          <ul className='list-none'>
            <li className="mb-2">Help Centre</li>
            <li className="mb-2">Jobs</li>
            <li className="mb-2">Cookie Preferences</li>
            <li className="mb-2">Legal Notices</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4">
          <ul className='list-none'>
            <li className="mb-2">Account</li>
            <li className="mb-2">Ways to Watch</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Only on Netflix</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4">
          <ul className='list-none'>
            <li className="mb-2">Media Centre</li>
            <li className="mb-2">Terms of Use</li>
            <li className="mb-2">Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  )
}
