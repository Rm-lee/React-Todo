import React from 'react';

const Todo = (props) => {
 
 return (
  //on todo click add class name todocompleted otherwise add nothing,
  //display todo item name
  <div onClick={props.toggleCompleted} className={`todo${props.todo.completed ? "completed" : ""}`}>
   <p className="todo-item">{props.todo.item}</p>
  </div>
 );
};

export default Todo;