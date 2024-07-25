import React, { useEffect } from 'react';
import Login from "./Login"
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
  const dispatch = useDispatch();
 
  const appRouter = createBrowserRouter ([
    {
      path : '/',
      element : <Login />
    },
    {
      path : '/browse',
      element : <Browse />
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayname,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayname:displayname,photoURL:photoURL}));
        
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
      }
      else {
        dispatch(removeUser);
       
    // User is signed out
      // ...
      }});
    }, [])
  return (
    <div>
       <RouterProvider router  = {appRouter} />
    </div>
  )
}

export default Body