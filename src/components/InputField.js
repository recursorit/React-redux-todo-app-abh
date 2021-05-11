import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import {FormControl,Button, Container} from 'react-bootstrap'
import { addTodo } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const InputField = () => {
    const [todo,settodo] =useState("")
    const todos = useSelector(state=>state)
    const dispatch = useDispatch()
    return(
        <Container>
        <InputGroup className="my-5 px-5 outline-none ">
            <FormControl 
            placeholder="Enter Todo here"
            value={todo}
            onChange={e=>settodo(e.target.value)}
            />
            <InputGroup.Append>
            <Button 
                 onClick={()=>{ dispatch(addTodo({
                id:todos.length+1,
                title:todo
                }));
                settodo('')}
                }
             variant="outline-dark" disabled={!todo}>Button</Button>
            </InputGroup.Append>
        </InputGroup>
        </Container>
    )
}

export default InputField