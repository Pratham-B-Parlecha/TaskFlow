import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import DailyTasksPage from "./Pages/DailyTasksPage";
import WeeklyTasksPage from "./Pages/WeeklyTasksPage";
import ProjectPage from "./Pages/ProjectPage";
import SettingPage from "./Pages/SettingPage";



const route = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/dailyTasks", element: <DailyTasksPage />},
  {path: "/weeklyTasks", element: <WeeklyTasksPage />},
  {path: "/projects", element: <ProjectPage />},
  {path: "/setting", element: <SettingPage />}
])


function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;