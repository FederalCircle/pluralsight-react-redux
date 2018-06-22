import React from 'react'
import Course from './Course'

function CourseList({ courses }) {
  return (
    <div className="CourseList">
      <h1>Course List</h1>
      {courses.map((course, id) => (
        <Course 
          key={ id }
          course={ course }
        />
      ))}
    </div>
  )
}

export default CourseList