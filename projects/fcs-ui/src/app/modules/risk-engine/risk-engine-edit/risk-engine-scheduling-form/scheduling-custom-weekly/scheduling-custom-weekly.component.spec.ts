import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingCustomWeeklyComponent } from './scheduling-custom-weekly.component';

describe('SchedulingCustomWeeklyComponent', () => {
  let component: SchedulingCustomWeeklyComponent;
  let fixture: ComponentFixture<SchedulingCustomWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingCustomWeeklyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingCustomWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
