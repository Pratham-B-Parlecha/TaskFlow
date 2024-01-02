import React from "react";
import Card from "../UI/Card";
import "./DailyTasks.scss";

export default function DailyTaks() {
  return (
    <Card className="daily-tasks">
      <ul className="daily-task-list">
        <li>
          <input
            type="checkbox"
            id="input-checkbox"
            className="rounded-checkbox"
          />
          <label htmlFor="input-checkbox">To do react</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="input-checkbox"
            className="rounded-checkbox"
          />
          <label htmlFor="input-checkbox">To do react</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="input-checkbox"
            className="rounded-checkbox"
          />
          <label htmlFor="input-checkbox">To do react</label>
        </li>
      </ul>
    </Card>
  );
}
