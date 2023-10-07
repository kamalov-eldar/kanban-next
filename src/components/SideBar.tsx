import React from "react";
import { FaUsersGear } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { HiViewBoards } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

function SideBar() {
    const style = { color: "blue", cursor: "pointer" };
    return (
        <div className="SideBar fixed inset-y-0 left-0 bg-blue-100 w-20">
            <h1
                className="flex items-center justify-center text-2xl h-16
             bg-purple-600 text-white font-bold ">
                hussle
            </h1>
            <ul className="flex flex-col text-lg h-full text-blue-700  ">
                <li className="flex items-center justify-center flex-col py-5">
                    <FaUsersGear className="w-7 h-7 text-blue-700" />
                    Manage
                </li>
                <li
                    className="flex items-center justify-center flex-col py-5
                text-purple-500 font-bold">
                    <HiViewBoards className="w-7 h-7 text-purple-500" />
                    Boards
                </li>
                <li className="flex items-center justify-center flex-col py-5">
                    <LuClipboardList className="w-7 h-7 text-blue-700" />
                    Shedule
                </li>
                <li className="flex items-center justify-center flex-col py-5">
                    <TbReportAnalytics className="w-7 h-7 text-blue-700" />
                    Report
                </li>
                <li className="flex items-center justify-center flex-col mt-auto mb-16 py-5">
                    <IoSettingsOutline className="w-7 h-7 text-blue-700" />
                    Settings
                </li>
            </ul>
        </div>
    );
}

export default SideBar;
