import "./ToDoListItem.css";

export default function ToDoListItem({ todo, index, toggleComplete, deleteTodo }) {
    return (
        <li
         className="ToDoListItem"
         style={{
            backgroundColor: index % 2 ? "lavender" : "plum"
         }}
        >
            <div className="flex-ctr-ctr">{index + 1}</div>
            <span style={{textDecoration: todo.completed && "line-through"}}>{todo.text}</span>
            <div>
                {todo.completed ? (
                    <button className="status-btn"onClick={() => deleteTodo(index)}>❌</button>
                )
                : (
                    <button className="status-btn"onClick ={() => toggleComplete(index)}>✔️</button>
                    
                )}
            </div>
        </li>
    );
}