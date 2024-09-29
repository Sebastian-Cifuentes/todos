import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/** Prime ng */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

/** Components */
import { CollaboratorSkillsComponent } from '../collaborator-skills/collaborator-skills.component';

@Component({
  selector: 'app-add-collaborator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, CollaboratorSkillsComponent],
  templateUrl: './add-collaborator.component.html',
  styleUrls: ['./add-collaborator.component.css']
})
export class AddCollaboratorComponent {

  get collaborators(): FormArray {
    return this.form.get('collaborators') as FormArray;
  }

  form!: FormGroup;
  controlContainer = inject(ControlContainer);

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
  }

  addCollaborator() {
    this.collaborators.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        age: new FormControl('', Validators.required),
        skills: new FormArray([]),
      })
    )
  }

  deleteCollaborator(i: number) {
    this.collaborators.removeAt(i);
    this.collaborators.updateValueAndValidity();
  }

}
