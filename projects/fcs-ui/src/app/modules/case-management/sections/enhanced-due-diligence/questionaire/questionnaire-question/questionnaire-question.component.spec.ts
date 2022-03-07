import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireQuestionComponent } from './questionnaire-question.component';

describe('QuestionnaireQuestionComponent', () => {
  let component: QuestionnaireQuestionComponent;
  let fixture: ComponentFixture<QuestionnaireQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
