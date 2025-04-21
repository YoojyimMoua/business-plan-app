import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePlansComponent } from './sample-plans.component';

describe('SamplePlansComponent', () => {
  let component: SamplePlansComponent;
  let fixture: ComponentFixture<SamplePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplePlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
