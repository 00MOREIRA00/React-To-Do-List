import { useState } from 'react'
import './App.css'
import ToDo from'./components/todo'


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar Web hacking",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id:2,
      text: "Estudar Docker",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
          {todos.map((todo) => (
            <ToDo todo={todo} key={todo.id}/>
          ))}
      </div>
    </div>
  )
}

export default App
