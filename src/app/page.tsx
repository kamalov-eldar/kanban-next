import Layout from "@/components/Layout";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import CardItem from "@/components/CardItem";

import data from "../../json/db.json";

export default function Home() {
    return (
        <Layout>
            <div className="Board-Header p-10">
                <div className=" flex justify-between space-x-2 ">
                    <div className="flex items-center space-x-2">
                        <h4 className="text-4xl whitespace-nowrap font-bold text-gray-600">Studio Board</h4>
                        <BiChevronDown
                            className="w-8 h-8 rounded-full text-gray-500
                     bg-white cursor-pointer shadow-xl"></BiChevronDown>
                    </div>
                    <ul className="flex space-x-3 ">
                        <li className="min-w-max flex items-center">
                            <Image
                                src="https://randomuser.me/api/portraits/men/75.jpg"
                                width="32"
                                height="32"
                                alt={"img"}
                                className="object-cover rounded-full"
                            />
                        </li>
                        <li className="min-w-max flex items-center">
                            <Image
                                src="https://randomuser.me/api/portraits/men/76.jpg"
                                width="32"
                                height="32"
                                alt={"img"}
                                className="object-cover rounded-full"
                            />
                        </li>
                        <li className="min-w-max flex items-center">
                            <Image
                                src="https://randomuser.me/api/portraits/men/78.jpg"
                                width="32"
                                height="32"
                                alt={"img"}
                                className="object-cover rounded-full"
                            />
                        </li>
                        <li className="flex items-center">
                            <button
                                className="border border-dashed border-sky-500
                             text-gray-500 rounded-full">
                                <AiOutlinePlus className="w-5 h-5"></AiOutlinePlus>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Board-Columns flex m-4 flex-row gap-4">
                {data.map((column, idx) => {
                    return (
                        <div key={idx} className="basis-1/3 flex flex-col gap-4 rounded-sm shadow-md bg-pink-500 p-4 ">
                            <h4 className="flex items-center justify-between mb-5">
                                {column.name}
                                <BiDotsVerticalRounded />
                            </h4>
                            {column.items.map((item, idx) => {
                                return <CardItem key={idx} task={item} />;
                            })}
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
}
