import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { GrTask } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  function homePageHandler() {
    navigate("/");
  }
  function changePageHandler(value) {
    navigate(`/${value}`);
  }
  return (
    <aside className="sidebar-container">
      <div className="sidebar-logo">
        <h1>Task Manager</h1>
      </div>
      <button className="sidebar-icon" onClick={homePageHandler}>
        <CiGrid41 />
        <span>Home</span>
      </button>
      <button
        className="sidebar-icon"
        onClick={() => changePageHandler("projects")}
      >
        <IoBriefcaseOutline />
        <span>Project</span>
      </button>
      <button
        className="sidebar-icon"
        onClick={() => changePageHandler("weeklyTasks")}
      >
        <GrTask />
        <span>weekly Task</span>
      </button>
      <button
        className="sidebar-icon"
        onClick={() => changePageHandler("dailyTasks")}
      >
        <BsListTask />
        <span>Daily Task</span>
      </button>
      <button
        className="sidebar-icon"
        onClick={() => changePageHandler("setting")}
      >
        <CiSettings />
        <span>Setting</span>
      </button>
    </aside>
  );
}
