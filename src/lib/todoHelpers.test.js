import {addTodo} from './todoHelpers'

// arrange portion of test
test('addTodo should add the passed todo to the list', () => {

  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {id:3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

// act 
  const result = addTodo(startTodos, newTodo)

  expect(result).toEqual(expected)

})


// arrange portion of test
test('addTodo should not mutate the exisiting todo array', () => {

  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {id:3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

// act 
  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos)

})

