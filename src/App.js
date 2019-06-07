import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'
const listoftodos = [];
class App extends React.Component {
  constructor(props){
    super(props);
     this.state = {   
    todos: listoftodos,
    task:''
    
  };
  }
  
  changeHandler = event => {
    this.setState({ task: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    const newtodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newtodo]
    
    });
    
      
  };
  toggleItem = id => {
    const newList = this.state.todos.map(item =>{
      if (item.id === id) {
        console.log(item)
       const newObj = { ...item,
        completed: !item.completed
      };
      return newObj;
    }
    else {
      return item;
    }
    });
    this.setState({ todos: newList });

  }
  clearItems = event =>{
    event.preventDefault();
    const toBeCompleted = this.state.todos.filter(todo => todo.completed === false);
    this.setState({todos: toBeCompleted})
  }

  render() {
    return (
      <div className="container">
      <TodoList todos={this.state.todos} toggleCompleted={this.toggleItem}  />
      <TodoForm value={this.state.todo} changeHandler={this.changeHandler} addNewItem={this.addItem}clearCompleted={this.clearItems}/>
    </div>
    );
  }
}

export default App;
