import React from 'react'

const todo = ({ todo }) => {
  return (
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
  )
}

export default todo