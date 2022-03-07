import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectIdentificationEditComponent } from './subject-identification-edit.component';

describe('SubjectIdentificationEditComponent', () => {
  let component: SubjectIdentificationEditComponent;
  let fixture: ComponentFixture<SubjectIdentificationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectIdentificationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectIdentificationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
