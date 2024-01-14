import React from "react";
import { Form, redirect } from "react-router-dom";

export default function ProjectPage() {
  return (
    <>
      <Form className="projectPage">
        <input type="text" name="project" />
        <button>Add</button>
      </Form>
    </>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();
  const projectdata = { project: data.get("project") };
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
