import React from 'react';
import './Todo.css'
const Todo = (props) => {
 console.log()
 console.log(props.todo.completed)
 return (
  
  <div onClick={props.toggleCompleted} className={`todo${props.todo.completed ? "completed" : ""}`}>
   <p className="todo-item">{props.todo.item}</p>
  </div>
 );
};

export default Todo;