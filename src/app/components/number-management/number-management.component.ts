import { Component, OnInit } from '@angular/core';

interface NumberBlock {
  id: number;
  areaCode: string;
}

@Component({
  selector: 'app-number-management',
  templateUrl: './number-management.component.html',
  styleUrls: ['./number-management.component.css']
})
export class NumberManagementComponent implements OnInit {
  numberLevels = ['FTHH', 'STHH', 'THIRD'];
  leas = ['KLY', 'CMB', 'JNP', 'KTY'];
  
  selectedLevel: string = 'FTHH';
  selectedLea: string = 'KLY';
  selectedAreaCode: string = '037';
  selectedBlock: number | null = 225;
  
  blocksPerPage: number = 50;
  currentPage: number = 1;
  
  numberBlocks: NumberBlock[] = [];
  displayedBlocks: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initializeBlocks();
  }

  initializeBlocks(): void {
    // Generate sample blocks from 201 to 300
    this.numberBlocks = Array.from({ length: 100 }, (_, i) => ({
      id: 201 + i,
      areaCode: this.selectedAreaCode
    }));
    this.updateDisplayedBlocks();
  }

  updateDisplayedBlocks(): void {
    const start = (this.currentPage - 1) * this.blocksPerPage;
    const end = start + this.blocksPerPage;
    this.displayedBlocks = this.numberBlocks
      .slice(start, end)
      .map(block => block.id);
  }

  selectBlock(blockId: number): void {
    this.selectedBlock = blockId;
  }

  search(): void {
    console.log('Search for:', {
      level: this.selectedLevel,
      lea: this.selectedLea,
      areaCode: this.selectedAreaCode
    });
    // Implement search logic here
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedBlocks();
    }
  }

  nextPage(): void {
    const maxPages = Math.ceil(this.numberBlocks.length / this.blocksPerPage);
    if (this.currentPage < maxPages) {
      this.currentPage++;
      this.updateDisplayedBlocks();
    }
  }
}
