import React from "react";
import Card from "./Card";

export default function WeeklyTasks() {
  return (
    <Card className="weeklyTasks">
      <h3>WeeklyTasks</h3>
      <ul className="weekly-tasks-list">
        <li>
          <input type="checkbox" className="rounded-checkbox" />
          <label>go to study</label>
        </li>
        <li>
          <input type="checkbox" className="rounded-checkbox" />
          <label>go to study</label>
        </li>
        <li>
          <input type="checkbox" className="rounded-checkbox" />
          <label>go to study</label>
        </li>
      </ul>
    </Card>
  );
}
