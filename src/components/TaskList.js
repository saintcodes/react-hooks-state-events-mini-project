import React from "react";
import Task from "./Task"

function TaskList({tasks, getTask}) {

  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      getNewTask={getTask}
    />
  ))
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
