import React from "react";
import { BiArchiveIn } from "react-icons/bi";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";

const Mail = () => {
  const navigate = useNavigate();
  const selectedEmail = useSelector(store => store.appSlice.selectedEmail);
  const params = useParams();
  const deleteMailById = async (id) => {
    try {
      await deleteDoc(doc(db, "emails", id));
      navigate("/");
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex-1 bg-white rounded-xl mx-5'>
      {/* Top Toolbar */}
      <div className='flex items-center justify-between px-4 py-2'>
        {/* Left side icons */}
        <div className='flex items-center gap-2 text-gray-700'>
          <div onClick={() => navigate("/")} className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <BiArchiveIn size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineReport size={"20px"} />
          </div>
          <div onClick={() => deleteMailById(params.id)} className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdMore size={"20px"} />
          </div>
        </div>

        {/* Right side arrow buttons */}
        <div className='flex items-center gap-2 text-gray-700'>
          <button className='p-2 rounded-full hover:bg-gray-100'>
            <MdKeyboardArrowLeft size={"20px"} />
          </button>
          <button className='p-2 rounded-full hover:bg-gray-100'>
            <MdKeyboardArrowRight size={"20px"} />
          </button>
        </div>
      </div>

      {/* Mail Content */}
      <div className='h-[90vh] overflow-y-auto p-4'>
        {/* Subject, Inbox Badge, Date */}
        <div className="flex items-start justify-between bg-white gap-1">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-medium text-black">{selectedEmail?.subject}</h1>
              <span className="text-sm text-black bg-gray-200 rounded-md px-2 py-[2px]">Inbox</span>
            </div>
            <div className="text-gray-500 text-sm mt-1">
              <p className="leading-tight">{selectedEmail?.to}</p>
              <span>to me</span>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            <p>{new Date(selectedEmail?.createdAt?.seconds * 1000).toUTCString()}</p>
          </div>
        </div>

        {/* Message Body */}
        <div className="my-10 text-gray-700 text-sm">
          <p>
            {selectedEmail?.message}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Mail;

