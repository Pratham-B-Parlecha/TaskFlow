import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./DailyTasks.scss";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function DailyTasks() {
  const [value, setValue] = useState([]);
  const [dailyTasksDone, setDailyTasksDone] = useState(
    JSON.parse(localStorage.getItem("dailyTasksValue")) || {}
  );

  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "dailyTasks"));
      const dmc = sp.docs.map((doc) => doc.data());
      setValue(dmc);
    }
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("dailyTasksValue", JSON.stringify(dailyTasksDone));
  }, [dailyTasksDone]);

  async function getData() {
    const sp = await getDocs(collection(db, "dailyTasks"));
    const dmc = sp.docs.map((doc) => doc.data());
    setValue(dmc);
  }

  async function deleteHandler(id) {
    await deleteDoc(doc(db, "dailyTasks", id));
    getData();
    if (dailyTasksDone[id]) {
      const updatedTasks = { ...dailyTasksDone };
      delete updatedTasks[id];
      setDailyTasksDone(updatedTasks);
    }
  }

  function handleDoneTask(id) {
    setDailyTasksDone((prev) => ({
      ...prev,
      [id]: true,
    }));
  }

  return (
    <Card className="dailyTasks">
      <h3>DailyTasks</h3>
      <ul className="dialy-tasks-list">
        {value.length === 0 && <li>Add Tasks to be done</li>}
        {value.map((daily) => (
          <li key={daily.id}>
            <span
              style={{
                textDecoration:
                  dailyTasksDone[daily.id] === true ? "line-through" : "",
              }}
            >
              {daily.tasks}
            </span>
            <div className="actions-button">
              <button onClick={() => deleteHandler(daily.id)}>x</button>
              <button className="done" onClick={() => handleDoneTask(daily.id)}>
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
