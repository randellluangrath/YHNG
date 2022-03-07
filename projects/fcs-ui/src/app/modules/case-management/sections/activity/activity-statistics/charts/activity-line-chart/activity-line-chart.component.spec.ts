import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLineChartComponent } from './activity-line-chart.component';

describe('ActivityLineChartComponent', () => {
  let component: ActivityLineChartComponent;
  let fixture: ComponentFixture<ActivityLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
