import React from "react";
import "./SideBar.scss";
import { CiGrid41 } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { GrTask } from "react-icons/gr";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h1>Task Manager</h1>
      </div>
      <button className="sidebar-icon">
        <CiGrid41 />
        <span>Home</span>
      </button>
      <button className="sidebar-icon">
        <IoBriefcaseOutline />
        <span>Project</span>
      </button>
      <button className="sidebar-icon">
        <GrTask />
        <span>weekly Task</span>
      </button>
      <button className="sidebar-icon">
        <BsListTask />
        <span>Daily Task</span>
      </button>
      <button className="sidebar-icon">
        <CiSettings />
        <span>Setting</span>
      </button>
    </div>
  );
}
