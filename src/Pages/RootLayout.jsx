import React from "react";
import SideBar from "../Components/SideBar";
import { Outlet, Link } from "react-router-dom";


export default function RootLayout() {
  return (
    <>
        <SideBar />
        <Outlet />
    </>
  );
}
