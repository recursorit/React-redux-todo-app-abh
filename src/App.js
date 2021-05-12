import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function App() {
  const todos = useSelector(state=>state)
  return (
    
    <Container fluid className="App">
      <h2 className="display-3 mt-5">Todo App</h2>
      <InputField />
      {todos ? <TodoList />:null}
      
    </Container>
    
  );
}

export default App;
