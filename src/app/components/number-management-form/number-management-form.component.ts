import { Component, EventEmitter, Output } from '@angular/core';

export interface NumberManagementFilters {
  numberLevel: string;
  LEA: string;   
}

@Component({
  selector: 'app-number-management-form',
  templateUrl: './number-management-form.component.html',
  styleUrls: ['./number-management-form.component.css']
})
export class NumberManagementFormComponent {
  selectedNumberLevel = '';
  selectedLEA = '';   

  @Output() search = new EventEmitter<NumberManagementFilters>();

  onSearch(): void {
    this.search.emit({
      numberLevel: this.selectedNumberLevel,
      LEA: this.selectedLEA   
    });
  }
}