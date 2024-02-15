import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import DailyTasksPage from "./Pages/DailyTasksPage";
import WeeklyTasksPage from "./Pages/WeeklyTasksPage";
import ProjectPage from "./Pages/ProjectPage";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/dailyTasks",
        element: <DailyTasksPage />,
      },
      {
        path: "/weeklyTasks",
        element: <WeeklyTasksPage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="mainContainer">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
