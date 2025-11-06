export default function Progresstracker ({tasks}) {
    const completeTasks = tasks.filter((t) => t.completed).length;
    const totaltasks = tasks.length;
    const percenteage = totaltasks == 0 ? 0: (completeTasks/totaltasks) * 100;
    return(
        <div className = "progress-tracker">
            <p>
                {completeTasks} of {totaltasks} tasks completed.
            </p>
            <div className="progress-bar">
                <div className="progress" style={{width: `${percenteage}%`}}>
                </div>
            </div>
            
        </div>
    );
}