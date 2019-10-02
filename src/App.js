import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
const todoList = [
  {
    item: "Example",
    id: Date.now(),
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: todoList
    }
  }
  
  toggleCompleted = (event, todoId) => {
    this.setState({
      todos: this.state.todos.map(task => {
        if (task.id === todoId)
        return {
          ...task,
          completed: !task.completed
        }
        else {
          return task
        }
      })
    })
  }
  addTodo = (event, todoItem) => {
    event.preventDefault()
    const newTodo = {
      item: todoItem,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  clearCompleted = event => {
    event.preventDefault()
    this.setState({
      todos: this.state.todos.filter(task => {
        return !task.completed
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
