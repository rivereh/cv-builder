import { v4 as uuid } from 'uuid'

const todos = [
  { task: 'mow the lawn', id: uuid() },
  { task: 'work on odin project', id: uuid() },
  { task: 'feed the cat', id: uuid() }
]

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  )
}

export default TodoList
