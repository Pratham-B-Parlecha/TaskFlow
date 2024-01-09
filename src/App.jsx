import "./App.scss";
import Calender from "./Components/Calender";
import DailyTasks from "./Components/DailyTasks";
import OtherTasks from "./Components/OtherTasks";
import Preformance from "./Components/Preformance";
import Projects from "./Components/Projects";
import SideBar from "./Components/SideBar";
import WeeklyTasks from "./Components/WeeklyTasks";


function App() {
  return (
    <div className="mainContainer">
      <SideBar />
        <Projects />
        <DailyTasks />
        <Calender />
        <WeeklyTasks />
        <Preformance />
        <OtherTasks />
    </div>
  );
}

export default App;