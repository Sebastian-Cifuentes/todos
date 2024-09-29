// todo.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, loadTodosSuccess, toggleTodo, loadTodos } from './todos.action';
import { initialState } from './todos.state';

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  // on(loadTodos, (state, { todos }) => ({ ...state, todos })),
  on(loadTodosSuccess, (state, { todos, loading }) => ({ ...state, todos })),
  on(toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  }))
);
