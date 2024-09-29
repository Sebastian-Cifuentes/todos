import { createAction, props } from '@ngrx/store';
import { Todo } from '../../interfaces/todo.interface';

export const addTodo = createAction('[TODO] Add Todo', props<{ todo: Todo, loading: true }>());
export const addTodoSuccess = createAction('[TODO] Add Todo Success', props<{ todo: Todo, loading: false }>());
export const removeTodo = createAction('[TODO] Remove Todo', props<{ id: number, loading: true }>());
export const removeTodSuccess = createAction('[TODO] Remove Todo Success', props<{ loading: false }>());
export const loadTodos = createAction('[TODO] Load Todos');
export const loadTodosSuccess = createAction('[TODO] Load Todos Success', props<{ todos: Todo[], loading: boolean  }>());
export const toggleTodo = createAction('[TODO] Toggle Todo', props<{ id: number }>());