import React, { useEffect, useState } from "react";
import "./ProjectPage.scss";
import { Form, json, redirect, useLoaderData } from "react-router-dom";
import { v4 as uuid } from "uuid";
export default function ProjectPage() {
  const [projectData, setProjectData] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if (data) {
      const arrayData = Object.values(data);
      setProjectData(arrayData);
    }
  }, [data]);

  console.log(projectData);

  function deleteItemHandler(itemId) {
    const apiUrl = `https://dashboard-24a01-default-rtdb.firebaseio.com/project/${itemId}.json`;

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
    <div className="projectPage">
      <Form method="post" className="project">
        <input type="text" name="project" />
        <button>Add</button>
      </Form>
      <ul className="projectList">
        {projectData.map((daily) => (
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
  const projectdata = { id: uuid(), tasks: data.get("project") };
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
  const response = await fetch(
    "https://dashboard-24a01-default-rtdb.firebaseio.com/project.json"
  );

  if (!response.ok) {
    throw json({ message: "could not load data" });
  }
  return response;
}
