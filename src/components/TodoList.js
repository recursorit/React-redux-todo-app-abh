import { Modal1 } from './Modal'
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './Todo'
import { deleteall } from '../redux/actions'

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state=>state.todo) 
    return(
        <Container>
            <h2 className="display-4 mb-4">TodoList</h2>
            {
                todos.map(todo=>{
                    return <Todo key={todo.id} todo={todo} />
                })
            }
            {/* <Button 
            onclick={()=>dispatch(deleteall())}
             variant="outline-danger">Delete all</Button> */}
            < Modal1 />
        </Container>
    )
}

export default TodoList