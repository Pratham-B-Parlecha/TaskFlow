import React from "react";

import Calender from "../Components/Calender";
import DailyTasks from "../Components/DailyTasks";
import Preformance from "../Components/Preformance";
import Projects from "../Components/Projects";
import WeeklyTasks from "../Components/WeeklyTasks";

export default function HomePage() {
  return (
    <>
      <Projects />
      <DailyTasks />
      <Calender />
      <WeeklyTasks />
      <Preformance />
    </>
  );
}
