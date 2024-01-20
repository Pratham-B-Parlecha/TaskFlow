import React, { useEffect, useState } from "react";
import "./WeeklyTasksPage.scss";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function WeeklyTasksPage() {
  const [weeklyData, setWeeklyData] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if (data) {
      const arrayData = Object.values(data);
      setWeeklyData(arrayData);
    }
  }, [data]);

  console.log(weeklyData);

  function deleteItemHandler(itemId) {
    const apiUrl = `https://dashboard-24a01-default-rtdb.firebaseio.com/weeklyTasks/${itemId}.json`;

    fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete data");
        }
        // If deletion is successful, update the local state to remove the deleted item
        setDailyData((prevData) =>
          prevData.filter((daily) => daily.id !== itemId)
        );
      })
      .catch((error) => {
        console.error(error);
        // Handle error as needed (e.g., show an error message to the user)
      });
  }

  return (
    <div className="weeklyTasksPage">
      <Form method="post" className="weeklyTask">
        <input type="text" name="weeklytasks" />
        <button>Add</button>
      </Form>
      <ul className="weekly">
        {weeklyData.map((daily) => (
          <li key={daily.id}>
            <span>{daily.tasks}</span>
            <button onClick={() => deleteItemHandler(daily.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();
  const weeklydata = {id: uuid() , tasks:data.get("weeklytasks")};
  const response = await fetch(
    "https://dashboard-24a01-default-rtdb.firebaseio.com/weeklyTasks.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(weeklydata),
    }
  );
  return redirect("/weeklyTasks");
}

export async function loader() {
  const response = await fetch(
    "https://dashboard-24a01-default-rtdb.firebaseio.com/weeklyTasks.json"
  );

  if (!response.ok) {
    throw json({ message: "could not load data" });
  }
  return response;
}
