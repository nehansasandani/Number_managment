import { Component } from '@angular/core';
import { NumberManagementFilters } from '../../components/number-management-form/number-management-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showBlockSelection = false;
  selectedFilters: NumberManagementFilters | null = null;

    // TEMPORARY - for previewing block-range-view only
  /*testSelectedBlock = 2259;
  showBlockRangeTest = true;*/

  onFormSearch(filters: NumberManagementFilters): void {
    this.selectedFilters = filters;
    this.showBlockSelection = true;
  }
}