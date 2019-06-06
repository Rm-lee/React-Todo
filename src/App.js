import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const listoftodos = [];
class App extends React.Component {
  constructor(props){
    super(props);
   
      // you will need a place to store your state in this component.
      // design `App` to be the parent component of your application.
      // this component is going to take care of state, and any change handlers you need to work with your state
     this.state = {   
    todos: listoftodos,
    task:''
    
    
  };
  }
  
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
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

  render() {
    return (
      <div>
      <TodoList todos={this.state.todos} toggleCompleted={this.toggleItem} />
      <TodoForm value={this.state.todo} changeHandler={this.changeHandler} addNewItem={this.addItem}/>
    </div>
    );
  }
}

export default App;
