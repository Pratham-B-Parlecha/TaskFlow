import React from "react";
import Card from "./Card";
import "./WeeklyTasks.scss";
import useHttp from "../Hooks/use-http";

export default function WeeklyTasks() {
  const { data, error, isLoading } = useHttp(
    "https://dashboard-24a01-default-rtdb.firebaseio.com/weeklyTasks.json"
  );
  return (
    <Card className="weeklyTasks">
      <h3>WeeklyTasks</h3>
      {error && <h1>{error}</h1>}
      <ul className="weekly-tasks-list">
        {data.length === 0 && <li>Add Tasks to be done</li>}
        {data.map((weekly) => (
          <li key={Math.random() * 100}>
            <input type="checkbox" className="rounded-checkbox" />
            <label>{weekly}</label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
