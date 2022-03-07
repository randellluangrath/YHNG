import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';
import { QuestionnaireQuestionType } from './questionnaire-question/questionnaire-question.component';

@Component({
  selector: 'yh-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  fgQuestions: FormGroup;
  fcQuestionA: FormControl = new FormControl();
  fcQuestionA1: FormControl = new FormControl();
  fcQuestionAExplanation: FormControl = new FormControl();
  fcQuestionB: FormControl = new FormControl();
  fcQuestionBExplanation: FormControl = new FormControl();
  fcQuestionC: FormControl = new FormControl();
  fcQuestionCExplanation: FormControl = new FormControl();
  fcQuestionD: FormControl = new FormControl();
  fcQuestionDExplanation: FormControl = new FormControl();
  fcQuestionE: FormControl = new FormControl();
  fcQuestionE1: FormControl = new FormControl();
  fcQuestionF: FormControl = new FormControl();
  fcQuestionG: FormControl = new FormControl();
  fcQuestionH: FormControl = new FormControl();
  fcQuestionI: FormControl = new FormControl();
  fcQuestionJ: FormControl = new FormControl();
  fcQuestionK: FormControl = new FormControl();
  fcQuestionL: FormControl = new FormControl();
  fcQuestionM: FormControl = new FormControl();
  fcQuestionN: FormControl = new FormControl();
  fcQuestionO: FormControl = new FormControl();
  fcQuestionP: FormControl = new FormControl();

  yesNoOptions: FieldOption<number>[] = [
    new FieldOption('Yes', 1),
    new FieldOption('No', 0),
  ];

  QuestionnaireQuestionType = QuestionnaireQuestionType;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgQuestions = this.fb.group({
      fcQuestionA: this.fcQuestionA,
      fcQuestionA1: this.fcQuestionA1,
      fcQuestionAExplanation: this.fcQuestionAExplanation,
      fcQuestionB: this.fcQuestionB,
      fcQuestionBExplanation: this.fcQuestionAExplanation,
      fcQuestionC: this.fcQuestionC,
      fcQuestionCExplanation: this.fcQuestionAExplanation,
      fcQuestionD: this.fcQuestionD,
      fcQuestionDExplanation: this.fcQuestionAExplanation,
      fcQuestionE: this.fcQuestionE,
      fcQuestionE1: this.fcQuestionE1,
      fcQuestionF: this.fcQuestionF,
      fcQuestionG: this.fcQuestionG,
      fcQuestionH: this.fcQuestionH,
      fcQuestionI: this.fcQuestionI,
      fcQuestionJ: this.fcQuestionJ,
      fcQuestionK: this.fcQuestionK,
      fcQuestionL: this.fcQuestionL,
      fcQuestionM: this.fcQuestionM,
      fcQuestionN: this.fcQuestionN,
      fcQuestionO: this.fcQuestionO,
      fcQuestionP: this.fcQuestionP,
    });
  }
}
