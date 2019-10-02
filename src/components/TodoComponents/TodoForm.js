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
   value: e.target.value
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
   <form onSubmit={this.handleSubmit}>
    <input
    type="text"
    value={this.state.value}
    onChange={this.handleChange}
    />
    <button>Add Todo</button>
   </form>
  );
 }
}

export default TodoForm;