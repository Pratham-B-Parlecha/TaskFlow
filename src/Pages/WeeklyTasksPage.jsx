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
  const [weeklyTasksDone, setWeeklyTasksDone] = useState(
    JSON.parse(localStorage.getItem("weeklyTasksValue")) || {}
  );

  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "weeklyTasks"));

      const dmc = sp.docs.map((doc) => doc.data());

      setValue(dmc);
    }
    getData();
  }, []);
  useEffect(() => {
    localStorage.setItem("weeklyTasksValue", JSON.stringify(weeklyTasksDone));
  }, [weeklyTasksDone]);

  async function getData() {
    const sp = await getDocs(collection(db, "weeklyTasks"));

    const dmc = sp.docs.map((doc) => doc.data());
    setValue(dmc);
  }
  async function submitHandler(event) {
    event.preventDefault();
    const id = uuid();
    if (inputRef.current.value === "") {
      return;
    }
    await setDoc(doc(db, "weeklyTasks", id), {
      id: id,
      tasks: inputRef.current.value,
    });
    getData();
    inputRef.current.value = "";
  }
  async function deleteHandler(id) {
    await deleteDoc(doc(db, "weeklyTasks", id));
    getData();
  }
  return (
    <div className="weeklyTasksPage">
      <form onSubmit={submitHandler} className="weeklyTask">
        <input type="text" name="weeklytasks" ref={inputRef} placeholder="Add Your WeeklyTasks" />
        <button type="button" onClick={submitHandler}>
          Add
        </button>
      </form>
      <ul className="weekly">
        {value.map((weekly) => (
          <li key={weekly.id}>
            <span
              style={{
                textDecoration:
                  weeklyTasksDone[weekly.id] === true ? "line-through" : "",
              }}
            >
              {weekly.tasks}
            </span>
            <button onClick={() => deleteHandler(weekly.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
