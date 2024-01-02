import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import "./SideBar.scss";
import Button from "../UI/Button";

export default function SideBar() {
  return (
    <aside className="side-bar">
      <div className="sidebar-logo">
        <h1>Task Manager</h1>
      </div>
      <Button icon={<CiGrid41 />} label="Home" className="sidebar-icons" />
      <Button icon={<IoBriefcaseOutline />} label="Projects" className="sidebar-icons" />
      <Button icon={<BsListTask />} label="Daily Tasks" className="sidebar-icons" />
      <Button icon={<SlCalender />} label="Weekly Tasks" className="sidebar-icons" />
      <Button icon={<CiSettings />} label="Setting" className="sidebar-icons" />
    </aside>
  );
}
