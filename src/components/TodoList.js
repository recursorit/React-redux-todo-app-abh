import { Modal1 } from './Modal'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {
    const todos = useSelector(state=>state.todo) 
    return(
        <Container>
            <h2 className="display-4 mb-4">TodoList</h2>
            {
                todos.map(todo=>{
                    return <Todo key={todo.id} todo={todo} />
                })
            }
            < Modal1 />
        </Container>
    )
}

export default TodoList