import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDiligenceManagementComponent } from './due-diligence-management.component';

describe('DueDiligenceManagementComponent', () => {
  let component: DueDiligenceManagementComponent;
  let fixture: ComponentFixture<DueDiligenceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueDiligenceManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DueDiligenceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
