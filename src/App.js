import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

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
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId)
        return {
          ...todo,
          completed: !todo.completed
        }
        else {
          return todo
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
      todos: this.state.todos.filter(todo => {
        return !todo.completed
      })
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="todo-app">
        <svg viewBox="0 0 500 150">
        <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
        <text width="500" fill="white">
        <textPath href="#curve" className="heading">
          Take Note-Todo List
        </textPath>
        </text>
        </svg>
        
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo} clear={this.clearCompleted}/>
      </div>
      </div>
    );
  }
}

export default App;
