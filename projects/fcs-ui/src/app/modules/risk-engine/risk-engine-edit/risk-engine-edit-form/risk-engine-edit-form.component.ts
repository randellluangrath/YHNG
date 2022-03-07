import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faPencil } from '@fortawesome/pro-light-svg-icons';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-risk-engine-edit-form',
  templateUrl: './risk-engine-edit-form.component.html',
  styleUrls: ['./risk-engine-edit-form.component.scss'],
})
export class RiskEngineEditFormComponent implements OnInit {
  @Input()
  readonly: boolean;

  fgRisk: FormGroup;
  fcName: FormControl = new FormControl();
  fcDisabled: FormControl = new FormControl();
  fcStatus: FormControl = new FormControl();
  fcDescription: FormControl = new FormControl();
  fcScheduling: FormControl = new FormControl();
  fcClientGroups: FormControl = new FormControl();
  fcAccountGroups: FormControl = new FormControl();
  fcExcludedRelationships: FormControl = new FormControl();

  options: FieldOption<string>[] = [
    new FieldOption('Non-Personal Accounts', 'Non-Personal Accounts'),
    new FieldOption('Personal Accounts', 'Personal Accounts'),
    new FieldOption('DBA Clients', 'DBA Clients'),
  ];

  statusOptions: FieldOption<string>[] = [
    new FieldOption('Enabled', 'C'),
    new FieldOption('Disabled', 'M'),
  ];

  showSchedulingForm: boolean;

  editIcon: IconDefinition = faPencil;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgRisk = this.fb.group({
      fcName: this.fcName,
      fcDisabled: this.fcDisabled,
      fcDescription: this.fcDescription,
      fcStatus: this.fcStatus,
      fcScheduling: this.fcScheduling,
      fcClientGroups: this.fcClientGroups,
      fcAccountGroups: this.fcAccountGroups,
      fcExcludedRelationships: this.fcExcludedRelationships,
    });

    if (this.readonly) {
      this.fgRisk.disable();
    }

    this.fcScheduling.setValue(1);
  }

  showSchedulingDrawer(): void {
    this.showSchedulingForm = true;
  }
  hideSchedulingDrawer(): void {
    this.showSchedulingForm = false;
  }
}
