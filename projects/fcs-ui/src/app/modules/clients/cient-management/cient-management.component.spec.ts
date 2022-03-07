import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientManagementComponent } from './cient-management.component';

describe('CientManagementComponent', () => {
  let component: CientManagementComponent;
  let fixture: ComponentFixture<CientManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CientManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CientManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
