// TodoItem.jsx — single todo with toggle / edit / delete
import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
    const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState(todo.text);

    const saveEdit = () => {
        editTodo(todo.id, draft);
        setEditing(false);
    };

    const cancelEdit = () => {
        setDraft(todo.text);
        setEditing(false);
    };

    return (
        <li className={`todo-item ${todo.completed ? "is-done" : ""}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                aria-label={`Mark ${todo.text} ${todo.completed ? "incomplete" : "complete"}`}
            />

            {editing ? (
                <input
                    type="text"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onBlur={saveEdit}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit();
                        if (e.key === "Escape") cancelEdit();
                    }}
                    autoFocus
                    className="todo-edit"
                />
            ) : (
                <span className="todo-text" onDoubleClick={() => setEditing(true)}>
                    {todo.text}
                </span>
            )}

            {!editing && (
                <button onClick={() => setEditing(true)} aria-label="Edit todo">Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)} aria-label="Delete todo">×</button>
        </li>
    );
}