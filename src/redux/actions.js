export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const MODAL_OPEN = "MODAL_OPEN"
export const MODAL_CLOSE = "MODAL_CLOSE"


export const addTodo = (todo) => {
    return {
        type:ADD_TODO,
        payload: todo,
    }
}

export const deleteTodo = (todoId) => {
    return  {
        type:DELETE_TODO,
        payload: todoId,
    }
}


export const updateTodo = (todo) => {
    return {
        type:UPDATE_TODO,
        payload: todo,
    }
}

export const modalOpen = (todoId) => {
    return {
        type:MODAL_OPEN,
        payload: todoId
    }
}

export const modalClose = () => {
    return {
        type:MODAL_CLOSE,
    }
}