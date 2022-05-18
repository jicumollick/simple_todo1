import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Todo from "../Todo/Todo";

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to To Do App</h2>
      <Todo></Todo>
      <Dashboard></Dashboard>
    </div>
  );
};

export default Home;
