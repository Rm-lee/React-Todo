import React, { Component } from 'react';

class TodoForm extends Component {
 constructor(){
  super()
   this.state = {
    todo:''
   }
  
 }

 handleChange = e => {
  this.setState({
   todo: e.target.value
  })
 }
 handleSubmit = e => {
  e.preventDefault() 
  this.props.addTodo(e,this.state.todo)
  this.setState({
   todo: ''
  })
 }
 render() {
  return (
   <form className="todo-form" onSubmit={this.handleSubmit}>
    <input
    type="text"
    value={this.state.todo}
    onChange={this.handleChange}
    />
    <button className="btn" >Add Todo</button>
    <button className="btn" onClick={this.props.clear}>Clear Completed</button>
   </form>
  );
 }
}

export default TodoForm;