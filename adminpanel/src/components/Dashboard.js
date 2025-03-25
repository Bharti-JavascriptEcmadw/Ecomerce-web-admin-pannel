import React from "react";
import Card from "../components/Card"; // Import Card component

const Dashboard = () => {
  return (
    <div className="w-full max-w-6xl bg-white border-2 border-teal-500 rounded-lg shadow-lg mx-auto p-6">
      {/* Flexbox container to center content */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>

        {/* Cards - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-6">
          <Card title="Research" content="Some important info..." />
          <Card title="Technology" content="Some more details..." />
          <Card title="Health" content="More statistics..." />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
