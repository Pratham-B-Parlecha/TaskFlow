import React from "react";
import Card from "./Card";
import "./Performance.scss";
import { Chart, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function Preformance() {
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
                data: [200, 200],
                backgroundColor: [
                  "rgb(43,63,229,0.3)",
                  "rgb(250,192,19,0.3)",
                ],
                borderColor: [
                  "rgb(43,63,229,0.8)",
                  "rgb(250,192,19,0.8)",
                ]
              },
            ],
          }}
        />
      </Card>
    </Card>
  );
}
