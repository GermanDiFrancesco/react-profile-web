import React from 'react'
import './CreateToDo.css'

function CreateToDo() {
    const popupCreate = ()=>{
        alert('open')
    }
  return (
    <button onClick={popupCreate} className='create-to-do'>+</button>
    )}

export {CreateToDo};