import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../redux/appSlice";
import { AnimatePresence,motion } from "framer-motion";
import { signOut } from "firebase/auth";
import {auth} from "../firebase"
import { useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [input,setInput]=useState("");
  const [toggle,setToggle]=useState(false);
  const {user}=useSelector((store)=>store.appSlice);
  const dispatch=useDispatch();
  const signOutHandler=()=>{
    signOut(auth).then(()=>{
      dispatch(setUser(null));

    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    dispatch(setSearchText(input));

  },[input])


  return (
    <div className="flex items-center justify-between mx-3 h-16">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="md:block hidden w-[50%] mx-auto">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            type="text"
            placeholder="Search Mail"
            className="rounded-full w-full text-black bg-transparent outline-none px-1"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size="20px" />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoIosSettings size="20px" />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <TbGridDots size="20px" />
          </div>
          <div className="relative cursor-pointer">
            <img onClick={()=>setToggle(!toggle)} src={user?.photoURL || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} alt="Avatar"/>
            <AnimatePresence>
              {
                toggle && (
                  <motion.div
                  initial={{opacity:0,scale:0.5}}
                  animate={{opacity:1,scale:1}}
                  exit={{opacity:0,scale:0.8}}
                  transition={{duration:0.1}}
                  className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
                  
                  >
                    <p onClick={signOutHandler} className="p-2 underline text-black">LogOut</p>

                  </motion.div>
                )
              }

            </AnimatePresence>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

