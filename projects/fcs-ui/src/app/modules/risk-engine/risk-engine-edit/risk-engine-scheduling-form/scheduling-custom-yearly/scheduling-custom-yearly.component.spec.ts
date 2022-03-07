import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingCustomYearlyComponent } from './scheduling-custom-yearly.component';

describe('SchedulingCustomYearlyComponent', () => {
  let component: SchedulingCustomYearlyComponent;
  let fixture: ComponentFixture<SchedulingCustomYearlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingCustomYearlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingCustomYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
