import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPhoneEditComponent } from './subject-phone-edit.component';

describe('SubjectPhoneEditComponent', () => {
  let component: SubjectPhoneEditComponent;
  let fixture: ComponentFixture<SubjectPhoneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPhoneEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPhoneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
