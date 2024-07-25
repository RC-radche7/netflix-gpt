import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    // Sign-out successful.
  }).catch((error) => {
    navigate('/error');
    // An error happened.
  });
}
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=200&h=100"
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