import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log({ CATEGORIES, TASKS });

function App() {
  const [categories, setCategories] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  function updateTaskList(selectedTask) {
    const updatedTasks = tasks.filter((task) => 
      task.text !== selectedTask
    )
    setTasks(updatedTasks)
  }

  function selectedCategory(category) {
    setCategories(category)
  }

  const filteredList = tasks.filter((task) => categories === "All" || task.category === categories) 
  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory= {selectedCategory}/>
      <NewTaskForm />
      <TaskList tasks={filteredList} getTask={updateTaskList}/>
    </div>
  );
}


export default App;
