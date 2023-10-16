import React from 'react'

const todo = ({ todo, removeTodo }) => {
  return (
    <div key={todo.id} className='todo'>
              <div className='content'>
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
              </div>
              
              <div>
                <button className='complete'>Completar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
              </div>
            </div>
  )
}

export default todo