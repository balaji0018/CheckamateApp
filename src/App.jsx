import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";

function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });


  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);

  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => (i != index)));
  }

  const clearTask = () => {
    setTasks([]);
  }


  return (
    <div  className="app-container">
    <h1>Check-Mate-App</h1>
    <p  className="app-subtitle"> Our Fridenly Task Manager</p>
    <Taskform addTask = {addTask}/>
    <Tasklist tasks = {tasks}
    updateTask = {updateTask} deleteTask = {deleteTask}/>
    <Progresstracker tasks = {tasks}/>
    {tasks.length > 0 && (<button onClick={clearTask}  className="clear-all-btn">Clear All Tasks</button>)}
    
    </div>
  )
}
export default App;
