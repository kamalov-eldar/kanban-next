"use client"; // 👈 use it here
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import CardItem, { PriorityType } from "@/components/CardItem";
import { DragDropContext, Draggable, Droppable, resetServerContext } from "react-beautiful-dnd";


import Drag from "@/components/Drag";

export interface IColumn {
    id: number;
    name: string;
    order: number;
    items: {
        id: number;
        priority: number;
        title: string;
        chat: number;
        attachment: number;
        assignees: {
            avt: string;
        }[];
    }[];
}

const bgColorColumn: PriorityType = {
    [0]: "bg-slate-100",
    [1]: "bg-indigo-100",
    [2]: "bg-sky-100",
    [3]: "bg-orange-100",
    [4]: "bg-green-100",
};
const bgColorTitle: PriorityType = {
    [0]: "bg-slate-200",
    [1]: "bg-indigo-200",
    [2]: "bg-sky-200",
    [3]: "bg-orange-200",
    [4]: "bg-green-300",
};

export default function Home() {
    /*  const [ready, setReady] = useState(false);
    useEffect(() => {
        if (window !== undefined && window !== null && typeof window !== "undefined") {
            setReady(true);
        }
    }, []); */

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
                                className="rounded-full"
                            />
                        </li>
                        <li className="min-w-max flex items-center">
                            <Image
                                src="https://randomuser.me/api/portraits/men/76.jpg"
                                width="32"
                                height="32"
                                alt={"img"}
                                className=" rounded-full"
                            />
                        </li>
                        <li className="min-w-max flex items-center">
                            <Image
                                src="https://randomuser.me/api/portraits/men/78.jpg"
                                width="32"
                                height="32"
                                alt={"img"}
                                className=" rounded-full"
                            />
                        </li>
                        <li className="flex items-center">
                            <button className="border border-dashed border-sky-500 text-gray-500 rounded-full">
                                <AiOutlinePlus className="w-5 h-5"></AiOutlinePlus>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <Drag></Drag>
            {/*  {"ready" && (
                <DragDropContext
                    onDragEnd={() => {
                        console.log("onDragEnd");
                    }}>
                    <div className="Board-Content flex m-4 flex-row gap-4">
                        {data.map((column, idx) => {
                            return (
                                <div key={idx} className="w-full">
                                    <Droppable droppableId={column.name}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                className={`Column ${
                                                    bgColorColumn[column.order]
                                                } flex flex-col max-h-[700px] rounded-sm shadow-md`}>
                                                <h4
                                                    className={`${
                                                        bgColorTitle[column.order]
                                                    } flex items-center justify-between p-2 text-black`}>
                                                    {column.name}
                                                    <BiDotsVerticalRounded />
                                                </h4>
                                                <div className="List-Tasks flex flex-col gap-4 overflow-y-auto p-2">
                                                    {column.items.map((item, idx) => {
                                                        return <CardItem key={idx} task={item} />;
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                            );
                        })}
                    </div>
                </DragDropContext>
            )} */}
        </Layout>
    );
}
