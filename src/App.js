import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId, findById, toggleTodo, updateTodo} from './lib/todoHelpers'
import {pipe, partial} from './lib/utils'

class App extends Component {
    state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an Awesome Project', isComplete: false},
        {id: 3, name: 'Ship It!', isComplete: false},
        {id: 4, name: 'Contribute to Open Source!', isComplete: false}
      ],
      currentTodo: '',
    }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todos)
    this.setState({ todos: updatedTodos })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })

    // Instead of ... use handle EmptySubmit
    //     if(this.state.currentTodo){
    //   const newId = generateId()
    //   const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    //   const updatedTodos = addTodo(this.state.todos, newTodo)
    //   this.setState({
    //     todos: updatedTodos,
    //     currentTodo: ''
    // })
    // } else {
    //   //
    // }
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo item'
    })
  }

  handleInputChange = (evt) => {
    this.setState({
        currentTodo: evt.target.value,
        errorMessage: ''
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
        {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo} 
            handleSubmit={submitHandler}/>
          <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>

      </div>
      </div>

    );
  }
}

export default App;
