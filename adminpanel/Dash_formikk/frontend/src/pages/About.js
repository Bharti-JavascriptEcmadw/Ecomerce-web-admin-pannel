 import React from "react";
import Table from "../components/Table";

const About = () => {
  // Sample data for the table
  const sampleData = [
    { name: "JAlice", age: 625 },
    { name: "zBob", age: 30 },
    { name: "Charlie", age: 5522 },
    { name: "Diana", age: 28 },
    { name: "Eve", age: 35 },
    { name: "Frank", age: 40 },
    { name: "Grace", age: 27 },
    { name: "Hank", age: 32 },
    { name: "Ivy", age: 29 },
    { name: "AJack", age: 23 },
  ];

  return (
    <div className="p-6 max-w-[90%]  mx-auto border-1 border-teal-500 bg-pink-900 mt-10 mb-10 w-full  ">
      <h2 className="text-2xl font-semibold mb-4">About Page</h2>
      <p className="mb-6">This is the about page of the dashboard.</p>
      <Table data={sampleData} />
    </div>
  );
};

export default About;
