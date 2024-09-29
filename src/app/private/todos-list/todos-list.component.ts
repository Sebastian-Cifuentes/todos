import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Prime ng */
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

/** Components */
import { StatusFilterComponent } from './components/status-filter/status-filter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, PanelModule, ButtonModule, StatusFilterComponent],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {

  router = inject(Router);

  createTodo() {
    this.router.navigateByUrl('/add-todo');
  }

}
