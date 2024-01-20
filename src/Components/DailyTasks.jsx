import React from "react";
import Card from "./Card";
import "./DailyTasks.scss";
import useHttp from "../Hooks/use-http";

export default function DailyTasks() {
  const { data, error, isLoading } = useHttp(
    "https://dashboard-24a01-default-rtdb.firebaseio.com/dailyTasks.json"
  );
  return (
    <Card className="dailyTasks">
      <h3>DailyTasks</h3>
      {error && <h1>{error}</h1>}
      <ul className="dialy-tasks-list">
        {data.length === 0 && <li>Add Tasks to be done</li>}
        {data.map((daily) => (
          <li key={Math.random() * 100}>
            <input type="checkbox" className="rounded-checkbox" />
            <label>{daily.tasks}</label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
