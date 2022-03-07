import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseManagementNavigationComponent } from './case-management-navigation.component';

describe('CaseManagementNavigationComponent', () => {
  let component: CaseManagementNavigationComponent;
  let fixture: ComponentFixture<CaseManagementNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseManagementNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseManagementNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
