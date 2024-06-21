import React from 'react'
import Header from './Header'
import { useState ,useRef} from 'react';
import {validate} from '../utils/validate';

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const mno = useRef(null);

  
  const handleButtonClicked = () => {
    let message;
    if (isSignInForm) {
      message= validate(undefined,undefined,email.current.value,password.current.value);
    }
    else {
      message= validate(name.current.value,mno.current.value,email.current.value,password.current.value);
    }
    setErrorMessage(message);
    //console.log(message);
    //console.log(email.current.value);
    //console.log(password.current.value);
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
    if (email.current) email.current.value = '';
    if (password.current) password.current.value = '';
    if (name.current) name.current.value = '';
    if (mno.current) mno.current.value = '';
  }
  return (
    <div>
    <Header />
    <div className='absolute'>
    <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt = "page"/>
    </div>
    <form onSubmit = {(e) => e.preventDefault() }className=' p-12 absolute w-3/12 mx-auto left-0 right-0 my-36 text-white bg-black bg-opacity-80 rounded-lg'>
      <h3 className='p-4 my-3 font-bold text-3xl rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</h3>
      {!isSignInForm && <input ref={name} className='p-3 my-3 w-full rounded-lg bg-gray-700 text-white' type="text"  placeholder='Full Name'></input>}<br />
      {!isSignInForm && <input ref = {mno} className='p-3 my-3 w-full rounded-lg bg-gray-700 text-white' type="text"  placeholder='Phone Number'></input>}<br />
      <input ref={email} className='p-3 my-3 w-full rounded-lg bg-gray-700 text-white' type="text"  placeholder='Email Address'></input><br />
      <input ref={password} className='p-3 my-3 w-full rounded-lg bg-gray-700 text-white' type="Password"  placeholder='Password'></input> <br />
      <p className='text-bold text-red-500'>{errorMessage}</p>
      <button className='p-2 my-4 w-full bg-red-600 rounded-lg' onClick = {handleButtonClicked}>{isSignInForm ? "Sign In" : "Sign Up"}</button> <br />
      <h6 className='p-2 my-4'>{isSignInForm ?"New to Netflix?" : "Already have an account?"}<button onClick = {toggleSignInForm}> &nbsp;{isSignInForm ?"Sign up now" : "Sign in now"}</button></h6>
    </form>
    </div>
  )
}

export default Login
