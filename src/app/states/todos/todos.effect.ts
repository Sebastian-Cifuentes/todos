import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { loadTodos, loadTodosSuccess, addTodo, addTodoSuccess, removeTodSuccess, removeTodo } from './todos.action';
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
  
  removeTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeTodo),
      mergeMap(({id}) =>
        this.todoService.deleteTodo(id).pipe(
            map(() => removeTodSuccess({ loading: false }))
        )
      )
    )
  );
}
