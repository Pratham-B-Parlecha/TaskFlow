import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./WeeklyTasks.scss";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function WeeklyTasks() {
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
  async function deleteHandler(id) {
    await deleteDoc(doc(db, "weeklyTasks", id));
    getData();
    if (weeklyTasksDone[id]) {
      const updatedTasks = { ...weeklyTasksDone };
      delete updatedTasks[id];
      setWeeklyTasksDone(updatedTasks);
    }
  }
  function handleDoneTask(id) {
    console.log(id);
    if (value.length === 0) {
      setWeeklyTasksDone({});
    }
    setWeeklyTasksDone((prev) => ({
      ...prev,
      [id]: true,
    }));
  }
  return (
    <Card className="weeklyTasks">
      <h3>WeeklyTasks</h3>
      <ul className="weekly-tasks-list">
        {value.length === 0 && <li>Add Tasks to be done</li>}
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
            <div className="actions-button">
              <button onClick={() => deleteHandler(weekly.id)}>x</button>
              <button
                className="done"
                onClick={() => handleDoneTask(weekly.id)}
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
