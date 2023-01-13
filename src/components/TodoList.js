import React from 'react'
import Todo from './Todo'

function TodoList({todoList}) {
  return (
    <div>
        {todoList.map((todoItem) => (
            <div>
                <Todo todoItem={todoItem} />
            </div>  
        ))}
    </div>
  )
}

export default TodoList