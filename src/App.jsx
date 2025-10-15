import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";



function App() {
  return (
    <div>
    <h1>Check-Mate-App</h1>
    <p> Our fridenly task Manager</p>
    <Taskform />
    <Tasklist />
    <Progresstracker />
    <button>Clear All Tasks</button>
    </div>
  )
}
export default App;
