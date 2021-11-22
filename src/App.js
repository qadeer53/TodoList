import React,{useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Todos from './components/Todos'
import axios from 'axios';

const App = () => {

  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("")
  const [toggle, setToggle] = useState(true)
    const [editItem, setEditItem] = useState(null)

   const getTodo = () => {
      axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=0')
        .then(res => setTodos(res.data))
     }
  
     useEffect(() => {
        getTodo();
    }, [])
  
  const markComplete = (id) => {
       setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        })
       )
  }
  
  const editTodo = (id) => {
    const editTodo = todos.find((todo) => {
      return todo.id === id
    })

    setToggle(false)

    setTitle(editTodo.title)

    setEditItem(id)

  }; 
  
  const delTodo = (id) => {
     setTodos(
        todos.filter(todo => todo.id !== id)
      )
  }

  const addTodo = (title) => {
    if (todos && !toggle) {
      setTodos(
        todos.map(todo => {
        if (todo.id === editItem)
            return { ...todo, title: title }
          return todo;
        }))
      setToggle(true)

    setTitle('')

    setEditItem(null)
    }else{
      axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => {
      res.data.id = Date.now();
      setTodos([...todos, res.data])
    });}
  }

   const AddTodo = (props) => {

  const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle("");
  }

    return (
      <form onSubmit={onSubmit} style={{ display: 'flex', padding: '10px' }}>
        {props.toggle ? (
          <>
            <input
              type="text"
              name="title"
              style={{ flex: '10', padding: '15px' }}
              placeholder="Edit Todo ..."
              value={title}
              onChange={e=> setTitle(e.target.value)}
          />
          
      <button
        type="submit"
        value="Submit"          
        className="btn"        
        style={{ flex: '1' }}
      >Update</button>
          </>
        ) : (
          <>
           <input
                type="text"
                name="title"
                style={{ flex: '10', padding: '15px' }}
                placeholder="Add Todo ..."
                value={title}
          onChange={e => setTitle(e.target.value)}
        
            />
            
        <button
          type="submit"
          value="Submit"          
          className="btn"        
          style={{ flex: '1' }}
        >Submit</button>
          
           </>
        )
        }
        </form>
        
    )
}

  return (
      <div className="App">        
        <div className="container">         
        <Header />
          <AddTodo addTodo={addTodo} />
        <Todos todos={todos} markComplete={markComplete} editTodo={editTodo} delTodo={delTodo} />
        </div>
      </div>
  );
}

export default App;









































