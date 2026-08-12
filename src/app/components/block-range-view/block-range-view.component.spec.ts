import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockRangeViewComponent } from './block-range-view.component';

describe('BlockRangeViewComponent', () => {
  let component: BlockRangeViewComponent;
  let fixture: ComponentFixture<BlockRangeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockRangeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockRangeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
