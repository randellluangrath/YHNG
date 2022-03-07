import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-case-management-list-filters',
  templateUrl: './case-management-list-filters.component.html',
  styleUrls: ['./case-management-list-filters.component.scss'],
})
export class CaseManagementListFiltersComponent implements OnInit {
  @Input()
  vertical: boolean;

  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();
  fcStatus: FormControl = new FormControl();
  fcType: FormControl = new FormControl();
  fcAssignee: FormControl = new FormControl();
  fcSort: FormControl = new FormControl();
  fcDate: FormControl = new FormControl();
  fcBetween: FormControl = new FormControl();

  statusOptions: FieldOption<string>[] = [
    new FieldOption('Open', '1'),
    new FieldOption('Closed', '2'),
    new FieldOption('Merged', '3'),
    new FieldOption('Pending', '4'),
    new FieldOption('Reopened', '5'),
    new FieldOption('Closed SAR Filed', '6'),
  ];

  caseTypeOptions: FieldOption<string>[] = [
    new FieldOption('BSA', '1'),
    new FieldOption('Fraud', '2'),
    new FieldOption('EDD Review', '3'),
    new FieldOption('Subpoena Review', '4'),
    new FieldOption('Watchlist', '5'),
  ];

  assigneeOptions: FieldOption<string>[] = [
    new FieldOption('Aaron H.', '1'),
    new FieldOption('Beth H.', '2'),
    new FieldOption('Brian W.', '3'),
    new FieldOption('Byron M.', '4'),
    new FieldOption('Guy E.', '5'),
    new FieldOption('John W.', '6'),
    new FieldOption('Kelly A.', '7'),
    new FieldOption('Melanie B.', '8'),
    new FieldOption('Ryan K.', '9'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcStatus: this.fcStatus,
      fcType: this.fcType,
      fcAssignee: this.fcAssignee,
      fcSort: this.fcSort,
      fcDate: this.fcDate,
      fcBetween: this.fcBetween,
    });
  }
}
