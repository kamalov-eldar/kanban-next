import React from "react";
import { FcSearch } from "react-icons/fc";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";

function TopBar() {
    return (
        <div className="TopBar h-16 pl-20 flex items-center justify-between fixed w-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="flex items-center px-5 ">
                <FcSearch className="w-7 h-7" />
                <input
                    className="bg-transparent border-0 border-b border-b-gray-400 text-white placeholder-gray-400 outline-none focus:ring-0 focus:border-white"
                    placeholder="Search for tasks"
                    type="text"
                />
            </div>
            <div className="flex space-x-5">
                <FaRegBell className="w-7 h-7" />
                <div className="User flex items-center whitespace-nowrap space-x-4">
                    <h3>Mr. User</h3>
                    <Image
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        width="32"
                        height="32"
                        alt={"img"}
                        className="object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default TopBar;
