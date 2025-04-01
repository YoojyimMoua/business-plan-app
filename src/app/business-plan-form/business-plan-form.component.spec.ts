import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlanFormComponent } from './business-plan-form.component';

describe('BusinessPlanFormComponent', () => {
  let component: BusinessPlanFormComponent;
  let fixture: ComponentFixture<BusinessPlanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPlanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
