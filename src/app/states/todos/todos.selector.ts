// todo.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todos.state';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);

export const selectStatusTodos = (completed: boolean) => createSelector(
  selectAllTodos,
  (todos) => todos.filter(todo => todo.completed === completed)
);

export const selectByIdTodo = (id: number) => createSelector(
    selectAllTodos,
    (todos) => todos.find(todo => todo.id === id)
  );

export const selectTodoCount = createSelector(
  selectAllTodos,
  (todos) => todos.length
);

export const selectLoading = createSelector(
  selectTodoState,
  (state: TodoState) => state.loading
);
