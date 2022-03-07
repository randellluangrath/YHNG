import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Message } from 'primeng/api';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-create-criteria-dialog',
  templateUrl: './create-criteria-dialog.component.html',
  styleUrls: ['./create-criteria-dialog.component.scss'],
})
export class CreateCriteriaDialogComponent implements OnInit {
  fgCriteria: FormGroup;
  fcRiskCategory: FormControl = new FormControl();
  fcAccountId: FormControl = new FormControl();
  fcTerm: FormControl = new FormControl();
  fcNaics: FormControl = new FormControl();
  fcTin: FormControl = new FormControl();
  fcMsb: FormControl = new FormControl();
  fcTinType: FormControl = new FormControl();
  fcClassCode: FormControl = new FormControl();
  fcBirthDate: FormControl = new FormControl();
  fcInsiderCode: FormControl = new FormControl();
  fcType: FormControl = new FormControl();
  fcOfficer: FormControl = new FormControl();
  fcOwnershipType: FormControl = new FormControl();
  fcDueDiligence: FormControl = new FormControl();
  fcRiskLevel: FormControl = new FormControl();

  msgs: Message[] = [];

  options: FieldOption<string>[] = [
    new FieldOption('Criteria', 'C'),
    new FieldOption('Results', 'M'),
  ];

  selectedOption: string;

  fgView: FormGroup;
  fcView: FormControl = new FormControl();

  fgFilter: FormGroup;
  fcFilterTerm: FormControl = new FormControl();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.msgs.push({
    //   severity: 'info',
    //   summary: 'No Criteria Selected',
    //   detail: 'Select one or more criteria from the list on the left',
    // });

    this.fgFilter = this.fb.group({
      fcFilterTerm: this.fcFilterTerm,
    });

    this.fgView = this.fb.group({
      fcView: this.fcView,
    });

    this.fgCriteria = this.fb.group({
      fcRiskCategory: this.fcRiskCategory,
      fcAccountId: this.fcAccountId,
      fcTerm: this.fcTerm,
      fcNaics: this.fcNaics,
      fcTin: this.fcTin,
      fcMsb: this.fcMsb,
      fcTinType: this.fcTinType,
      fcClassCode: this.fcClassCode,
      fcBirthDate: this.fcBirthDate,
      fcInsiderCode: this.fcInsiderCode,
      fcType: this.fcType,
      fcOfficer: this.fcOfficer,
      fcOwnershipType: this.fcOwnershipType,
      fcDueDiligence: this.fcDueDiligence,
      fcRiskLevel: this.fcRiskLevel,
    });
  }
}
