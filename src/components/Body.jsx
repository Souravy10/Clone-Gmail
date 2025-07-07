import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex h-full">
            <Sidebar />
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>
        </div>


    )
};

export default Body