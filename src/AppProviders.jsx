// AppProviders.jsx — nests all three providers
import { TodoProvider } from "./contexts/TodoContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function AppProviders({ children }) {
    return (
        <ThemeProvider>
            <FilterProvider>
                <TodoProvider>{children}</TodoProvider>
            </FilterProvider>
        </ThemeProvider>
    );
}
