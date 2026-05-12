// FilterButtons.jsx — All / Active / Completed
import { useContext } from "react";
import { FilterContext, FILTERS } from "../contexts/FilterContext";

export default function FilterButtons() {
    const { filter, setFilter } = useContext(FilterContext);

    return (
        <div className="filter-buttons" role="group" aria-label="Filter todos">
            {FILTERS.map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                    className={filter === f ? "is-active" : ""}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    );
}