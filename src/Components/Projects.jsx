import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Project.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function Projects() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "projects"));

      const dmc = sp.docs.map((doc) => doc.data());
      setValue(dmc);
    }
    getData();
  }, []);
  return (
    <Card className="projects">
      <h3>Projects</h3>
      <ul className="project-list">
        {value.length === 0 && <li>Add Tasks to be done</li>}
        {value.map((project) => (
          <li key={project.id}>
            <input
              type="checkbox"
              id={project.id}
              className="rounded-checkbox"
            />
            <label htmlFor={project.id}>{project.tasks}</label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
