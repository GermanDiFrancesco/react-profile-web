import React from 'react'
import { ToDoCounter } from './Components/ToDoCounter'
import { ToDoSearch } from './Components/ToDoSearch'
import { ToDoList } from './Components/ToDoList'
import { ToDoItem } from './Components/ToDoItem'
import { CreateToDo } from './Components/CreateToDo'
import './App.css'

const defaultTodos = [
  {text:'Cortar cebolla', state:'completed'},
  {text:'aprender react', state:'incompleted'},
  {text:'hacer un to do list', state:'incompleted'}
]
function App() {
  const [toDos, setToDos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');
  let completedToDos = toDos.filter(todo => todo.state =='completed').length;
  let totalToDos = toDos.length; 

  let searchedToDos =[];
  
  if (!searchValue.length >= 1){
    searchedToDos = toDos;
  }else{
    searchedToDos = toDos.filter( todo =>{
      const todoText= todo.text.toLowerCase();
      const searchText= searchValue.toLowerCase();
      return todoText.includes(searchText)
    } )

  }
  return (
    <React.Fragment>

      <ToDoCounter completed={completedToDos} total={totalToDos}/>

      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      
      <ToDoList>
        {searchedToDos.map( todo =>(
          <ToDoItem key={todo.text} text={todo.text} state={todo.state} />
        ))}
      </ToDoList>

      <CreateToDo />

    </React.Fragment>
  )
}

export default App
