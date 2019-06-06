import React from 'react';

function Todo(props) {

  const toggleClick = () => {
    
    props.toggleCompleted(props.todo.id);
  };
 

  return (
    <div className={`${props.todo.completed ? " completed" : ""}`}
    onClick={toggleClick}>
    {props.todo.task}
    </div>
      );
};

export default Todo;