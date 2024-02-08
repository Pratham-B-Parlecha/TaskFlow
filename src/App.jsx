import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import DailyTasksPage from "./Pages/DailyTasksPage";
import WeeklyTasksPage from "./Pages/WeeklyTasksPage";
import ProjectPage from "./Pages/ProjectPage";
import SettingPage from "./Pages/SettingPage";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";

let len1; let len2;let len3;
function ArrayLength1(arr) {
  len1 = arr.length
  console.log(len1)
}
function ArrayLength2(arr) {
  len2 = arr.length
  console.log(len2)
}
function ArrayLength3(arr) {
  len3 = arr.length
}

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/dailyTasks",
        element: <DailyTasksPage arrLen1={ArrayLength1} />,
      },
      {
        path: "/weeklyTasks",
        element: <WeeklyTasksPage arrLen2={ArrayLength2} />,
      },
      {
        path: "/projects",
        element: <ProjectPage arrLen3={ArrayLength3} />,
      },
      { path: "/setting", element: <SettingPage /> },
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
