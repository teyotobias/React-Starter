import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css"
export default function ToDoList({ todos, toggleComplete, deleteTodo }) {
    return (
        <ul className="ToDoList">
            {todos.map((t, idx) => (
                <ToDoListItem todo={t} key={idx} index={idx} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
}