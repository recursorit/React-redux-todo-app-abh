import { MODAL_CLOSE, MODAL_OPEN } from "./actions";
import { modal } from "./state";


const modalReducer = (state=modal,action) => {
    switch(action.type){
        case MODAL_OPEN:
            return{
                ...state,
                modal:true,
                mid:action.payload
            }
        case MODAL_CLOSE:
            return{
                ...state,
                modal:false,
            } 
        default: return state       
    }
}

export default modalReducer