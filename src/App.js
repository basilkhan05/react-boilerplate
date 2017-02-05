import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId} from './lib/todoHelpers'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an Awesome Project', isComplete: false},
        {id: 3, name: 'Ship It!', isComplete: false},
        {id: 4, name: 'Contribute to Open Source!', isComplete: false}
      ],
      currentTodo: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this);

  }

  handleSubmit(evt) {
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

  handleEmptySubmit(evt){
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo item'
    })
  }

  handleInputChange (evt) {
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
          <TodoList todos={this.state.todos}/>

      </div>
      </div>

    );
  }
}

export default App;
