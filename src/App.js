import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as toDoActions from './redux/actions/toDoActions'

class App extends React.Component {
  addTodo = () => {
    const title = document.getElementById('title').value
    this.props.actions.addToDo({ title })
  }

  render() {
    return (
      <div className="App">
        <h1>List</h1>
        <ul>
          {this.props.toDos.map((toDo, i) =>
            <li key={i}>{toDo.title}</li>
          )}
        </ul>
        <input type="text" id="title"/>
        <button onClick={this.addTodo}>Add</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    toDos: state.toDos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(toDoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
