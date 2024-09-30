import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

/** Prime ng */
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

/** Components */
import { StatusFilterComponent } from './components/status-filter/status-filter.component';

/** Config */
import { Store } from '@ngrx/store';
import { selectAllTodos, selectStatusTodos } from '../../states/todos/todos.selector';
import { editTodo, loadTodos, removeTodo } from '../../states/todos/todos.action';
import { Todo } from 'src/app/interfaces/todo.interface';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/interfaces/filter.interfaces';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, InputSwitchModule, StatusFilterComponent, FormsModule],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {

  todos$ = this.store.select(selectAllTodos);
  filtertodos$!: Observable<Todo[]>;

  router = inject(Router);

  constructor(private store: Store) {
  }
  
  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  toggleTodo(todo: Todo) {
    this.store.dispatch(editTodo({todo: {...todo, completed: !todo.completed}}));
  }

  removeTodo(id: string) {
    this.store.dispatch(removeTodo({id}));
  }

  createTodo() {
    this.router.navigateByUrl('/add-todo');
  }
  
  editTodo(id: string) {
    this.router.navigate(['/edit-todo', id]);
  }

  filter(filter: Filter) {
    this.todos$ = this.store.select(selectStatusTodos(filter.value));
  }

}
