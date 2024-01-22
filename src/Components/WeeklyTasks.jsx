import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./WeeklyTasks.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
export default function WeeklyTasks() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "weeklyTasks"));

      const dmc = sp.docs.map((doc) => doc.data());
      setValue(dmc);
    }
    getData();
  }, [value]);
  return (
    <Card className="weeklyTasks">
      <h3>WeeklyTasks</h3>
      <ul className="weekly-tasks-list">
        {value.length === 0 && <li>Add Tasks to be done</li>}
        {value.map((weekly) => (
          <li key={weekly.id}>
            <input type="checkbox" id={weekly.id} className="rounded-checkbox" />
            <label htmlFor={weekly.id}>{weekly.tasks}</label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
