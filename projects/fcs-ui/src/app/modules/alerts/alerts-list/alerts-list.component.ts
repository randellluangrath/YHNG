import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Alert } from '@fcs/app/domain/models/alerts';
import * as _ from 'lodash';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'yh-alerts-list',
  templateUrl: './alerts-list.component.html',
  styleUrls: ['./alerts-list.component.scss'],
})
export class AlertsListComponent implements OnInit {
  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl('');
  fcSort: FormControl = new FormControl('');

  alerts: Alert[];

  selectedAlert: Alert;

  saveOptions: MenuItem[] = [
    {
      label: 'Create Case',
    },
    {
      label: 'Create Case & Go To',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcSort: this.fcSort,
    });

    const items: Alert[] = [];
    for (var i = 0, max = 100; i < max; i++) {
      items.push(this.generateAlert(i));
    }

    this.alerts = _.orderBy(items, (i) => i.riskScore, 'desc');
  }

  handleRowSelected(e: any): void {}

  handleRowUnselected(e: any): void {}

  handleDrawerCancel(): void {
    this.selectedAlert = null;
  }

  handleOnHide(): void {
    this.selectedAlert = null;
  }

  private generateAlert(id: number): Alert {
    const alert = new Alert();
    alert.id = id;
    alert.amount = Math.floor(Math.random() * 100000);
    alert.riskScore = Math.floor(Math.random() * 100);
    alert.scenario = 'Large Wire Over 30 Days';
    alert.scenarioType = 'Large Daily';
    alert.subType = 'Large Fixed Amount';
    alert.title = 'Guy Edwards';

    return alert;
  }
}
