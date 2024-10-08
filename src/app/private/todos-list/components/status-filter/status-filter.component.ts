import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Prime ng */
import { DropdownModule } from 'primeng/dropdown';

/** Interfaces */
import { Filter } from '../../../../interfaces/filter.interfaces';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-status-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule],
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent {

  filters: Filter[] | undefined;
  selectedFilter: Filter | undefined;
  @Output()onfilter = new EventEmitter<any>();

  ngOnInit() {
    this.filters = [
        { name: 'Completadas', value: true },
        { name: 'Pendientes', value: false }
    ];
  }

  filter() {
    this.onfilter.emit(this.selectedFilter);
  }

}
