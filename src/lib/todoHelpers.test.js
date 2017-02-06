import {addTodo, findById, toggleTodo, updateTodo} from './todoHelpers'

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


test('findById should return the expected item from an array', () => {

  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const expected = {id:2, name: 'two', isComplete: false}
  // act 
  const result = findById(2, startTodos)

  expect(result).not.toBe(expected)

})

test('toggleTodo should toggle the isComplete prop of a todo', () => {

  const startTodo = {id:2, name: 'two', isComplete: false}

  const expected = {id:2, name: 'two', isComplete: true}

  const result = toggleTodo(startTodo)

  expect(result).toEqual(expected)

})


test('toggleTodo should not mutate the original todo', () => {

  const startTodo = {id:2, name: 'two', isComplete: false}

  const result = toggleTodo(startTodo)

  expect(result).not.toBe(startTodo)

})


test('updateTodo should not mutate the original todo', () => {

  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const updatedTodo = {id:2, name: 'two', isComplete: true}
  const expectedTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]

  // act 
  const result = updateTodo(startTodos, updatedTodo)

  expect(result).toEqual(expectedTodos)

})


test('updateTodo should not mutate the original array', () => {

  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const updatedTodo = {id:2, name: 'two', isComplete: true}
  // act 
  const result = updateTodo(startTodos, updatedTodo)

  expect(result).not.toBe(startTodos)

})

