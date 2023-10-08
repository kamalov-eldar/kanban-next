"use client";
import React, { useEffect, useState } from "react";
import { IColumn } from "@/app/page";
import CardItem, { PriorityType } from "./CardItem";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { DragDropContext, Draggable, DropResult, Droppable, resetServerContext } from "react-beautiful-dnd";
import dataJson from "../../json/db.json";
import { v4 as uuid } from "uuid";
import { DndContext } from "@/context/DndContext";

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

const BoardContent = () => {
    const [data, setdata] = useState<IColumn[]>([]);

    useEffect(() => {
        setdata(dataJson);
    }, []);

    function handleDragEnd(e: DropResult) {
        const { source, destination } = e;
        if (!destination) return;
        let newData = [...data];
        const columnIdx = Number(source.droppableId); // columnId
        const columnPushIdx = Number(destination.droppableId); // columnId push
        const taskIdx = Number(source.index); // index task in array columns
        const taskPushIdx = Number(destination.index); // index task in array push columns
        const dragItem = newData[columnIdx].items[taskIdx];
        newData[columnIdx].items.splice(taskIdx, 1);
        newData[columnPushIdx].items.splice(taskPushIdx, 0, dragItem);
        setdata(newData);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="Board-Content flex m-4 flex-row gap-4">
                {data.map((column, idx) => (
                    <div key={column.name} className="w-full">
                        <Droppable key={idx} droppableId={`${idx}`}>
                            {(provided, snapshot) => {
                                const highlight = {
                                    bg: snapshot.isDraggingOver ? "bg-green-50" : bgColorColumn[column.order],
                                    shadow: snapshot.isDraggingOver ? "shadow-2xl" : "shadow-md",
                                };
                                return (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`Column flex flex-col max-h-[700px] min-w-[180px] rounded-sm
                                        ${highlight.bg} ${highlight.shadow}
                                        `}>
                                        <h4
                                            className={`${bgColorTitle[column.order]}
                                        flex items-center justify-between p-2 text-black`}>
                                            {column.name}
                                            <BiDotsVerticalRounded />
                                        </h4>
                                        <div className="List-Tasks flex flex-col gap-4 overflow-y-auto p-2">
                                            {column.items.map((item, idx) => {
                                                return <CardItem index={idx} key={item.id} task={item} />;
                                            })}
                                            {provided.placeholder}
                                        </div>
                                    </div>
                                );
                            }}
                        </Droppable>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

export default BoardContent;
