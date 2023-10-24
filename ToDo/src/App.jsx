import { useState } from 'react'
import './App.css'
import ToDo from './components/todo'
import ToDoForm from './components/toDoForm'
import Search from './components/search'
import Filter from './components/filter'


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

  const [search, setSearch] = useState("")

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

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo )
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter />
      <div className='todo-list'>
          {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
            <ToDo todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
      </div>

      <ToDoForm addToDo={addToDo} />

    </div>
  )
}

export default App
