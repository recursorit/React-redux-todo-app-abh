import React from 'react'
import {Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, modalClose } from '../redux/actions'

export const Modal1 = () =>{
    const dispatch = useDispatch()
    const modal = useSelector(state=>state.modalS.modal)
    const mid = useSelector(state=>state.modalS.mid)


    return(
        <Modal show={modal} onHide={() => dispatch(modalClose())}>
                <Modal.Header >
                    <Modal.Title>Confirm Action</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you wish to delete this record?</Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={() => dispatch(modalClose())}>
                        Close
                </Button>
                    <Button variant="danger" onClick={()=>{dispatch(deleteTodo(mid)); dispatch(modalClose())}}>
                        Delete
                </Button>
                </Modal.Footer>
            </Modal>
    )
}