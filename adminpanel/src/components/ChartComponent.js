import React from "react";
import { Line } from "react-chartjs-2"; // Import Line chart from chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components to use the chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({data}) => {
  // Chart data
  // const data = {
  //   labels: ["January", "February", "March", "April", "May"], // x-axis labels
  //   datasets: [
  //     {
  //       label: "Monthly Data", // Line label
  //       data: [65, 60, 70, 80, 45], // Data points for the line
  //       borderColor: "#38bdf8", // Line color
  //       borderWidth: 3, // Line width
  //       pointBackgroundColor: "#1d4ed8", // Points color
  //       pointBorderColor: "#1e40af", // Border color for points
  //       pointHoverRadius: 7, // Hover radius for points
  //       tension: 0.4, // Smoothness of the curve
  //       fill: true, // Fill area under the line
  //       backgroundColor: "rgba(56, 189, 248, 0.3)", // Fill color under the line
  //     },
  //   ],
  // };

  // Chart options
  
  return (
    <div className="bg-white p-4 rounded shadow mb-6 w-full sm:h-[40vh] md:h-[50vh] lg:h-[50vh] xl:h-[50vh]">
      <Line data={data}  />
    </div>
  );
};

export default ChartComponent;
