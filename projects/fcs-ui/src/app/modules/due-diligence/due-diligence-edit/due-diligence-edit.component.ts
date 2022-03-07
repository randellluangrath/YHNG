import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-due-diligence-edit',
  templateUrl: './due-diligence-edit.component.html',
  styleUrls: ['./due-diligence-edit.component.scss'],
})
export class DueDiligenceEditComponent implements OnInit {
  fgQuestion: FormGroup;
  fcQuestion: FormControl = new FormControl('');
  fcDescription: FormControl = new FormControl('');
  fcCategory: FormControl = new FormControl(null);

  categoryOptions: FieldOption<string>[] = [
    new FieldOption('List', DueDiligenceQuestionType.List),
    new FieldOption('Text', DueDiligenceQuestionType.Text),
    new FieldOption('Memo', DueDiligenceQuestionType.Memo),
    new FieldOption('Number', DueDiligenceQuestionType.Number),
    new FieldOption('Country', DueDiligenceQuestionType.Country),
    new FieldOption('State', DueDiligenceQuestionType.State),
    new FieldOption('Date', DueDiligenceQuestionType.Date),
    new FieldOption('NAICS', DueDiligenceQuestionType.Naics),
    new FieldOption('SOC', DueDiligenceQuestionType.Soc),
    new FieldOption('Range', DueDiligenceQuestionType.Range),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgQuestion = this.fb.group({
      fcQuestion: this.fcQuestion,
      fcDescription: this.fcDescription,
      fcCategory: this.fcCategory,
    });
  }
}

export enum DueDiligenceQuestionType {
  List = 'List',
  Text = 'Text',
  Memo = 'Memo',
  Number = 'Number',
  Country = 'Country',
  State = 'State',
  Date = 'Date',
  Naics = 'Naics',
  Soc = 'Soc',
  Range = 'Range',
}
