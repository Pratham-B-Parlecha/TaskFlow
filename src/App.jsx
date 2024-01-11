import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import DailyTasksPage from "./Pages/DailyTasksPage";
import WeeklyTasksPage from "./Pages/WeeklyTasksPage";
import ProjectPage from "./Pages/ProjectPage";
import SettingPage from "./Pages/SettingPage";
import RootLayout from "./Pages/RootLayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/dailyTasks", element: <DailyTasksPage /> },
      { path: "/weeklyTasks", element: <WeeklyTasksPage /> },
      { path: "/projects", element: <ProjectPage /> },
      { path: "/setting", element: <SettingPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="mainContainer">
      <RouterProvider router={route} />;
    </div>
  );
}

export default App;
