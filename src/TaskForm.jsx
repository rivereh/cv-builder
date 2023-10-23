import { useState } from 'react'

const TaskForm = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    onAdd(newTask)
    setNewTask('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Your next task...'
      />
    </form>
  )
}

export default TaskForm
