import React from 'react'

function toDoForm() {
  return (
    <div>
        <h2>Criar Tarefa</h2>
        
        <form>
            <input type='text' placeholder='Digite o titulo'/>
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default toDoForm