import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EddSchedulingManagementComponent } from './edd-scheduling-management.component';

describe('EddSchedulingManagementComponent', () => {
  let component: EddSchedulingManagementComponent;
  let fixture: ComponentFixture<EddSchedulingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EddSchedulingManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EddSchedulingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
