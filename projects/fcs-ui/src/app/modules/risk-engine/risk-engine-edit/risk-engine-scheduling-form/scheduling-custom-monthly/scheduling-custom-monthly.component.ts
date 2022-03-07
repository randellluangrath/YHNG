import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { FieldOption } from 'projects/shared/src/lib/models/models';
@UntilDestroy()
@Component({
  selector: 'yh-scheduling-custom-monthly',
  templateUrl: './scheduling-custom-monthly.component.html',
  styleUrls: ['./scheduling-custom-monthly.component.scss'],
})
export class SchedulingCustomMonthlyComponent implements OnInit {
  fgScheduling: FormGroup;
  fcType: FormControl = new FormControl();

  fcDays: FormControl = new FormControl();
  fcMonths: FormControl = new FormControl();
  fcDuration: FormControl = new FormControl();
  fcDayOfWeek: FormControl = new FormControl();
  fcMonthsWithWeeks: FormControl = new FormControl({
    value: null,
    disabled: true,
  });

  schedulingOptions: FieldOption<Duration>[] = [
    new FieldOption('Day', Duration.Days),
    new FieldOption('Week', Duration.Weekdays),
  ];

  Duration = Duration;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgScheduling = this.fb.group({
      fcType: this.fcType,
      fcDays: this.fcDays,
      fcDuration: this.fcDuration,
      fcDayOfWeek: this.fcDayOfWeek,
      fcMonths: this.fcMonths,
      fcMonthsWithWeeks: this.fcMonthsWithWeeks,
    });
  }
}

enum Duration {
  Days,
  Weekdays,
}
