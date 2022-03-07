import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-edd-scheduler',
  templateUrl: './edd-scheduler.component.html',
  styleUrls: ['./edd-scheduler.component.scss'],
})
export class EddSchedulerComponent implements OnInit {
  fgSchedule: FormGroup;
  fcStatus: FormControl = new FormControl();
  fcSchedule: FormControl = new FormControl();
  fcScheduleDate: FormControl = new FormControl();
  fcAssignee: FormControl = new FormControl();
  fcDate: FormControl = new FormControl();
  fcBetween: FormControl = new FormControl();
  statusOptions: FieldOption<string>[] = [
    new FieldOption('Enabled', 'Enabled'),
    new FieldOption('Disabled', 'Disabled'),
  ];

  scheduleOptions: FieldOption<string>[] = [
    new FieldOption('Fraud', '1'),
    new FieldOption('BSA', '2'),
  ];

  scenarioTypeOptions: FieldOption<string>[] = [
    new FieldOption('Large Wire Over 30 Days', '1'),
    new FieldOption('Scenario B', '2'),
    new FieldOption('Scenario C', '3'),
    new FieldOption('Scenario D', '4'),
    new FieldOption('Scenario E', '5'),
    new FieldOption('Scenario F', '6'),
  ];

  scenarioSubTypeOptions: FieldOption<string>[] = [
    new FieldOption('Large Fixed Amount', '1'),
    new FieldOption('Scenario B', '2'),
    new FieldOption('Scenario C', '3'),
    new FieldOption('Scenario D', '4'),
    new FieldOption('Scenario E', '5'),
    new FieldOption('Scenario F', '6'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgSchedule = this.fb.group({
      fcStatus: this.fcStatus,
      fcSchedule: this.fcSchedule,
      fcScheduleDate: this.fcScheduleDate,
      fcAssignee: this.fcAssignee,
      fcDate: this.fcDate,
      fcBetween: this.fcBetween,
    });
  }
}
