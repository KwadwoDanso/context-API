# Todo Context Lab

A simple Todo application built with React using the Context API for state management. Three independent contexts manage todos, the visibility filter, and the theme. Todos and theme persist to localStorage.

## Table of contents

- [Overview](#overview)
- [How to run](#how-to-run)
- [Features](#features)
- [Architecture](#architecture)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## Overview

Plain JavaScript, no TypeScript, no extra libraries. Three contexts:

- TodoContext — list of todos, with add/toggle/delete/edit/clearCompleted actions
- FilterContext — current visibility filter (all / active / completed)
- ThemeContext — light or dark theme

Todos and theme are persisted to localStorage and rehydrated on page load. Context values are memoized with useMemo and action functions with useCallback so consumers don't re-render unnecessarily.

## How to run

```bash
npm install
npm run dev
```

## Features

- Add a todo via the input form
- Toggle completion with the checkbox
- Edit by double-clicking the text (or hitting the Edit button); Enter saves, Escape cancels
- Delete individual todos with the × button
- Clear all completed todos at once
- Filter by All / Active / Completed
- Toggle between light and dark themes
- Todos and theme persist across page reloads



## Built with

- React (useState, useEffect, useContext, useCallback, useMemo)
- Vite 
- localStorage for persistence
- Plain CSS with custom properties for theming

## What I learned

- Context is just a value-passing channel. createContext() makes a channel, <Provider value={...}> puts a value on it, and useContext() reads it. The "global state" feel comes entirely from where you put the Provider — wrap your whole app and any descendant can read it.
- Splitting contexts limits re-renders. Putting todos, filter, and theme in three separate contexts means changing the filter doesn't re-render components that only read theme. One big context would re-render everything every time anything changes.
- useMemo on the context value matters. Without it, every render of the Provider creates a new value object reference, which makes every consumer re-render even if the underlying data didn't change.
- useCallback keeps action functions stable. When addTodo, toggleTodo, etc. are wrapped in useCallback, their references stay the same across renders. Combined with the memoized context value, this means consumers only re-render when state actually changes.
- Persistence is just two useEffects. One reads from localStorage on mount (via lazy useState initializer), one writes on every change. The browser handles the storage; React handles the timing.

## Author

- Kwadwo Danso
- GitHub: [KwadwoDanso](https://github.com/KwadwoDanso)

## Acknowledgement
- Per Scholas Advanced React module
- React dev
- AI assistance for the CSS 
