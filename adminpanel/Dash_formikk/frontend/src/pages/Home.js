

import React from "react";
import Dashboard from "../components/Dashboard"; // Import Dashboard component
import ChartComponent from "../components/ChartComponent"; // Import ChartComponent

const Home = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"], // x-axis labels
    datasets: [
      {
        label: "Monthly Data", // Line label
        data: [65, 60, 70, 80, 45], // Data points for the line
        borderColor: "#38bdf8", // Line color
        borderWidth: 3, // Line width
        pointBackgroundColor: "#1d4ed8", // Points color
        pointBorderColor: "#1e40af", // Border color for points
        pointHoverRadius: 7, // Hover radius for points
        tension: 0.4, // Smoothness of the curve
        fill: true, // Fill area under the line
        backgroundColor: "rgba(56, 189, 248, 0.3)", // Fill color under the line
      },
    ],
  };


  return (
    <div className="w-full min-h-screen bg-teal-400 p-6">
      {/* Main Content Area with outer border */}
      <div className="w-full max-w-6xl bg-white border-1 border-teal-500  shadow-lg mx-auto p-6">
        {/* Flexbox container to center content */}
        <div className="flex flex-col space-y-4">

          {/* Dashboard Component */}
          <Dashboard />
          </div>
          <div>
          {/* Chart Component - Full Width and Dynamic Height */}
          {/* <ChartComponent data={data} /> */}
          </div>
        </div >

        <div className="m-5">  
          <ChartComponent data={data} />
          </div>
    </div>
  );

};

export default Home;
