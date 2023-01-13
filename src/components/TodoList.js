import React from 'react'
import Todo from './Todo'

function TodoList({todoList,setTodoList}) {
  return (
    <div>
        {todoList.map((todoItem) => (
                <Todo key={todoItem.id} todoItem={todoItem} todoList={todoList} setTodoList = {setTodoList}/> 
        ))}
    </div>
  )
}

export default TodoList