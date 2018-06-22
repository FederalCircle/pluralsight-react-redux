import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as courseActions from '../../redux/actions/courseActions'
import CourseList from '../../components/Courses/CourseList'

class Courses extends React.Component {
  addButtonClick = () => {
    const inputElement = document.getElementById('title')
    const title = inputElement.value
    inputElement.value = ""
    this.props.actions.createCourse({ title })
  }

  render() {
    return (
      <div className="Courses">
        <CourseList courses={ this.props.courses } />
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

export default connect(mapStateToProps, mapDispatchToProps)(Courses)
