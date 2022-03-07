import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faPencil, IconDefinition } from '@fortawesome/pro-light-svg-icons';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-scenario-edit',
  templateUrl: './scenario-edit.component.html',
  styleUrls: ['./scenario-edit.component.scss'],
})
export class ScenarioEditComponent implements OnInit {
  fgScenario: FormGroup;
  fcName: FormControl = new FormControl();
  fcEnabled: FormControl = new FormControl();
  fcType: FormControl = new FormControl();
  fcMonitoring: FormControl = new FormControl();
  fcSubMonitoring: FormControl = new FormControl();
  fcScheduling: FormControl = new FormControl();
  fcClientOrAccount: FormControl = new FormControl();
  fcClientSets: FormControl = new FormControl();
  fcExcludedClientSets: FormControl = new FormControl();
  fcAccountSets: FormControl = new FormControl();
  fcExcludedAccountSets: FormControl = new FormControl();
  fcRelationships: FormControl = new FormControl();
  fcScenarioActivityType: FormControl = new FormControl();
  fcTags: FormControl = new FormControl();
  fcAccountType: FormControl = new FormControl();

  fgParameters: FormGroup;
  fcActivityType: FormControl = new FormControl();
  fcThreshold: FormControl = new FormControl();
  fcReviewPeriod: FormControl = new FormControl();
  fcDailyLow: FormControl = new FormControl();

  statusOptions: FieldOption<string>[] = [
    new FieldOption('Enabled', '1'),
    new FieldOption('Disabled', '2'),
  ];
  typeOptions: FieldOption<string>[] = [
    new FieldOption('BSA/AML', '1'),
    new FieldOption('Fraud', '2'),
  ];
  clientOrAccountOptions: FieldOption<string>[] = [
    new FieldOption('Client', '1'),
    new FieldOption('Account', '2'),
  ];

  activityTypeOptions: FieldOption<string>[] = [
    new FieldOption('Cash Out Amount', '1'),
    new FieldOption('Cash In Amount', '2'),
  ];

  tagOptions: FieldOption<string>[] = [
    new FieldOption('Tag A', '1'),
    new FieldOption('Tag B', '2'),
    new FieldOption('Tag C', '3'),
    new FieldOption('Tag D', '4'),
    new FieldOption('Tag E', '5'),
    new FieldOption('Tag F', '6'),
    new FieldOption('Tag G', '7'),
    new FieldOption('Tag H', '8'),
  ];

  activityTypesOptions: FieldOption<string>[] = [
    new FieldOption('Activity A', '1'),
    new FieldOption('Activity B', '2'),
    new FieldOption('Activity C', '3'),
    new FieldOption('Activity D', '4'),
    new FieldOption('Activity E', '5'),
    new FieldOption('Activity F', '6'),
    new FieldOption('Activity G', '7'),
    new FieldOption('Activity H', '8'),
  ];

  editIcon: IconDefinition = faPencil;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgScenario = this.fb.group({
      fcName: this.fcName,
      fcEnabled: this.fcEnabled,
      fcType: this.fcType,
      fcMonitoring: this.fcMonitoring,
      fcSubMonitoring: this.fcSubMonitoring,
      fcScheduling: this.fcScheduling,
      fcClientOrAccount: this.fcClientOrAccount,
      fcClientSets: this.fcClientSets,
      fcExcludedClientSets: this.fcExcludedClientSets,
      fcAccountSets: this.fcAccountSets,
      fcExcludedAccountSets: this.fcExcludedAccountSets,
      fcRelationships: this.fcRelationships,
      fcScenarioActivityType: this.fcScenarioActivityType,
      fcTags: this.fcTags,
      fcAccountType: this.fcAccountType,
    });

    this.fgParameters = this.fb.group({
      fcActivityType: this.fcActivityType,
      fcThreshold: this.fcThreshold,
      fcReviewPeriod: this.fcReviewPeriod,
      fcDailyLow: this.fcDailyLow,
    });
  }
}
