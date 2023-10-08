"use client"; // 👈 use it here

import React, { FC } from "react";
import { VscCommentDiscussion } from "react-icons/vsc";
import { FcImageFile } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";

export interface ICardItem {
    id: number;
    priority: number;
    title: string;
    chat: number;
    attachment: number;
    assignees: Assignee[];
}

export interface Assignee {
    avt: string;
}

type CardItemProps = {
    task: ICardItem;
};

export type PriorityType = {
    [key: number]: string;
};

const priority: PriorityType = {
    [0]: "LOW",
    [1]: "MEDIUM",
    [2]: "HIGH",
};

const colorPriority: PriorityType = {
    [0]: "from-blue-500 to-blue-200",
    [1]: "from-purple-500 to-purple-200",
    [2]: "from-red-500 to-red-200",
};

function CardItem({ task }: CardItemProps) {
    return (
        <Draggable index={task.id} draggableId={`taskId-${task.id}`}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="Card-Item bg-white p-4 rounded-sm text-black space-y-4">
                    <span
                        className={`${colorPriority[task.priority]}
                                        flex w-min rounded-sm bg-gradient-to-r
                                        text-white whitespace-nowrap p-1 px-4`}>
                        {priority[task.priority]}
                    </span>
                    <div className="Card-Description text-black font-bold">{task.title}</div>
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-5">
                            <div className="flex items-center">
                                <VscCommentDiscussion className="text-black w-5 h-5" />
                                <span className="font-semibold">{task.chat}</span>
                            </div>
                            <div className="flex items-center">
                                <FcImageFile className="w-5 h-5" />
                                <span className="font-semibold">{task.attachment}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1">
                            {task.assignees.map((item, idx) => {
                                return (
                                    <div key={idx}>
                                        <Image src={item.avt} width="22" height="22" alt={"img"} className=" rounded-full" />
                                    </div>
                                );
                            })}
                            <button className="border border-dashed border-sky-500 text-gray-500 rounded-full">
                                <AiOutlinePlus className="w-5 h-5"></AiOutlinePlus>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
}

export default CardItem;
