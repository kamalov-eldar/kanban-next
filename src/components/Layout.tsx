import React, { ReactElement, ReactNode } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

type Props = {
    children?: ReactNode;
    title?: string;
};

function Layout({ children }: Props) {
    return (
        <div className="min-w-full min-h-screen bg-blue-100 w-40">
            <TopBar></TopBar>
            <SideBar></SideBar>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
