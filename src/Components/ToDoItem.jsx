import React from 'react'
import './ToDoItem.css'

function ToDoItem(props) {
    const markCompleted =()=>{
        alert(`Completed ${props.text}`)
    }
    const deleteToDo =()=>{
        alert(`Deleted ${props.text}`)
    }

  return (
    <li className='to-do-item'>
        <span onClick={markCompleted} className='to-do-item-delete'>Delete</span>
        <p className={`to-do-item-p-${props.state}`}>
            {props.text}
        </p>
        <span onClick={deleteToDo} className='to-do-item-check'>Done</span>
    </li>
    
)}

export {ToDoItem};