import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import DailyTasksPage, {
  action as dailyTasksAction,
  loader as dailyTasksLoader,
} from "./Pages/DailyTasksPage";
import WeeklyTasksPage, {
  action as weeklyTasksAction,
  loader as weeklyTasksLoader,
} from "./Pages/WeeklyTasksPage";
import ProjectPage, {
  action as projectAction,
  loader as projectLoader,
} from "./Pages/ProjectPage";
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
      {
        path: "/dailyTasks",
        element: <DailyTasksPage />,
        action: dailyTasksAction,
        loader: dailyTasksLoader,
      },
      {
        path: "/weeklyTasks",
        element: <WeeklyTasksPage />,
        action: weeklyTasksAction,
        loader: weeklyTasksLoader,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
        action: projectAction,
        loader: projectLoader,
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
