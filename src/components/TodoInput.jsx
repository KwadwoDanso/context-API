// TodoInput.jsx — add new todos
import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoInput() {
    const { addTodo } = useContext(TodoContext);
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-input">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
                aria-label="New todo"
            />
            <button type="submit">Add</button>
        </form>
    );
}
