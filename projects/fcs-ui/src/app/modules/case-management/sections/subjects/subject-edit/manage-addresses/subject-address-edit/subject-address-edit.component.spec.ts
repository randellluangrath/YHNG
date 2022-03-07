import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddressEditComponent } from './subject-address-edit.component';

describe('SubjectAddressEditComponent', () => {
  let component: SubjectAddressEditComponent;
  let fixture: ComponentFixture<SubjectAddressEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAddressEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAddressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
