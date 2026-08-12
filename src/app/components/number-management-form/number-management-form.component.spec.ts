import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberManagementFormComponent } from './number-management-form.component';

describe('NumberManagementFormComponent', () => {
  let component: NumberManagementFormComponent;
  let fixture: ComponentFixture<NumberManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberManagementFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
