import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions'

const Todo = ({todo}) => {
    const dispatch = useDispatch()
    const [edit,setEdit]=useState(false)
    const [name, setName] = useState(todo.title)
    return(
        <Container className="px-5">
        <Row className="my-3">
            <Col xs={1}>{todo.id}.</Col>
            <Col className="text-start pl-3 text-capitalize" >
                {edit ? <input autoFocus type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                 : todo.title}
                </Col>
            <Col xs={6} md={4} className="text-end ">
                <Button onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            title: name
                        }))
                        if(edit) {
                         setName(todo.title);   
                        }
                        setEdit(!edit);
                      

                    }}
                 className="mx-2 p-0 border-0"
                  variant="outline-info">
                      {edit ? <TiEdit size={28} color={"green"}/> :<TiEdit size={28}/>}
                </Button>
                <Button onClick={()=>dispatch(deleteTodo(todo.id))}
                 className="p-0 border-0"
                  variant="outline-danger">
                      <RiCloseCircleLine size={28}/>
                </Button>
            </Col>
        </Row>
        </Container>
    )
}

export default Todo