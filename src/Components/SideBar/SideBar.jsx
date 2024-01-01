import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import "./SideBar.scss";

export default function SideBar() {
  return (
    <aside className="side-bar">
      <div className="sidebar-logo">
        <h1>Task Manager</h1>
      </div>
      <button className="sidebar-icons">
        <CiGrid41 />
        <span>Home</span>
      </button>
      <button className="sidebar-icons">
        <IoBriefcaseOutline />
        <span>Projects</span>
      </button>
      <button className="sidebar-icons">
        <BsListTask />
        <span>Daily Tasks</span>
      </button>
      <button className="sidebar-icons">
        <CiGrid41 />
        <span>weekly Tasks</span>
      </button>
      <button className="sidebar-icons">
        <CiSettings />
        <span>Setting</span>
      </button>
    </aside>
  );
}
