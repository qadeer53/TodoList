import React from 'react'
import './App.css';
import Todo from './components/Todo'
const App = (props) => {
  return (
      <div className="App">        
      <div className="container">
        <Todo />
        </div>
      </div>
  );
}

export default App;