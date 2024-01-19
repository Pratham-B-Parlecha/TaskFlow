import React from "react";
import './SideBar.scss';
import { CiGrid41 } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { GrTask } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function SideBar() {
  
  return (
    <aside className="sidebar-container">
      <div className="sidebar-logo">
        <h1>Task Manager</h1>
      </div>
      <Link to="/"className="sidebar-icon">
        <CiGrid41 />
        <span>Home</span>
      </Link>
      <Link to="/projects"
        className="sidebar-icon"
      >
        <IoBriefcaseOutline />
        <span>Project</span>
      </Link>
      <Link to="/weeklyTasks"
        className="sidebar-icon"
      >
        <GrTask />
        <span>Weekly Task</span>
      </Link>
      <Link to="/dailyTasks"
        className="sidebar-icon"
      >
        <BsListTask />
        <span>Daily Task</span>
      </Link>
      <Link to="/setting"
        className="sidebar-icon"
      >
        <CiSettings />
        <span>Setting</span>
      </Link>
    </aside>
  );
}
