import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/** Prime ng */
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

/** Components */
import { AddCollaboratorComponent } from '../add-collaborator/add-collaborator.component';

/** Config */
import { Store } from '@ngrx/store';
import { selectByIdTodo } from '../../../../states/todos/todos.selector';
import { addTodo, loadTodoById, loadTodos } from '../../../../states/todos/todos.action';
import { Todo } from 'src/app/interfaces/todo.interface';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, CalendarModule, AddCollaboratorComponent, ButtonModule],
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  id!: string;
  todo$!: Observable<Todo | undefined>;
  todo!: Todo;
  form!: FormGroup;
  router = inject(Router);

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')!;

    if (this.id) {
      this.getById();
    }

    this.initForm();

  }

  getById() {
    this.store.dispatch(loadTodoById({ id: this.id }));
    this.todo$ = this.store.select(selectByIdTodo(this.id));
    this.todo$.subscribe(todo => {
      this.todo = todo!;
      this.initForm();
    })
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(this.todo ? this.todo.name : '', Validators.required),
      date: new FormControl(this.todo ? new Date(this.todo.date) : '', Validators.required),
      collaborators: new FormArray([])
    });
  }

  createTodo() {
    if (this.form.invalid) {
      return;
    }
    const todo: Todo = this.form.value;
    this.store.dispatch(addTodo({todo, loading: false}));
    this.router.navigateByUrl('todos');
  }

}
