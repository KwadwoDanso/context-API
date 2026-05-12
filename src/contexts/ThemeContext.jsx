// ThemeContext.jsx — light/dark theme persisted to localStorage
import { createContext, useState, useEffect, useCallback, useMemo } from "react";

const STORAGE_KEY = "theme";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem(STORAGE_KEY) || "light";
        } catch {
            return "light";
        }
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme);
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((t) => (t === "light" ? "dark" : "light"));
    }, []);

    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
