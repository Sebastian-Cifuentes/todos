import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/** Prime ng */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

/** Components */
import { CollaboratorSkillsComponent } from '../collaborator-skills/collaborator-skills.component';
import { Collaborator } from '../../../../interfaces/todo.interface';

@Component({
  selector: 'app-add-collaborator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, CollaboratorSkillsComponent],
  templateUrl: './add-collaborator.component.html',
  styleUrls: ['./add-collaborator.component.css']
})
export class AddCollaboratorComponent {

  @Input()collaborators: Collaborator[] = [];

  get collaboratorsForm(): FormArray {
    return this.form.get('collaborators') as FormArray;
  }

  form!: FormGroup;
  controlContainer = inject(ControlContainer);

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
    console.log(this.form);
    if (this.collaborators && this.collaborators!.length > 0) {
      this.setForm();
    }
  }

  setForm() {
    this.collaborators!.forEach(collaborator => {
      this.addCollaborator(collaborator);
    });
  }

  addCollaborator(collaborator?: Collaborator) {
    this.collaboratorsForm.push(
      new FormGroup({
        name: new FormControl(collaborator ? collaborator.name : '', Validators.required),
        age: new FormControl(collaborator ? collaborator.age : '', Validators.required),
        skills: new FormArray([]),
      })
    );
  }

  deleteCollaborator(i: number) {
    this.collaboratorsForm.removeAt(i);
    this.collaboratorsForm.updateValueAndValidity();
  }

}
