import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Dashboard.css";
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState(false);

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
      .then((data) => {
        toast.success("deleted Successfully");
        console.log(data);
      });
  };

  const handleComplete = (task) => {
    toast.success("task completed successfully");
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
            <tr key={task._id} className={task.completed ? "myLine" : ""}>
              <th scope="row">{index + 1}</th>
              <td>{task.taskName}</td>
              <td>{task.taskDescription}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleComplete(task);
                  }}
                >
                  Complete
                </button>
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
