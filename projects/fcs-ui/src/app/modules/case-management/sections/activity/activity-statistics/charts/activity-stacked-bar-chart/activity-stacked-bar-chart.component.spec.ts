import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStackedBarChartComponent } from './activity-stacked-bar-chart.component';

describe('ActivityStackedBarChartComponent', () => {
  let component: ActivityStackedBarChartComponent;
  let fixture: ComponentFixture<ActivityStackedBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityStackedBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStackedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
