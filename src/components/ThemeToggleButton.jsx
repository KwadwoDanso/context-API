// ThemeToggleButton.jsx — flips light/dark
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
}
