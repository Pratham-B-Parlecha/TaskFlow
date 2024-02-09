import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Project.scss";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function Projects() {
  const [value, setValue] = useState([]);
  const [projectTaskDone, setProjectTasksDone] = useState(
    JSON.parse(localStorage.getItem("projectTasksDone")) || {}
  );
  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "projects"));

      const dmc = sp.docs.map((doc) => doc.data());
      setValue(dmc);
    }
    getData();
  }, []);
  useEffect(() => {
    localStorage.setItem("projectTasksDone", JSON.stringify(projectTaskDone));
    if (value.length === 0) {
      localStorage.setItem("projectTasksDone", JSON.stringify({}));
      return;
    }
  }, [projectTaskDone, value]);

  async function getData() {
    const sp = await getDocs(collection(db, "projects"));

    const dmc = sp.docs.map((doc) => doc.data());
    setValue(dmc);
  }
  async function deleteHandler(id) {
    await deleteDoc(doc(db, "projects", id));
    getData();
  }
  function handleDoneTask(id) {
    console.log(id);
    if (value.length === 0) {
      setProjectTasksDone({});
    }
    setProjectTasksDone((prev) => ({
      ...prev,
      [id]: true,
    }));
  }
  return (
    <Card className="projects">
      <h3>Projects</h3>
      <ul className="project-list">
        {value.length === 0 && <li>Add Tasks to be done</li>}
        {value.map((project) => (
          <li key={project.id}>
            <span
              style={{
                textDecoration:
                  projectTaskDone[project.id] === true ? "line-through" : "",
              }}
            >
              {project.tasks}
            </span>
            <div className="actions-button">
              <button onClick={() => deleteHandler(project.id)}>x</button>
              <button
                className="done"
                onClick={() => handleDoneTask(project.id)}
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
