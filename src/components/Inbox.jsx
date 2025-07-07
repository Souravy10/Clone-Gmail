import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Messages from "./Messages";

const mailType = [
  {
    icon: <MdInbox size={20} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={20} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={20} />,
    text: "Social",
  },
];

const Inbox = () => {
  const [mailTypeselected, setmailTypeselected] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={20} />
            <FaCaretDown size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={20} />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-sm text-gray-500'>
            1-50 of 1000
          </p>
          <button className='"w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"'>
            <MdKeyboardArrowLeft className='text-gray-600' size={"24px"}/>
          </button>
          <button className='"w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"'>
            <MdKeyboardArrowRight className='text-gray-600' size={"24px"}/>
          </button>


        </div>
      </div>


      {/* Tabs for Mail Types */}
      <div className="px-4">
        <div className="flex items-center gap-4 border-b border-gray-300 mb-2">
          {mailType.map((item, index) => (
            <button
              onClick={() => setmailTypeselected(index)}
              key={index}
              className={`${
                mailTypeselected === index
                  ? "border-b-4 border-b-blue-600 text-blue-600 font-medium"
                  : "border-b-4 border-b-transparent text-gray-700"
              } flex items-center gap-2 px-6 py-3 hover:bg-gray-100 rounded-t-lg transition duration-150 ease-in-out`}
            >
              {item.icon}
              <span className="text-sm">{item.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Mail Content */}
      <div className="h-[90vh] overflow-y-auto px-4">
        {/* You can conditionally render tab content here */}
        <Messages/>
      </div>
    </div>
  );
};

export default Inbox;

