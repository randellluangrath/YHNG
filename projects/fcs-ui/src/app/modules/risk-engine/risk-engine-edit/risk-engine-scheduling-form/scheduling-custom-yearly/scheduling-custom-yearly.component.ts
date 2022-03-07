import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UntilDestroy } from '@fcs/app/@core';
import { FieldOption } from 'projects/shared/src/lib/models/models';
@UntilDestroy()
@Component({
  selector: 'yh-scheduling-custom-yearly',
  templateUrl: './scheduling-custom-yearly.component.html',
  styleUrls: ['./scheduling-custom-yearly.component.scss'],
})
export class SchedulingCustomYearlyComponent implements OnInit {
  fgScheduling: FormGroup;
  fcType: FormControl = new FormControl();

  fcYears: FormControl = new FormControl();

  fcMonth: FormControl = new FormControl();
  fcDayOfMonth: FormControl = new FormControl();

  fcDuration: FormControl = new FormControl();
  fcDayOfWeek: FormControl = new FormControl();
  fcMonthsWithWeeks: FormControl = new FormControl();

  schedulingOptions: FieldOption<Duration>[] = [
    new FieldOption('Day', Duration.Days),
    new FieldOption('Week', Duration.Week),
  ];

  Duration = Duration;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgScheduling = this.fb.group({
      fcType: this.fcType,
      fcYears: this.fcYears,
      fcDayOfMonth: this.fcDayOfMonth,
      fcDuration: this.fcDuration,
      fcDayOfWeek: this.fcDayOfWeek,
      fcMonth: this.fcMonth,
      fcMonthsWithWeeks: this.fcMonthsWithWeeks,
    });
  }
}

enum Duration {
  Days,
  Week,
}
