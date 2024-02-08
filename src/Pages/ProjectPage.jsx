import React, { useEffect, useRef, useState } from "react";
import "./ProjectPage.scss";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../Firebase";


export default function ProjectPage() {
  const [value, setValue] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "projects"));

      const dmc = sp.docs.map((doc) => doc.data());
      setValue(dmc);
    }
    getData();
  }, []);
  async function getData() {
    const sp = await getDocs(collection(db, "projects"));

    const dmc = sp.docs.map((doc) => doc.data());
    setValue(dmc);
  }
  async function submitHandler() {
    const id = uuid();
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
        <input type="text" name="project" ref={inputRef} />
        <button type="button" onClick={submitHandler}>
          Add
        </button>
      </form>
      <ul className="projectList">
        {value.map((daily) => (
          <li key={daily.id}>
            <span>{daily.tasks}</span>
            <button onClick={() => deleteHandler(daily.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
