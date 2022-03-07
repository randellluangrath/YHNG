import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingCustomDailyComponent } from './scheduling-custom-daily.component';

describe('SchedulingCustomDailyComponent', () => {
  let component: SchedulingCustomDailyComponent;
  let fixture: ComponentFixture<SchedulingCustomDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingCustomDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingCustomDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
