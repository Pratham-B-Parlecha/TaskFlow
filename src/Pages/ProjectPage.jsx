import React, { useEffect, useRef, useState } from "react";
import "./ProjectPage.scss";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../Firebase";

export default function ProjectPage() {
  const [value, setValue] = useState([]);
  const inputRef = useRef();
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
  }, [projectTaskDone]);
  async function getData() {
    const sp = await getDocs(collection(db, "projects"));

    const dmc = sp.docs.map((doc) => doc.data());
    setValue(dmc);
  }
  async function submitHandler(event) {
    event.preventDefault();
    const id = uuid();
    if (inputRef.current.value === "") {
      return;
    }
    await setDoc(doc(db, "projects", id), {
      id: id,
      tasks: inputRef.current.value,
    });
    getData();
    inputRef.current.value = "";
  }

  async function deleteHandler(id) {
    await deleteDoc(doc(db, "projects", id));
    getData();
  }

  return (
    <div className="projectPage">
      <form onSubmit={submitHandler} className="project">
        <input type="text" name="project" ref={inputRef} placeholder="Add Your Projects" />
        <button type="button" onClick={submitHandler}>
          Add
        </button>
      </form>
      <ul className="projectList">
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
            <button onClick={() => deleteHandler(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
