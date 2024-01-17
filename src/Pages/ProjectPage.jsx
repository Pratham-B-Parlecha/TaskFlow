import React from "react";
import { Form, json, redirect, useLoaderData } from "react-router-dom";

export default function ProjectPage() {
  const data = useLoaderData();
  console.log(data ? Object.values(data) : [])
  return (
    <>
      <Form method="post" className="projectPage">
        <input type="text" name="project" />
        <button>Add</button>
      </Form>
    </>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();
  const projectdata = data.get("project");
  const response = await fetch(
    "https://dashboard-24a01-default-rtdb.firebaseio.com/project.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectdata),
    }
  );
  return redirect("/projects");
}


export async function loader() {
  const response = await fetch("https://dashboard-24a01-default-rtdb.firebaseio.com/project.json");

  if(!response.ok){
    throw json({message: "could not load data"});
  }
  return response;
}