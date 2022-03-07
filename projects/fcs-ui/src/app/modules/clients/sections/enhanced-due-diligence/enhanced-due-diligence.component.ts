import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as faker from 'faker';
import * as _ from 'lodash';
import { IComment } from '@fcs/app/domain/models/task';
import {
  faInfoCircle,
  IconDefinition,
  faExclamationTriangle,
} from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'yh-enhanced-due-diligence',
  templateUrl: './enhanced-due-diligence.component.html',
  styleUrls: ['./enhanced-due-diligence.component.scss'],
})
export class EnhancedDueDiligenceComponent implements OnInit {
  items: MenuItem[] = [
    { label: 'ADD', icon: 'pi pi-sitemap' },
    { label: 'CDD', icon: 'pi pi-sitemap' },
    { label: 'EDD', icon: 'pi pi-sitemap' },
  ];

  titles: IEddCaseHistoryDetails[] = [
    {
      title: 'Internal 12345 / Case 2222',
      subtitle: 'Open, assigned to John W.',
    },
    {
      title: 'Internal 54321 / Case 123456',
      subtitle: 'Open, assigned to John W.',
    },
    {
      title: 'Internal 54341 / Case 33333',
      subtitle: 'Open, assigned to John W.',
    },
    {
      title: 'Internal 5421 / Case 555555',
      subtitle: 'Open, assigned to John W.',
    },
  ];

  activeItem: MenuItem;

  infoIcon: IconDefinition = faInfoCircle;
  warnIcon: IconDefinition = faExclamationTriangle;

  records: IEddCaseHistory[] = Array.from(new Array(35), () => {
    return {
      id: faker.datatype.number({ min: 1, max: 200 }),
      details: this.titles[faker.datatype.number({ min: 0, max: 3 })],
      opened: new Date().toUTCString(),
      closed: new Date().toUTCString(),
      user: 'John W.',
      status: CaseStatus.Open,
      comments: Array.from(
        new Array(faker.datatype.number({ min: 0, max: 10 })),
        () => {
          return {
            comment: faker.lorem.sentences(2),
            createdDate: new Date().toUTCString(),
            createdBy: 'John W.',
          };
        }
      ),
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
  details: IEddCaseHistoryDetails;
  opened: string;
  closed: string;
  user: string;
  status: CaseStatus;
  comments: IComment[];
}
export interface IEddCaseHistoryDetails {
  title: string;
  subtitle: string;
}

export enum CaseStatus {
  Open = 'Open',
  Closed = 'Closed',
}
