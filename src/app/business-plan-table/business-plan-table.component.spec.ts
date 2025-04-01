import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlanTableComponent } from './business-plan-table.component';

describe('BusinessPlanTableComponent', () => {
  let component: BusinessPlanTableComponent;
  let fixture: ComponentFixture<BusinessPlanTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPlanTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPlanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
