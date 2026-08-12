import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { BlockNumber, BlockRangeDetail, BlockRangeSaveData } from './block-range.model';

//Mock data 
import { getMockBlockRangeDetail } from './block-range.mock';

@Component({
  selector: 'app-block-range-view',
  templateUrl: './block-range-view.component.html',
  styleUrls: ['./block-range-view.component.css']
})
export class BlockRangeViewComponent implements OnChanges {
  @Input() selectedBlock: number | null = null;

  @Output() save = new EventEmitter<BlockRangeSaveData>();
  @Output() cancel = new EventEmitter<void>();
  @Output() closePopup = new EventEmitter<void>();

  rangeDetail: BlockRangeDetail | null = null;

  comment = '';
  readonly maxCommentLength = 500;

  rangeFrom: number | null = null;
  rangeTo: number | null = null;

  //Backend API Call to be added.
  selectedCount = 0;

  currentPage = 1;
  itemsPerPage = 50;
  displayedNumbers: BlockNumber[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedBlock'] && this.selectedBlock !== null) {
      this.loadBlockRange();
    }
  }

  loadBlockRange(): void {
    if (this.selectedBlock === null) {
      return;
    }

    //Backend API Call to be added.
    this.rangeDetail = getMockBlockRangeDetail(this.selectedBlock);
    this.currentPage = 1;
    this.updateDisplayedNumbers();

  }

  updateDisplayedNumbers(): void {
    if (!this.rangeDetail) {
      this.displayedNumbers = [];
      return;
    }
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedNumbers = this.rangeDetail.numbers.slice(start, end);
  }

  get totalPages(): number {
    if (!this.rangeDetail) {
      return 1;
    }
    return Math.ceil(this.rangeDetail.numbers.length / this.itemsPerPage);
  }

  get pageNumbers(): (number | '...')[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const pages: (number | '...')[] = [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);

    if (current <= 3) {
      pages.push(2, 3, '...', total);
    } else if (current >= total - 2) {
      pages.push('...', total - 2, total - 1, total);
    } else {
      pages.push('...', current, '...', total);
    }

    return pages;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedNumbers();
    }
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  // Only computes once both From and To are filled in
  onRangeChange(): void {
    if (this.rangeFrom === null || this.rangeTo === null) {
      this.selectedCount = 0;
      return;
    }

    if (this.rangeTo < this.rangeFrom) {
      this.selectedCount = 0;
      return;
    }

    //Replaced with backend API call to get the count of numbers in the range.
    this.selectedCount = this.rangeTo - this.rangeFrom + 1;
  
  }

  onSave(): void {
    this.save.emit({
      selectedBlock: this.selectedBlock as number,
      comment: this.comment,
      rangeFrom: this.rangeFrom,
      rangeTo: this.rangeTo
    });
  }

  onCancel(): void {
    this.cancel.emit();
  }

  onClose(): void {
    this.closePopup.emit();
  }
}