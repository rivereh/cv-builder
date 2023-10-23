import TaskForm from './TaskForm'
import Task from './Task'
// import './FormStyles.css'
import { useState } from 'react'

const FormHandler = () => {
  const [tasks, setTasks] = useState([])

  function addTask(name) {
    setTasks([...tasks, { name: name, done: false }])
  }

  return (
    <div className='main'>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Task {...task} />
      ))}
    </div>
  )
}

export default FormHandler
