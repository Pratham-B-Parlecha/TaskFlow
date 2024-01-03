import React from "react";
import "./SideBar.scss";
import { SlGrid } from "react-icons/sl";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h1>Task Manager</h1>
      </div>
      <button className="sidebar-icon">
        <SlGrid />
        <span>Home</span>
      </button>
      <button className="sidebar-icon">
        <SlGrid />
        <span>Project</span>
      </button>
      <button className="sidebar-icon">
        <SlGrid />
        <span>weekly Task</span>
      </button>
      <button className="sidebar-icon">
        <SlGrid />
        <span>Daily Task</span>
      </button>
      <button className="sidebar-icon">
        <SlGrid />
        <span>Setting</span>
      </button>
    </div>
  );
}
