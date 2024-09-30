import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, distinctUntilChanged, map, mergeMap, switchMap } from 'rxjs/operators';
import { loadTodos, loadTodosSuccess, addTodo, addTodoSuccess, removeTodSuccess, removeTodo, loadTodoById, loadTodoByIdSuccess, editTodo, editTodoSuccess } from './todos.action';
import { TodosService } from '../../services/todos.service';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodosService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
            map((data) => loadTodosSuccess({ todos: data, loading: false }))
        )
      )
    )
  );

  loadTodoById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodoById),
      mergeMap(({id}) =>
        this.todoService.getTodo(id).pipe(
          map((todo) => {
            return loadTodosSuccess({ todos: [todo], loading: false })
          })
        )
      )
    )
  );

  addTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodo),
      mergeMap(({todo}) =>
        this.todoService.addTodo(todo).pipe(
            map(() => addTodoSuccess({ todo, loading: false }))
        )
      )
    )
  );

  editTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editTodo),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(action =>
        this.todoService.editTodo(action.todo.id, action.todo).pipe(
          map((updatedTodo: any) => editTodoSuccess({ todo: updatedTodo }))
        )
      )
    )
  );
  
  removeTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeTodo),
      mergeMap(({id}) =>
        this.todoService.deleteTodo(id).pipe(
            map(() => removeTodSuccess())
        )
      )
    )
  );
}
