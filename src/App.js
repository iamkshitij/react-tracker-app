import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import Add from "./components/Add";

const App = () =>{
    const [tasks,setState] = useState(
        [
            {
                id: 1,
                text: 'GO for running',
                day: 'April 25th at 5.30pm',
                reminder: true
            },
            {
                id: 2,
                text: 'Take Medicines',
                day: 'April 25th at 9.30pm',
                reminder: true
            },
            {
                id: 3,
                text: 'call Mellow',
                day: 'April 26th at 1.30pm',
                reminder: false
            }
        ]
    );

    const deleteTask = (id) => {
        setState(tasks.filter((task)=>task.id !== id))
    }

    const toggleReminder = (id) =>{
        setState(tasks.map((task) =>
            task.id === id ?
                {...task,reminder: !task.reminder}
                :task))
    }

  return(
      <div className="container">
        <Header />
        <Add/>
          {tasks.length === 0? 'No tasks to display' :
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>}
      </div>
  );
}

export default App;
