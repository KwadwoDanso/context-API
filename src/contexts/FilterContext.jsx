// FilterContext.jsx — current visibility filter
import { createContext, useState, useMemo } from "react";

export const FILTERS = ["all", "active", "completed"];

export const FilterContext = createContext(null);

export function FilterProvider({ children }) {
    const [filter, setFilter] = useState("all");

    const value = useMemo(() => ({ filter, setFilter }), [filter]);

    return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}