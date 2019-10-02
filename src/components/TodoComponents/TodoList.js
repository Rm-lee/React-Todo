import React from 'react';
import Todo from './Todo'
const TodoList = (props) => {
 return (
  <div>
   {props.todos.map(item => (
    <Todo todo={item} key={item.id} toggleCompleted={e => props.toggleCompleted(e,item.id)} />
   ))}
  </div>
 );
};

export default TodoList;