import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAlternateNameEditComponent } from './subject-alternate-name-edit.component';

describe('SubjectAlternateNameEditComponent', () => {
  let component: SubjectAlternateNameEditComponent;
  let fixture: ComponentFixture<SubjectAlternateNameEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAlternateNameEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAlternateNameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
