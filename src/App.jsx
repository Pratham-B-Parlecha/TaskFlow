import "./App.scss";
import Calender from "./Components/Calender/Calender";
import DailyTaks from "./Components/DailyTasks/DailyTaks";
import Projects from "./Components/Projects/Projects";
import SideBar from "./Components/SideBar/SideBar";
import WeeklyTasks from "./Components/WeeklyTasks/WeeklyTasks";

function App() {
  return (
    <div className="main-container">
      <SideBar />
      <div className="tasks-container">
        <DailyTaks />
        <WeeklyTasks />
      </div>
      <div className="projects">
        <Projects />
        <Projects />
      </div>
      <div className="calender">
        <Calender />
        <Calender />
      </div>
    </div>
  );
}

export default App;
