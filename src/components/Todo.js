import React, { useState } from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'
// import { BsCheckCircle } from 'react-icons/bs'
import Header from './Header'

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [inputData, setInputData] = useState("")
    const [toggle, setToggle] = useState(true)
    const [editItem, setEditItem] = useState(null)

    
    const addTodo = () => {
        if (!inputData) {
          
        } else if (inputData && !toggle) {
      setTodos(
        todos.map(todo => {
          if (todo.id === editItem)
            return { ...todo, name: inputData  }
          return todo;
        }))
      setToggle(true)

      setInputData('')

      setEditItem(null)
    } else {
            const allInputData = { id: new Date().getTime().toString(), name:inputData, completed: false }
            setTodos([...todos, allInputData])           
            setInputData('')
        }
    }

    const editTodo = (id) => {
    const editTodo = todos.find((todo) => {
      return todo.id === id
    })

    setToggle(false)

    setInputData(editTodo.name)

    setEditItem(id)

  }; 
  

    const delTodo = (id) => {
        const updatedTodos = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(updatedTodos)
    }

//       const markComplete = (id) => {
//        setTodos(
//         todos.map(todo => {
//           if (todo.id === id) {
//             todo.completed = !todo.completed
//           }
//           return todo;
//         })
//        )
//   }
    
    const btnStyle = {
        background: '#fff',
        color: '#ff0000',
        border: 'none',
        borderRadius: '17%',
        cursor: 'pointer',
        float: 'right',
        marginRight: '10px',
    }

    return (
        <>
            <Header />
            <div style={{ display: 'flex', padding: '10px' }}>
                {
                    toggle ?
                        <>
                    <input
                        type="text"
                        name="title"
                        style={{ flex: '10', padding: '15px' }}
                        placeholder="Add Todo ..."
                        value={inputData}
                        onChange={e => setInputData(e.target.value)}

                    />
                    
                    <button
                    onClick={addTodo} 
                    type="submit"
                    value="Submit"          
                    className="btn"        
                    style={{ flex: '1' }}
                >Submit</button>
                        </>
                        :
                        <>
                    <input
                        type="text"
                        name="title"
                        style={{ flex: '10', padding: '15px' }}
                        placeholder="Add Todo ..."
                        value={inputData}
                        onChange={e => setInputData(e.target.value)}

                    />
                    
                    <button
                    onClick={addTodo} 
                    type="submit"
                    value="Submit"          
                    className="btn"        
                    style={{ flex: '1' }}
                >Update</button>
                        </>
                }
                
            </div>
            <div>
                {
                    todos.map((todo) => {
                        return (
                            <div key={todo.id}>
                                <p>{ todo.name}</p>
                                <button style={btnStyle} onClick={() => delTodo(todo.id)}><RiDeleteBin6Line /></button>
                                {'  '}
                                <button style={btnStyle} onClick={() => editTodo(todo.id)}><BiEdit /></button>
                                {'  '}
                                </div>
                    )})
                }
            </div>        
        </>
    )
}

export default Todo
