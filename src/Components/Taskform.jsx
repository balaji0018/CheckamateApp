import { useState } from "react";

export default function Taskform ({addTask}){
     const[task, setTask] = useState('');
     const[priority, setPriority] = useState('Medium');
     const[category, setCategory] = useState('General');

     const handlesubmit = (e) => {
        e.preventDefault();
        addTask({text: task, priority, category, completed: false});

        setTask('');
        setPriority('Medium');
        setCategory('General');
     }



    return (
        <form  onSubmit={handlesubmit}  className="task-form">
            <div  className="form-row">
                <input  className ="task-input" type = "text"  placeholder="Enter the Task" value = {task} 
                onChange={(e) => setTask(e.target.value)}/>
                <button type="submit"  className="add-task-btn">Add Task </button>
            </div>

            <div>
                <select   className = "task-select"  value = {priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                 <select  className = "task-select" value = {category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    )
}