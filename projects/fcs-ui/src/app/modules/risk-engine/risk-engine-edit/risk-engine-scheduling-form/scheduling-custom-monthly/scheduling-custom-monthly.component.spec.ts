import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingCustomMonthlyComponent } from './scheduling-custom-monthly.component';

describe('SchedulingCustomMonthlyComponent', () => {
  let component: SchedulingCustomMonthlyComponent;
  let fixture: ComponentFixture<SchedulingCustomMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingCustomMonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingCustomMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
