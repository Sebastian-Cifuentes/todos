import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ControlContainer, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

/** Prime ng */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Skill } from '../../../../interfaces/todo.interface';

@Component({
  selector: 'app-collaborator-skills',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './collaborator-skills.component.html',
  styleUrls: ['./collaborator-skills.component.css']
})
export class CollaboratorSkillsComponent {

  @Input()skills: Skill[] | undefined = [];

  get skillsForm(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  form!: FormGroup;
  controlContainer = inject(ControlContainer);

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
    if (this.skills!.length > 0) {
      this.setForm();
    }
  }

  setForm() {
    this.skills!.forEach(skill => {
      this.addSkill(skill);
    });
  }

  addSkill(skill?: Skill) {
    this.skillsForm.push(
      new FormGroup({
        name: new FormControl(skill ? skill.name : '', Validators.required)
      })
    )
  }

  deleteSkill(i: number) {
    this.skillsForm.removeAt(i);
    this.skillsForm.updateValueAndValidity();
  }


}
