import { Component, Input, OnInit } from '@angular/core';
import { IDashboardAlertItem } from '../open-alerts.component';

@Component({
  selector: 'yh-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss'],
})
export class AlertItemComponent implements OnInit {
  @Input()
  alert: IDashboardAlertItem;

  constructor() {}

  ngOnInit(): void {}
}
