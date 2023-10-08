"use client";
import React, { useEffect, useState } from "react";
import { IColumn } from "@/app/page";
import CardItem, { PriorityType } from "./CardItem";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { DragDropContext, Draggable, DropResult, Droppable, resetServerContext } from "react-beautiful-dnd";
import dataJson from "../../json/db.json";

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

const Drag = () => {
    const [data, setdata] = useState<IColumn[]>(dataJson);

    /* useEffect(() => {
        setdata(dataJson);
    }, []); */

    function handleDragEnd(e: DropResult) {
        console.log("e: ", e);
        const { source, destination } = e;
        if (source.droppableId === destination?.droppableId) {
          
        }
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="Board-Content flex m-4 flex-row gap-4">
                {data.map((column, idx) => (
                    <Droppable key={idx} droppableId={`${column.name}`}>
                        {(provided) => (
                            <div className="w-full">
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`Column ${bgColorColumn[column.order]}
                                     flex flex-col max-h-[700px] rounded-sm shadow-md`}>
                                    <h4
                                        className={`${bgColorTitle[column.order]}
                                        flex items-center justify-between p-2 text-black`}>
                                        {column.name}
                                        <BiDotsVerticalRounded />
                                    </h4>
                                    <div className="List-Tasks flex flex-col gap-4 overflow-y-auto p-2">
                                        {column.items.map((item, idx) => {
                                            return <CardItem key={idx} task={item} />;
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};

export default Drag;
