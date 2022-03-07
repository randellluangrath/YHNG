import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as faker from 'faker';
import * as _ from 'lodash';

@Component({
  selector: 'yh-due-diligence',
  templateUrl: './due-diligence.component.html',
  styleUrls: ['./due-diligence.component.scss'],
})
export class DueDiligenceComponent implements OnInit {
  items: MenuItem[] = [
    { label: 'ADD', icon: 'pi pi-sitemap' },
    { label: 'CDD', icon: 'pi pi-sitemap' },
    { label: 'EDD', icon: 'pi pi-sitemap' },
  ];

  activeItem: MenuItem;

  records: IEddCaseHistory[] = Array.from(new Array(35), () => {
    return {
      id: faker.datatype.number({ min: 1, max: 200 }),
      opened: new Date().toUTCString(),
      closed: new Date().toUTCString(),
      user: 'John W.',
      disposition: 'Abnormal Activity',
      status: CaseStatus.Open,
    };
  });

  CaseStatus = CaseStatus;

  showSchedulerDrawer: boolean;

  constructor() {}

  ngOnInit(): void {
    this.records = _.sortBy(this.records, (r) => r.id, ['asc']);
  }

  openScheduler(): void {
    this.showSchedulerDrawer = true;
  }

  closeScheduler(): void {
    this.showSchedulerDrawer = false;
  }
}

export interface IEddCaseHistory {
  id: number;
  opened: string;
  closed: string;
  user: string;
  disposition: string;
  status: CaseStatus;
}

export enum CaseStatus {
  Open = 'Open',
  Closed = 'Closed',
}
