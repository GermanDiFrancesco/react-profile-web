import React from 'react'
import './ToDoSearch.css'

function ToDoSearch({searchValue, setSearchValue}) {

const searchFilter = (event)=>{  
 console.log(event.target.value)
 setSearchValue(event.target.value)
}

  return (
    <input onChange={searchFilter} value={searchValue} className='search-input' type="text" placeholder='Search tasks' />
  )
}

export {ToDoSearch};