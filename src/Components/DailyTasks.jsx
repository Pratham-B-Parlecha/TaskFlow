import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./DailyTasks.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function DailyTasks() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    async function getData() {
      const sp = await getDocs(collection(db, "dailyTasks"));

      const dmc = sp.docs.map((doc) => doc.data());
      setValue(dmc);
    }
    getData();
  }, []);
  return (
    <Card className="dailyTasks">
      <h3>DailyTasks</h3>
      <ul className="dialy-tasks-list">
        {value.length === 0 && <li>Add Tasks to be done</li>}
        {value.map((daily) => (
          <li key={daily.id}>
            <input type="checkbox" id={daily.id} className="rounded-checkbox" />
            <label htmlFor={daily.id}>{daily.tasks}</label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
