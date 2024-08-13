import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector( (store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
    navigate('/error');
    // An error happened.
  });
}
useEffect(() => {
 const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayname,photoURL} = user;
      dispatch(
        addUser({
          uid:uid,
          email:email,
          displayname:displayname,
          photoURL:photoURL
        })
      );
      
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      navigate('/browse');
    }
    
    else {
      dispatch(removeUser());
      navigate('/');
     
  // User is signed out
    // ...
    }});
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={LOGO}
        alt="logo"
      />
      {user && (<div className='flex p-2 justify-between'>
        <img className="w-12 h-12" alt="userIcon" src={user?.photoURL} />
        <button className='font-bold text-white' onClick= {handleSignOut}>(SignOut)</button>
      </div>)}
    </div>
  );
}

export default Header;