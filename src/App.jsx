// App.jsx — the whole UI
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Todos</h1>
        <ThemeToggleButton />
      </header>
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </main>
  );
}
