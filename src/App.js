import './App.css';
import ToDoList from "./ToDoList";

const todos = [
  'Have Fun',
  'Learn React',
  'Learn the MERN-stack'
];

export default function App() {
  return (
    <div className="App">
      <h1>React To-Do</h1>
      <ToDoList todos={todos} />
    </div>
  );
}

