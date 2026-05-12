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
