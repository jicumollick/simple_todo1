import React from "react";

const Todo = () => {
  const handlePost = (e) => {
    e.preventDefault();
    const taskName = e.target.name.value;
    const taskDescription = e.target.description.value;
    console.log(taskName, taskDescription);
  };
  return (
    <div className=" p-3 color-4D4C7D">
      <form className="container " onSubmit={(e) => handlePost(e)}>
        <div className="input-group mb-3 mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            aria-label="Username"
            name="name"
            autoComplete="off"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Description</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="description"
          ></textarea>
        </div>
        <div className="mt-4">
          <input type="submit" value="ADD" className="btn btn-info" />
        </div>
      </form>
    </div>
  );
};

export default Todo;
