"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  type?: "bar" | "line" | "pie";
  labels: string[];
  dataValues: number[];
  options?: any;
}

const Chart: React.FC<ChartProps> = ({
  type = "bar",
  labels = [],
  dataValues = [],
  options,
}) => {
  const data = {
    labels,
    datasets: [
      {
        type: type,
        label: "",
        backgroundColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
  
            if (!chartArea) {
              return null;
            }
  
            const gradient = ctx.createLinearGradient(
              0,
              chartArea.bottom,
              0,
              chartArea.top
            );
            gradient.addColorStop(0, predefinedColors[0]);
            gradient.addColorStop(1, predefinedColors[1]);
  
            return gradient;
          },
          hoverBackgroundColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
  
            if (!chartArea) {
              return null;
            }
  
            const gradient = ctx.createLinearGradient(
              0,
              chartArea.bottom,
              0,
              chartArea.top
            );
            gradient.addColorStop(0, predefinedColors[0]);
            gradient.addColorStop(1, predefinedColors[2]);
  
            return gradient;
          },
        borderColor: predefinedColors,
        borderRadius: 10,
        borderSkipped: false,
        marginBottom: 5,
        fill: false,
        data: dataValues,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    elements: {
      point: {
        radius: 10,
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
        title: {
          display: false,
          text: "",
          position: "bottom" as const,
        },
      },
    },
  };
  return (
    <div className="w-full h-auto p-4 bg-white rounded-lg shadow-md">
      {type === "bar" && <Bar data={{ ...data, datasets: [{ ...data.datasets[0], type: "bar" }] }} options={chartOptions ?? options} style={{ width: "100%" }} />}
      {type === "line" && <Line data={{ ...data, datasets: [{ ...data.datasets[0], type: "line" }] }} options={chartOptions ?? options} style={{ width: "100%" }} />}
      {type === "pie" && <Pie data={{ ...data, datasets: [{ ...data.datasets[0], type: "pie" }] }} options={chartOptions ?? options} style={{ width: "100%" }} />}
    </div>
  )
};

const predefinedColors = [
    "#217C70",
    "#E7E3C6",
    "#fff",
  ];

export default Chart;
