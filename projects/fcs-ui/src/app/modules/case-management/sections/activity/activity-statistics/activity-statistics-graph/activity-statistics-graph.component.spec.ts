import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStatisticsGraphComponent } from './activity-statistics-graph.component';

describe('ActivityStatisticsGraphComponent', () => {
  let component: ActivityStatisticsGraphComponent;
  let fixture: ComponentFixture<ActivityStatisticsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityStatisticsGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStatisticsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
