import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as courseActions from './redux/actions/courseActions'

class App extends React.Component {
  addButtonClick = () => {
    const title = document.getElementById('title').value
    this.props.actions.createCourse({ title })
  }

  render() {
    return (
      <div className="App">
        <h1>Courses</h1>
        <ul>
          {this.props.courses.length > 0?
            this.props.courses.map((course, i) =>
              <li key={i}>{course.title}</li>
            ):
            <li>-- empty --</li>
          }
          {}
        </ul>
        <h3>Create courses</h3>
        <input type="text" id="title" />
        <button onClick={this.addButtonClick}>Add</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
