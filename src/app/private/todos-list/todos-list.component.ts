import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Prime ng */
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

/** Components */
import { StatusFilterComponent } from './components/status-filter/status-filter.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.interface';
import { Store } from '@ngrx/store';
import { selectAllTodos } from 'src/app/states/todos/todos.selector';
import { loadTodos } from 'src/app/states/todos/todos.action';
import { TodoState } from 'src/app/states/todos/todos.state';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, PanelModule, ButtonModule, StatusFilterComponent],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {

  todos$ = this.store.select(selectAllTodos);

  router = inject(Router);

  constructor(private store: Store) {
    // Select all todos from the store
    this.todos$ = this.store.select(selectAllTodos);
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.dispatch(loadTodos());
  }

  createTodo() {
    this.router.navigateByUrl('/add-todo');
  }

}
