import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Performance.scss";
import { Chart, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function Preformance() {
  const [counter, setCounter] = useState({ len1: 0, len2: 0, len3: 0 });
  const [countDone, setCountDone] = useState({
    lenDone1: 0,
    lenDone2: 0,
    lenDone3: 0,
  });
  useEffect(() => {
    async function fetchDataFromFirebase() {
      const sp1 = await getDocs(collection(db, "dailyTasks"));
      const sp2 = await getDocs(collection(db, "weeklyTasks"));
      const sp3 = await getDocs(collection(db, "projects"));

      const dmc1 = sp1.docs.map((doc) => doc.data());
      const dmc2 = sp2.docs.map((doc) => doc.data());
      const dmc3 = sp3.docs.map((doc) => doc.data());

      setCounter((prevCounter) => ({
        ...prevCounter,
        len1: dmc1.length,
        len2: dmc2.length,
        len3: dmc3.length,
      }));
    }
    fetchDataFromFirebase();
  }, [counter.len1, counter.len2, counter.len3]);

  useEffect(() => {
    const localStorageValue1 = JSON.parse(
      localStorage.getItem("dailyTasksValue")
    );
    const localStorageValue2 = JSON.parse(
      localStorage.getItem("weeklyTasksValue")
    );
    const localStorageValue3 = JSON.parse(
      localStorage.getItem("projectTasksDone")
    );
    setCountDone((prev) => ({
      ...prev,
      lenDone1: Object.keys(localStorageValue1).length,
      lenDone2: Object.keys(localStorageValue2).length,
      lenDone3: Object.keys(localStorageValue3).length,
    }));
  }, [countDone.lenDone1, countDone.lenDone2, countDone.lenDone3]);
  console.log(countDone);
  const { len1, len2, len3 } = counter;
  const { lenDone1, lenDone2, lenDone3 } = countDone;
  return (
    <Card className="performance">
      <h3>Performance</h3>
      <Card className="PieCharts">
        <Doughnut
          data={{
            labels: ["TasksCompleted", "TasksToBeDone"],
            datasets: [
              {
                label: "performance",
                data: [
                  lenDone1 + lenDone2 + lenDone3,
                  len1 + len2 + len3 - (lenDone1 + lenDone2 + lenDone3),
                ],
                backgroundColor: ["rgb(43,63,229,0.3)", "rgb(250,192,19,0.3)"],
                borderColor: ["rgb(43,63,229,0.8)", "rgb(250,192,19,0.8)"],
                borderWidth: 0,
              },
            ],
          }}
        />
      </Card>
    </Card>
  );
}
