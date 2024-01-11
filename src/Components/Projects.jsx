import React from "react";
import Card from "./Card";

export default function Projects() {
  return (
    <Card className="projects">
      <h3>Projects</h3>
      <ul className="project-list">
        <li>
          <input type="checkbox" className="rounded-checkbox" />
          <label>dashboard</label>
        </li>
        <li>
          <input type="checkbox" className="rounded-checkbox" />
          <label>portfolio</label>
        </li>
        <li>
          <input type="checkbox" className="rounded-checkbox" />
          <label>ecommerce</label>
        </li>
      </ul>
    </Card>
  );
}
