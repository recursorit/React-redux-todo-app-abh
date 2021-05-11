import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux'
import store from './redux/store';


function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <h2 className="display-3 mt-5">Todo App</h2>
      <InputField />
      <TodoList />
    </div>
    </Provider>
  );
}

export default App;
