import React from 'react'
import {TodoItem} from './TodoItem.js'


export const TodoList = (props) => {
console.log(props);
  return(
      <div className="Todo-List">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo} /> )}
        </ul>

        </div>
    )

}