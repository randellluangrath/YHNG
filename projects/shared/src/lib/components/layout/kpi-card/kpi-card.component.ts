import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yh-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
  host: {
    '[class.success]': 'success',
    '[class.danger]': 'danger',
    '[class.warning]': 'warning',
    '[class.information]': 'information',
    '[class.pending]': 'pending',
  },
})
export class KpiCardComponent implements OnInit {
  @HostBinding('class')
  class: string = 'yh-kpi-card';

  @Input()
  information: boolean;

  @Input()
  success: boolean;

  @Input()
  pending: boolean;

  @Input()
  warning: boolean;

  @Input()
  danger: boolean;

  @Input()
  value: number;

  @Input()
  valueTitle: string;

  @Input()
  valueCategory: string;

  @Input()
  valueCategoryTotal: number;

  @Input()
  showSparkchart: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
