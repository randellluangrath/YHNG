import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStatisticsFiltersComponent } from './activity-statistics-filters.component';

describe('ActivityStatisticsFiltersComponent', () => {
  let component: ActivityStatisticsFiltersComponent;
  let fixture: ComponentFixture<ActivityStatisticsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityStatisticsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStatisticsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
