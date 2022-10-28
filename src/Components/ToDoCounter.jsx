import React from 'react'

function ToDoCounter({completed,total}) {
  return (
<h1> {completed} / {total} Tasks completed</h1>
)}

export {ToDoCounter};