import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FieldOption } from 'projects/shared/src/lib/models/models';
import * as faker from 'faker';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'yh-open-alerts',
  templateUrl: './open-alerts.component.html',
  styleUrls: ['./open-alerts.component.scss'],
})
export class OpenAlertsComponent implements OnInit {
  sortOptions: FieldOption<string>[] = [
    new FieldOption('Newest', '1'),
    new FieldOption('Oldest', '2'),
    new FieldOption('Highest Score', '3'),
    new FieldOption('Lowest Score', '4'),
  ];
  openAlerts: IDashboardAlertItem[] = Array.from(new Array(10), () => {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      type: 'Large Daily',
      date: new Date().toUTCString(),
      score: faker.datatype.number({ min: 50, max: 99 }),
    };
  });

  fgSort: FormGroup;

  fcSort: FormControl = new FormControl();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgSort = this.fb.group({
      fcSort: this.fcSort,
    });

    this.openAlerts = _.orderBy(this.openAlerts, (o) => o.score, ['desc']);
  }
}
export interface IDashboardAlertItem {
  name: string;
  type: string;
  date: string;
  score: number;
}
