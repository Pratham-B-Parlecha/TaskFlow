import React, { useEffect, useState } from "react";
import "./DailyTasksPage.scss";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function DailyTasksPage() {
  const [dailyData, setDailyData] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if (data) {
      const arrayData = Object.values(data);
      setDailyData(arrayData);
    }
  }, [data]);
  console.log(dailyData);

  function deleteItemHandler(itemId) {
    const apiUrl = `https://dashboard-24a01-default-rtdb.firebaseio.com/dailyTasks/${itemId}.json`;

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
    <div className="dailyTasksPage">
      <Form method="post" className="dailyTask">
        <input type="text" name="dailytasks" />
        <button>Add</button>
      </Form>
      <ul className="daily">
        {dailyData.map((daily) => (
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

  const dailyData = { id: uuid(), tasks: data.get("dailytasks") };
  const response = await fetch(
    "https://dashboard-24a01-default-rtdb.firebaseio.com/dailyTasks.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dailyData),
    }
  );
  return redirect("/dailyTasks");
}

export async function loader() {
  const response = await fetch(
    "https://dashboard-24a01-default-rtdb.firebaseio.com/dailyTasks.json"
  );

  if (!response.ok) {
    throw json({ message: "could not load data" });
  }
  return response;
}
