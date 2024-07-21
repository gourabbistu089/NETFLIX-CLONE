import React from 'react';
import profile from '../assets/assets/profile_img.png'
import { signOut } from "firebase/auth";
import { auth } from '../utlis/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      alert("Something wrong")
    });
  }
  return (
    <div className="flex justify-between p-3 m-3 bg-cover">
      <div>
        <h2 className="text-red-700 font-bold text-3xl">NETFLIX</h2>
      </div>
      <div className="flex items-center my-2 gap-x-4">
        <select
          name="language"
          id="language"
          className="form-select mr-2 px-6 py-2 border border-gray-300 rounded"
        >
          <option value="">Language</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      {
        user && <>
          <img src={user.photoURL} className=' w-12' alt="" />
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded">
          Sign Out
        </button>
        </>
      }
      </div>
    </div>
  );
}

export default Header;
