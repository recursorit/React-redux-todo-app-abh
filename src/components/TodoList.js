import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {
    const todos = useSelector(state=>state) 
    return(
        <Container>
            <h2 className="display-4 mb-4">TodoList</h2>
            {
                todos.map(todo=>{
                    return <Todo key={todo.id} todo={todo} />
                })
            }
            
        </Container>
    )
}

export default TodoList