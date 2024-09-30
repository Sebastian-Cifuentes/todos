import { createAction, props } from '@ngrx/store';
import { Todo } from '../../interfaces/todo.interface';

export const addTodo = createAction('[TODO] Add Todo', props<{ todo: Todo, loading: boolean }>());
export const addTodoSuccess = createAction('[TODO] Add Todo Success', props<{ todo: Todo, loading: boolean }>());
export const removeTodo = createAction('[TODO] Remove Todo', props<{ id: string}>());
export const removeTodSuccess = createAction('[TODO] Remove Todo Success');
export const loadTodos = createAction('[TODO] Load Todos');
export const loadTodosSuccess = createAction('[TODO] Load Todos Success', props<{ todos: Todo[], loading: boolean  }>());
export const loadTodoById = createAction('[TODO] Load Todo by id', props<{ id: string }>());
export const loadTodoByIdSuccess = createAction('[TODO] Load Todo by id Success', props<{ todos: Todo[], loading: boolean  }>());
export const editTodo = createAction('[Todo] Edit Todo',props<{ todo: Todo }>());
export const editTodoSuccess = createAction('[Todo] Edit Todo Success',props<{ todo: Todo }>());