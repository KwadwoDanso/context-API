// TodoContext.jsx — list of todos persisted to localStorage
import { createContext, useState, useEffect, useCallback, useMemo } from "react";

const STORAGE_KEY = "todos";

export const TodoContext = createContext(null);

export function TodoProvider({ children }) {
    // Lazy init — read from localStorage on first render
    const [todos, setTodos] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    // Persist on every change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);
    const addTodo = useCallback((text) => {
        const trimmed = text.trim();
        if (!trimmed) return;
        setTodos((prev) => [...prev, { id: Date.now() + Math.random(), text: trimmed, completed: false }]);
    }, []);

    const toggleTodo = useCallback((id) => {
        setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    }, []);

    const deleteTodo = useCallback((id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const editTodo = useCallback((id, newText) => {
        const trimmed = newText.trim();
        if (!trimmed) return;
        setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t)));
    }, []);

    const clearCompleted = useCallback(() => {
        setTodos((prev) => prev.filter((t) => !t.completed));
    }, []);

    // Memoize the context value so consumers don't re-render unless todos change
    const value = useMemo(
        () => ({ todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }),
        [todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted]
    );

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}