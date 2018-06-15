import React from 'react'
import { connect, bindActionCreator } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    toDos: state.toDos,
  }
}

function mapDispatchToProps() {
  return {
    actions: {
      addToDo: bindActionCreator(),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
