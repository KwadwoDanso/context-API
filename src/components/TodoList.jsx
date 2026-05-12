// TodoList.jsx — applies the filter and renders todos
import { useContext, useMemo } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { FilterContext } from "../contexts/FilterContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { todos, clearCompleted } = useContext(TodoContext);
    const { filter } = useContext(FilterContext);

    const visibleTodos = useMemo(() => {
        if (filter === "active") return todos.filter((t) => !t.completed);
        if (filter === "completed") return todos.filter((t) => t.completed);
        return todos;
    }, [todos, filter]);

    const activeCount = todos.filter((t) => !t.completed).length;
    const completedCount = todos.length - activeCount;

    return (
        <section className="todo-list-section">
            {visibleTodos.length === 0 ? (
                <p className="todo-empty">Nothing to show.</p>
            ) : (
                <ul className="todo-list">
                    {visibleTodos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            )}

            <footer className="todo-footer">
                <span>{activeCount} active</span>
                {completedCount > 0 && (
                    <button onClick={clearCompleted}>Clear completed ({completedCount})</button>
                )}
            </footer>
        </section>
    );
}