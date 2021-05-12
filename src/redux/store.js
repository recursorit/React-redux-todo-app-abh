import {combineReducers, createStore, applyMiddleware} from 'redux'
import modalReducer from './modalReducer'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    todo:reducer,
    modalS:modalReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()))

export default store
