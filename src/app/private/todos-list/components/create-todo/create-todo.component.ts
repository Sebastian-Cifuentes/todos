import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/** Prime ng */
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

/** Components */
import { AddCollaboratorComponent } from '../add-collaborator/add-collaborator.component';
@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, CalendarModule, AddCollaboratorComponent],
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      collaborators: new FormArray([])
    });
  }

}
