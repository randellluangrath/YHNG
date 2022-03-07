import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStatisticsOptionsComponent } from './activity-statistics-options.component';

describe('ActivityStatisticsOptionsComponent', () => {
  let component: ActivityStatisticsOptionsComponent;
  let fixture: ComponentFixture<ActivityStatisticsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityStatisticsOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStatisticsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
