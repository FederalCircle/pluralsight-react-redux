import React from 'react'
import { connect, bindActionCreator } from 'react-redux'

class App extends React.Component {
  addTodo = (event) => {
    console.log(event);
  }
  render() {
    return (
      <div className="App">
        <h1>List</h1>
        <ul>
          {this.props.toDos.map((toDo) =>
            <li>{toDo.name}</li>
          )}
        </ul>
        <form onSubmit={this.addTodo}>
          <input type="text" name="title" />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    toDos: state.toDos,
  }
}

// function mapDispatchToProps() {
//   return {
//     actions: {
//       addToDo: bindActionCreator(),
//     },
//   }
// }

export default connect(mapStateToProps)(App)
