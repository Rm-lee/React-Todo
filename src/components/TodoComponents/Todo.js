import React from 'react';
import "./Todo.css";

function Todo(props) {

  const toggleClick = () => {
    
    props.toggleCompleted(props.todo.id);
  };
  

  return (
    <div className={`task${props.todo.completed ? "completed" : ""}`}
    onClick={toggleClick}>
    {props.todo.task}
    </div>
      );
};

export default Todo;