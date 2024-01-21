import React, { useEffect, useState } from "react";
import "./WeeklyTasksPage.scss";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function WeeklyTasksPage() {
  return (
    <div className="weeklyTasksPage">
      <form className="weeklyTask">
        <input type="text" name="weeklytasks" />
        <button>Add</button>
      </form>
    </div>
  );
}

