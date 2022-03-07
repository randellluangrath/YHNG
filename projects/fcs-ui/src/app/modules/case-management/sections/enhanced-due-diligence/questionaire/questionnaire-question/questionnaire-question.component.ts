import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-questionnaire-question',
  templateUrl: './questionnaire-question.component.html',
  styleUrls: ['./questionnaire-question.component.scss'],
})
export class QuestionnaireQuestionComponent implements OnInit {
  @Input()
  question: string;

  @Input()
  control: FormControl;

  @Input()
  options: FieldOption<string | number>[] = [];

  @Input()
  type: QuestionnaireQuestionType = QuestionnaireQuestionType.Boolean;

  @Input()
  previousAnswer: string;

  QuestionnaireQuestionType = QuestionnaireQuestionType;

  constructor() {}

  ngOnInit(): void {}
}

export enum QuestionnaireQuestionType {
  Boolean,
  Text,
}
