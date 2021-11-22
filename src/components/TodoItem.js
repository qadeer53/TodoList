import React from 'react'

const App = (props) => {
    
    const getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: props.todo.completed ?
                'line-through' : 'none'
            }
    }

    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '17%',
        cursor: 'pointer',
        float: 'right',
        marginRight: '10px'
    }
    
    const {id, title}=props.todo
    return (
    <div style={getStyle()}>
            <p>
                {title}
                <button onClick={() => props.delTodo(id)} style={btnStyle}>x</button>
                {'  '}
                <button onClick={() => props.editTodo(id)} style={btnStyle}>Edit</button>
                {'  '}
                <button onClick={() => props.markComplete(id)} style={btnStyle}>Complete</button>
            </p>
    </div>
  );
}

export default App;
