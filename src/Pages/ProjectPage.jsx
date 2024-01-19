import React, { useEffect, useState } from "react";
import './ProjectPage.scss'
import { Form, json, redirect, useLoaderData } from "react-router-dom";

export default function ProjectPage() {
  const [projectData, setProjectData] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if(data){
      const arrayData = Object.values(data);
      setProjectData(arrayData);
    }
  },[data]);

  console.log(projectData)
  return (
    <div className="projectPage">
      <Form method="post" className="project">
        <input type="text" name="project" />
        <button>Add</button>
      </Form>
      <ul className="projectList">
        {projectData.map(daily => <li key={Math.random() * 100}>{daily}</li>)}
      </ul>
    </div>
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