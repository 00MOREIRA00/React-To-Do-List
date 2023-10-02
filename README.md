# React-To-Do-List

Para passar propriedades de um componente para o outro, precisamos:
```
1° Fazer importaçãoprimeiramente 
import ToDo from'./components/todo'

2° Dentro do componente que será consumido nós passamos a props, que nesse caso se chama "todo"
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

3° Colocamos o componente e passamos o parametro que recebe que nesse caso o parametro do componente é "todo" e recebe o parametro "todo".
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

```