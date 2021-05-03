import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'CS 245',
        day: 'May 11 at 7:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'CS 246',
        day: 'May 17 at 7:00pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'MATH 239',
        day: 'May 31 at 7:00pm',
        reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
     <Header />
     <AddTask />
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No todo items'}
    </div>
  );
}

export default App;
