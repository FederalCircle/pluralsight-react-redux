import * as types from './actionTypes'

export function addToDo(toDo) {
  return { type: types.ADD_TODO, toDo }
}
