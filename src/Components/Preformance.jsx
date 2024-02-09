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
  const [counter, setCounter] = useState({len1: 0, len2: 0, len3: 0})
  useEffect(() => {
    async function getData1() {
      const sp = await getDocs(collection(db, "dailyTasks"));

      const dmc1 = sp.docs.map((doc) => doc.data());
      setCounter(prev => ({
        ...prev,
        len1: dmc1.length
      }))
    }
    async function getData2() {
      const sp = await getDocs(collection(db, "weeklyTasks"));

      const dmc2 = sp.docs.map((doc) => doc.data());
      setCounter(prev => ({
        ...prev,
        len2: dmc2.length
      }))
    }
    async function getData3() {
      const sp = await getDocs(collection(db, "projects"));

      const dmc3 = sp.docs.map((doc) => doc.data());
      setCounter(prev => ({
        ...prev,
        len3: dmc3.length
      }))
    }
    getData1();
    getData2();
    getData3();
  },[counter])
  const {len1, len2, len3} = counter;
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
                data: [0, (len1+len2+len3)],
                backgroundColor: [
                  "rgb(43,63,229,0.3)",
                  "rgb(250,192,19,0.3)",
                ],
                borderColor: [
                  "rgb(43,63,229,0.8)",
                  "rgb(250,192,19,0.8)",
                ],
                borderWidth: 0
              },
            ],
          }}
        />
      </Card>
    </Card>
  );
}
