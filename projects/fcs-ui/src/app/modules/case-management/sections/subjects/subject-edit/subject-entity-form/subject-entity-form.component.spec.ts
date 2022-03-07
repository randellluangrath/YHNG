import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEntityFormComponent } from './subject-entity-form.component';

describe('SubjectEntityFormComponent', () => {
  let component: SubjectEntityFormComponent;
  let fixture: ComponentFixture<SubjectEntityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectEntityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectEntityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
