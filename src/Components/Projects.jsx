import React from "react";
import Card from "./Card";
import "./Project.scss";
import useHttp from "../Hooks/use-http";

export default function Projects() {
  const { data, error, isLoading } = useHttp(
    "https://dashboard-24a01-default-rtdb.firebaseio.com/project.json"
  );
  return (
    <Card className="projects">
      <h3>Projects</h3>
      {error && <h1>{error}</h1>}
      <ul className="project-list">
        {data.length === 0 && <li>Add Tasks to be done</li>}
        {data.map((project) => (
          <li key={Math.random() * 100}>
            <input type="checkbox" className="rounded-checkbox" />
            <label>{project.tasks}</label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
