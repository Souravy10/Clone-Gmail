import { signInWithPopup } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/appSlice";

const Login = () => {
  const dispatch = useDispatch();
  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser({
        displayname: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL
      }))

    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="p-8 flex flex-col gap-5 items-center bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-medium text-black">Login</h1>
        <GoogleButton onClick={SignInWithGoogle} />
        <img
          className="w-32 mt-4"
          src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/21939811/newgmaillogo.jpg?quality=90&strip=all&crop=0,0,100,100"
          alt="Gmail Logo"
        />
      </div>
    </div>



  );
};

export default Login;




