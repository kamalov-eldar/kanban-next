import React, { ReactElement, ReactNode } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

type Props = {
    children?: ReactNode;
    title?: string;
};

function Layout({ children }: Props) {
    return (
        <div className="Layout min-h-screen bg-slate-50">
            <TopBar></TopBar>
            <SideBar></SideBar>
            <main className="pl-20 pt-16">{children}</main>
        </div>
    );
}

export default Layout;
