export default function Tasklist ({tasks, updateTask, deleteTask}) {
    const toggleComplete = (index) => {
        const updatedTask = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedTask, index);
    }

    
    return (
    <ul>
        {tasks.map((task, index) => (
            <li >
                <div  key = {index} className={task.completed? "completed": ""}>
                    <span>{task.text}
                        <small>({task.priority} , {task.category})</small>
                    </span>
                </div>

                <div>
                    <button  className={`task-button ${task.completed ? "task-undo" : "task-complete"}`}   onClick={() => toggleComplete(index)}>{task.completed ? "Undo" : "Complete"}</button>
                    <button   className="task-button task-delete"  onClick={() => deleteTask(index)}>Delete</button>
                </div>

            </li>
        ))}
    </ul>
    )
}