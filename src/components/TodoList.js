import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {
    const todos = useSelector(state=>state) 
    return(
        <div>
            <h2 className="display-4 mb-4">TodoList</h2>
            {
                todos.map(todo=>{
                    return <Todo key={todo.id} todo={todo} />
                })
            }
            
        </div>
    )
}

export default TodoList