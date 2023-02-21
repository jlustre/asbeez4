import React from "react";
import DefaultHeader from "../components/DefaultHeader";

const Dashboard = () => {
  return (
    <>
      <DefaultHeader title="Dashboard" />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          Dashboard Content
        </div>
      </main>
    </>
  );
};

export default Dashboard;
