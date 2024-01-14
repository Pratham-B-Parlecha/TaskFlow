import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import DailyTasksPage, {action as dailyTasksAction} from "./Pages/DailyTasksPage";
import WeeklyTasksPage, {action as weeklyTasksAction} from "./Pages/WeeklyTasksPage";
import ProjectPage, {action as projectAction} from "./Pages/ProjectPage";
import SettingPage from "./Pages/SettingPage";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/dailyTasks", element: <DailyTasksPage />, action: dailyTasksAction },
      { path: "/weeklyTasks", element: <WeeklyTasksPage />, action: weeklyTasksAction },
      { path: "/projects", element: <ProjectPage />, action: projectAction },
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
