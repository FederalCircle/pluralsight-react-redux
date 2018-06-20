import * as types from '../actions/actionTypes'

export default function toDoReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, Object.assign({}, action.toDo)]
    default:
      return state
  }
}
