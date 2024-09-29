import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Prime ng */
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

/** Components */
import { StatusFilterComponent } from './components/status-filter/status-filter.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, PanelModule, ButtonModule, StatusFilterComponent],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {

}
