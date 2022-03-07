import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectIndividualFormComponent } from './subject-individual-form.component';

describe('SubjectIndividualFormComponent', () => {
  let component: SubjectIndividualFormComponent;
  let fixture: ComponentFixture<SubjectIndividualFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectIndividualFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectIndividualFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
