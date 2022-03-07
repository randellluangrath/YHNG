import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldWarningComponent } from './form-field-warning.component';

describe('FormFieldWarningComponent', () => {
  let component: FormFieldWarningComponent;
  let fixture: ComponentFixture<FormFieldWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
