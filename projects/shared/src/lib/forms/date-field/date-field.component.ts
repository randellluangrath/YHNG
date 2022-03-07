import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
})
export class DateFieldComponent
  extends BaseFieldComponent
  implements OnInit, AfterViewInit
{
  @Input()
  showIcon: boolean = false;

  @Input()
  view: 'date' | 'month' = 'date';

  @Input()
  months: number = 1;

  @Input()
  range: boolean;

  @Input()
  max: Date;

  @Input()
  showTime: boolean;

  @Input()
  hourFormat: string = '12';

  @Input()
  disabledDays: number[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  getPlaceholder(): string {
    if (this.view === 'date') {
      if (this.range) {
        return 'MM/DD/YYYY to MM/DD/YYYY';
      }
    } else if (this.view === 'month') {
      if (this.range) {
        return 'MM/YYYY to MM/YYYY';
      } else {
        return 'MM/YYYY';
      }
    }

    return 'MM/DD/YYYY';
  }
}
