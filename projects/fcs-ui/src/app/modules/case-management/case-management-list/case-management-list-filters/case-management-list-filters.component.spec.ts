import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseManagementListFiltersComponent } from './case-management-list-filters.component';

describe('CaseManagementListFiltersComponent', () => {
  let component: CaseManagementListFiltersComponent;
  let fixture: ComponentFixture<CaseManagementListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseManagementListFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseManagementListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
