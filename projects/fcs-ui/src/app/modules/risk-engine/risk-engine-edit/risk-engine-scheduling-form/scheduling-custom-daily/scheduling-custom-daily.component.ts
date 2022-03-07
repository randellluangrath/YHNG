import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@UntilDestroy()
@Component({
  selector: 'yh-scheduling-custom-daily',
  templateUrl: './scheduling-custom-daily.component.html',
  styleUrls: ['./scheduling-custom-daily.component.scss'],
})
export class SchedulingCustomDailyComponent implements OnInit {
  fgScheduling: FormGroup;
  fcType: FormControl = new FormControl();
  fcDays: FormControl = new FormControl({ value: null, disabled: true });

  schedulingOptions: FieldOption<Duration>[] = [
    new FieldOption('Day(s)', Duration.Days),
    new FieldOption('Weekday', Duration.Weekdays),
  ];

  Duration = Duration;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgScheduling = this.fb.group({
      fcType: this.fcType,
      fcDays: this.fcDays,
    });

    this.fcType.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: Duration) => {
        if (value === Duration.Days) {
          this.fcDays.enable();
        } else {
          this.fcDays.disable();
        }
      });
  }
}

enum Duration {
  Days,
  Weekdays,
}
