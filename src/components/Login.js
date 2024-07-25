import React from 'react';
import Header from './Header';
import { useState, useRef } from 'react';
import { validate } from '../utils/validate';
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const mno = useRef(null);

  const handleButtonClicked = () => {
    let message;
    if (isSignInForm) {
      message = validate(undefined, undefined, email.current.value, password.current.value);
    } else {
      message = validate(name.current.value, mno.current.value, email.current.value, password.current.value);
    }
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "name.current.value" , photoURL : "https://as2.ftcdn.net/v2/jpg/05/65/79/61/1000_F_565796170_C4fuivt1qGdDtTGKVpQzcYx7p8PzXEGI.jpg"
          }).then(() => {
            const {uid,email,displayname,photoURL} = auth.currentUser;
            dispatch(
              addUser({
                uid:uid,
                email:email,
                displayname:displayname,
                photoURL:photoURL}));
            navigate("/browse");
            // Profile updated!
            // ...
          }).catch((error) => {
            setErrorMessage(error.message);
            // An error occurred
            // ...
          });
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " - " + errorMessage);
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/user-not-found') {
            setErrorMessage("User not found. Please sign up if you are a new user.");
          } else if (errorCode === 'auth/wrong-password') {
            setErrorMessage("Incorrect password. Please try again.");
          } else if (errorCode === 'auth/invalid-email') {
            setErrorMessage("Invalid email address. Please check your email.");
          } else if (errorCode === 'auth/user-disabled') {
            setErrorMessage("User account is disabled.");
          } else {
            setErrorMessage("User not found. Please sign up if you are a new user.");
          }
          console.log(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
    if (email.current) email.current.value = '';
    if (password.current) password.current.value = '';
    if (name.current) name.current.value = '';
    if (mno.current) mno.current.value = '';
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="page" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='p-12 absolute w-3/12 mx-auto left-0 right-0 my-36 text-white bg-black bg-opacity-80 rounded-lg'>
        <h3 className='p-4 my-3 font-bold text-3xl rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</h3>
        {!isSignInForm && <input ref={name} className='p-3 my-3 w-full rounded-lg bg-gray-700 text-white' type="text" placeholder='Full Name' />}<br />
        {!isSignInForm && <input ref={mno} className='p-3 my-3 w-full rounded-lg bg-gray-700 text-white' type="text" placeholder='Phone Number' />}<br />
        <input ref={email} className='p-3 my-3 w-full rounded-lg bg-gray-700 text-white' type="text" placeholder='Email Address' /><br />
        <input ref={password} className='p-3 my-3 w-full rounded-lg bg-gray-700 text-white' type="Password" placeholder='Password' /> <br />
        <p className='text-bold text-red-500'>{errorMessage}</p>
        <button className='p-2 my-4 w-full bg-red-600 rounded-lg' onClick={handleButtonClicked}>{isSignInForm ? "Sign In" : "Sign Up"}</button> <br />
        <h6 className='p-2 my-4'>{isSignInForm ? "New to Netflix?" : "Already have an account?"}<button onClick={toggleSignInForm}> &nbsp;{isSignInForm ? "Sign up now" : "Sign in now"}</button></h6>
      </form>
    </div>
  );
}

export default Login;
