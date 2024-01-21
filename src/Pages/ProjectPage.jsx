import React, { useEffect, useState } from "react";
import "./ProjectPage.scss";

export default function ProjectPage() {
  return (
    <div className="projectPage">
      <form className="project">
        <input type="text" name="project" />
        <button>Add</button>
      </form>
    </div>
  );
}
