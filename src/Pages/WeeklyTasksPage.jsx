import React, { useEffect, useState } from 'react'
import './WeeklyTasksPage.scss'
import { Form, redirect, useLoaderData } from 'react-router-dom';

export default function WeeklyTasksPage() {
  const [weeklyData, setWeeklyData] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if(data){
      const arrayData = Object.values(data);
      setWeeklyData(arrayData);
    }
  },[data]);

  console.log(weeklyData);
  return (
    <div className='weeklyTasksPage'>
      <Form method='post' className="weeklyTask">
        <input type="text" name="weeklytasks" />
        <button>Add</button>
      </Form>
      <ul className="weekly">
        {weeklyData.map(daily => <li key={Math.random() * 100}>{daily}</li>)}
      </ul>
    </div>
  )
}

export async function action({request, params}) {
  const data = await request.formData();
  const weeklydata = data.get('weeklytasks')
  const response = await fetch("https://dashboard-24a01-default-rtdb.firebaseio.com/weeklyTasks.json",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(weeklydata)
  })
  return redirect("/weeklyTasks");
}

export async function loader() {
  const response = await fetch("https://dashboard-24a01-default-rtdb.firebaseio.com/weeklyTasks.json");

  if(!response.ok){
    throw json({message: "could not load data"});
  }
  return response;
}