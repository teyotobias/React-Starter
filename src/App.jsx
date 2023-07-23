import './styles.css'
import './App.css'
import ToDoList from "./ToDoList";
import { useState } from "react";
import NewToDoForm from './NewToDoForm';



export default function App() {
  //array destructuring assignment below. First param is data, second param is data manipulation function
  const [todos, setTodos] = useState([
    {text: "Have fun", completed: false},
    {text: "Learn React", completed: false},
    {text: "Learn the MERN-Stack", completed: false}
  ]);
  const [showTodos, setShowTodos] = useState(true);

  function toggleComplete(index) {
    setTodos(todos.map((todo, i) => {
      if (i === index) {
        return {...todo, completed: !todo.completed}
      }
      else {
        return todo;
      }
    }));
  }

  function deleteTodo(index) {
    setTodos(todos.filter((todo, i) => i !== index))
  }

  function addToDo(todo) {
    setTodos([...todos, todo]);
  }
  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE': 'SHOW'}</button>
      {showTodos && <ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />}
      <hr />
      <NewToDoForm addToDo={addToDo}/>
    </div>
  );
}

