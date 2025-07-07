import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";
import { motion } from "framer-motion";

const Message = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);

  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}

      onClick={openMail} className='flex items-center justify-between border-b border-gray-400 px-4 py-2 text-sm hover:cursor-pointer hover:shadow-md'>

      {/* Left icons */}
      <div className='flex items-center gap-3'>
        <div className='text-gray-300'>
          <MdCropSquare className='w-5 h-5' />
        </div>
        <div className='text-gray-300'>
          <RiStarLine className='w-5 h-5' />
        </div>
        <div>
          <h1 className="font-semibold text-black">{email?.to}</h1>
        </div>
      </div>

      {/* Middle section with text and time */}
      <div className='flex-1 flex justify-between items-center ml-4'>
        <p className='text-gray-600 truncate max-w-full'>
          {email?.message}
        </p>
        <span className='text-gray-400 whitespace-nowrap ml-4'>
          {new Date(email?.createdAt?.seconds * 1000).toUTCString()}
        </span>
      </div>
    </motion.div>
  );
};

export default Message;

