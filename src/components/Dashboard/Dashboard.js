import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);

  const handleDelete = (task) => {
    const id = task._id;

    fetch(`http://localhost:5000/task/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      Number of tasks is {tasks.length}
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task Name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <th scope="row">{index + 1}</th>
              <td>{task.taskName}</td>
              <td>{task.taskDescription}</td>
              <td>
                <button className="btn btn-success">Complete</button>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => handleDelete(task)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
