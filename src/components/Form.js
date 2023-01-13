import React from 'react'
import styles from "../style.module.css"

function Form({todo, setTodo, todoList, setTodoList}) {

    const handleChange = (event)=>{
        setTodo(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setTodoList([...todoList,todo]);
        setTodo("");
    }

  return (
    <div className={styles.todoform}>
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} className={styles.todoinput} placeholder='Add Todo Item' ></input>
            <button type="submit" className={styles.todobutton}>Add</button>
        </form>
    </div>
  )
}

export default Form