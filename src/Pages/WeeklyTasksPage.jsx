import React from 'react'
import { Form, redirect, useLoaderData } from 'react-router-dom';

export default function WeeklyTasksPage() {
  const data = useLoaderData();
  console.log(data ? Object.values(data) : [])
  return (
    <>
      <Form method='post' className="weeklyTasksPage">
        <input type="text" name="weeklytasks" />
        <button>Add</button>
      </Form>
    </>
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