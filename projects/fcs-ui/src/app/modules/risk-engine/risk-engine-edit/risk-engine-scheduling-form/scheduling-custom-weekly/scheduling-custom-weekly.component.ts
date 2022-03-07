import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { untilDestroyed } from '@fcs/app/@core';
import { Duration } from 'moment';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-scheduling-custom-weekly',
  templateUrl: './scheduling-custom-weekly.component.html',
  styleUrls: ['./scheduling-custom-weekly.component.scss'],
})
export class SchedulingCustomWeeklyComponent implements OnInit {
  fgScheduling: FormGroup;
  fcDayOfWeek: FormControl = new FormControl();
  fcWeeks: FormControl = new FormControl();

  daysOptions: FieldOption<string>[] = [
    new FieldOption('Monday', 'Monday'),
    new FieldOption('Tuesday', 'Tuesday'),
    new FieldOption('Wednesday', 'Wednesday'),
    new FieldOption('Thursday', 'Thursday'),
    new FieldOption('Friday', 'Friday'),
    new FieldOption('Saturday', 'Saturday'),
    new FieldOption('Sunday', 'Sunday'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgScheduling = this.fb.group({
      fcDayOfWeek: this.fcDayOfWeek,
      fcWeeks: this.fcWeeks,
    });
  }
}
