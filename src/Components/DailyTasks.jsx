import React from "react";
import Card from "./Card";

export default function DailyTasks() {
  return (
    <Card className="dailyTasks">
      <h3>DailyTasks</h3>
      <ul className="dialy-tasks-list">
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
