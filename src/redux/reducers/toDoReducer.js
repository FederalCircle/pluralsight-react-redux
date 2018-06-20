export default function toDoReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, Object.assign({}, action.toDo)]
    default:
      return state
  }
}
