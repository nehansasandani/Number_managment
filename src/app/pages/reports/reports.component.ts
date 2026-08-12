import { Component } from '@angular/core';
import { ReportsService } from './reports.service';
import { ActivityLog } from './reports.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  selectedR = '';
  selectedNumberLevel = '';
  selectedBlockSize = '';
  selectedDate = '';

  displayedLogs: ActivityLog[] = [];
  currentPage = 1;
  pageSize = 10;
  totalEntries = 0;
  totalPages = 1;

  loading = false;
  error = false;
  hasSearched = false;

  constructor(private reportsService: ReportsService) {}

  search(): void {
    this.currentPage = 1;
    this.fetchLogs();
  }

  fetchLogs(): void {
    this.loading = true;
    this.error = false;
    this.hasSearched = true;

    this.reportsService.getEntries({
      r: this.selectedR,
      numberLevel: this.selectedNumberLevel,
      blockSize: this.selectedBlockSize,
      date: this.selectedDate,
      page: this.currentPage,
      pageSize: this.pageSize
    }).subscribe({
      next: (res) => {
        this.displayedLogs = res.data;
        this.totalEntries = res.totalEntries;
        this.totalPages = Math.ceil(res.totalEntries / this.pageSize);
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchLogs();
    }
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  get startIndex(): number {
    return this.totalEntries === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
  }

  get endIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalEntries);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}