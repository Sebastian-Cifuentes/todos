import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ControlContainer, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

/** Prime ng */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-collaborator-skills',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './collaborator-skills.component.html',
  styleUrls: ['./collaborator-skills.component.css']
})
export class CollaboratorSkillsComponent {

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  form!: FormGroup;
  controlContainer = inject(ControlContainer);

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
  }

  addSkill() {
    this.skills.push(
      new FormGroup({
        skill: new FormControl('', Validators.required)
      })
    )
  }

  deleteSkill(i: number) {
    this.skills.removeAt(i);
    this.skills.updateValueAndValidity();
  }


}
