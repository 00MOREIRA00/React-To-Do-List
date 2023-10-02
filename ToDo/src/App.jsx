import { useState } from 'react'


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
            <div key={todo.id} className='todo'>
              <div className='content'>
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
              </div>
              
              <div>
                <button>Completar</button>
                <button>x</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
