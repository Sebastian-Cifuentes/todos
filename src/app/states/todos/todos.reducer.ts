// todo.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, loadTodosSuccess, editTodo, loadTodoByIdSuccess, editTodoSuccess } from './todos.action';
import { initialState } from './todos.state';

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),
  on(editTodo, (state) => ({
    ...state,
    loading: true
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(loadTodosSuccess, (state, { todos, loading }) => ({ ...state, todos, loading })),
  on(editTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: state.todos.map(t => t.id === todo.id ? todo : t),
    loading: false
  })),
);
