import React, { useEffect, useState } from "react";
import './DailyTasksPage.scss'
import { Form, redirect, useLoaderData } from "react-router-dom";

export default function DailyTasksPage() {
  const [dailyData, setDailyData] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if(data){
      const arrayData = Object.values(data);
      setDailyData(arrayData);
    }
  },[data]);
  console.log(dailyData)
  return (
    <div className="dailyTasksPage">
      <Form method="post" className="dailyTask" >
        <input type="text" name="dailytasks" />
        <button>Add</button>
      </Form>
      <ul className="daily">
        {dailyData.map(daily => <li key={Math.random() * 100}>{daily}</li>)}
      </ul>
    </div>
  );
}

export async function action({request, params}) {
  const data = await request.formData();
  const dailyData = data.get('dailytasks')
  const response = await fetch("https://dashboard-24a01-default-rtdb.firebaseio.com/dailyTasks.json",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dailyData)
  })
  return redirect("/dailyTasks");
}

export async function loader() {
  const response = await fetch("https://dashboard-24a01-default-rtdb.firebaseio.com/dailyTasks.json");

  if(!response.ok){
    throw json({message: "could not load data"});
  }
  return response;
}