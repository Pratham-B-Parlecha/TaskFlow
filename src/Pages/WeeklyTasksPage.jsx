import React, { useEffect, useRef, useState } from "react";
import "./WeeklyTasksPage.scss";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../Firebase";

export default function WeeklyTasksPage() {
  const inputRef = useRef();
  const [value, setValue] = useState([]);

  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "weeklyTasks"));

      const dmc = sp.docs.map((doc) => doc.data());
      setValue(dmc);
    }
    getData();
  }, [value]);
  async function submitHandler() {
    const id = uuid()
    await setDoc(doc(db, "weeklyTasks", id), {
      id: id,
      tasks: inputRef.current.value,
    });
    inputRef.current.value = "";
  }
  async function deleteHandler(id) {
    await deleteDoc(doc(db, "weeklyTasks", id));
  }
  return (
    <div className="weeklyTasksPage">
      <form
        onSubmit={submitHandler}
        className="weeklyTask"
      >
        <input type="text" name="weeklytasks" ref={inputRef} />
        <button type="button" onClick={submitHandler}>
          Add
        </button>
      </form>
      <ul className="weekly">
        {value.map((weekly) => (
          <li key={weekly.id}>
            <span>{weekly.tasks}</span>
            <button onClick={() => deleteHandler(weekly.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
