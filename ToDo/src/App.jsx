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
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

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
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='todo-list'>
          {todos.filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted).filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)).map((todo) => (
            <ToDo todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
      </div>

      <ToDoForm addToDo={addToDo} />

    </div>
  )
}

export default App
