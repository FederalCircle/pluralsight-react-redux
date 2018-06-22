import React from 'react'

function Course({ course }) {
  return (
    <div className="Course">
      <strong>Title:</strong> { course.title }
    </div>
  )
}

export default Course