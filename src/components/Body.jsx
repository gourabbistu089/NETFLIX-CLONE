import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utlis/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../utlis/userSlice'

function Body() {
const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ])

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a 

        const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid, email:email,displayName:displayName , photoURL:photoURL}))
          // navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        // navigate('/')
      }
    });
  }, [])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body