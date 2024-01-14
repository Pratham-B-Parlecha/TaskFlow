import React from "react";
import { Form, redirect } from "react-router-dom";

export default function DailyTasksPage() {
  return (
    <>
      <Form method="post" className="dailyTasksPage">
        <input type="text" name="dailytasks" />
        <button>Add</button>
      </Form>
    </>
  );
}

export async function action({request, params}) {
  const data = await request.formData();
  const dailyData = {daily: data.get('dailytasks')} 
  const response = await fetch("https://dashboard-24a01-default-rtdb.firebaseio.com/dailyTasks.json",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dailyData)
  })
  return redirect("/dailyTasks");
}