import React from 'react'
import { Form, redirect } from 'react-router-dom';

export default function WeeklyTasksPage() {
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
  const weeklydata = {weekly: data.get('weeklytasks')} 
  const response = await fetch("https://dashboard-24a01-default-rtdb.firebaseio.com/weeklyTasks.json",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(weeklydata)
  })
  return redirect("/weeklyTasks");
}