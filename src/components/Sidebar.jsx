import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { MdKeyboardArrowDown, MdOutlineDrafts, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";
const SidebarItems = [
    {
        icon: <LuPencil size={"24px"} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStar size={"24px"} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={"24px"} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={"24px"} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={"24px"} />,
        text: "Drafts"
    },
    {
        icon: <MdKeyboardArrowDown size={"24px"} />,
        text: "More"
    },
]

const Sidebar = () => {
    const dispatch=useDispatch();
    return (
        <div className='w-15%'>
            <div className='p-3'>
                <button onClick={()=>dispatch(setOpen(true))} className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF] text-black cursor-pointer'>
                    <LuPencil size={"24px"} />
                    Compose
                </button>

            </div>
            <div className='text-gray-500'>
                {
                    SidebarItems.map((item, index) => {
                        return (
                            <div className='flex items-center gap-4 px-4 py-2 rounded-r-full hover:bg-gray-200 hover:cursor-pointer w-full max-w-[230px]'>
                                {item.icon}
                                <p className='text-sm'>{item.text}</p>
                            </div>

                        )

                    })
                }

            </div>


        </div>


    );
};

export default Sidebar;