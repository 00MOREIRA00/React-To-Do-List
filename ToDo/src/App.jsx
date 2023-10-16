import { useState } from 'react'
import './App.css'
import ToDo from './components/todo'
import ToDoForm from './components/toDoForm'


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

  const addToDo = (text, category) => {
    const newToDos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newToDos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);

    setTodos(filteredTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
          {todos.map((todo) => (
            <ToDo todo={todo} key={todo.id} removeTodo={removeTodo}/>
          ))}
      </div>

      <ToDoForm addToDo={addToDo} />

    </div>
  )
}

export default App
