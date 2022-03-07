import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import * as _ from 'lodash';

@Component({
  selector: 'yh-open-cases',
  templateUrl: './open-cases.component.html',
  styleUrls: ['./open-cases.component.scss'],
})
export class OpenCasesComponent implements OnInit {
  openCases: IDashboardCaseItem[] = Array.from(new Array(10), () => {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      due: new Date().toUTCString(),
      highPriority: faker.datatype.number({ min: 0, max: 1 }) ? true : false,
    };
  });

  openTasks: IDashboardCaseTaskItem[] = Array.from(new Array(10), () => {
    return {
      name: `Task Name`,
      due: new Date().toUTCString(),
    };
  });

  constructor() {}

  ngOnInit(): void {
    this.openCases = _.orderBy(this.openCases, (o) => o.highPriority, ['desc']);
    this.openTasks = _.orderBy(this.openTasks, (o) => o.name, ['desc']);
  }
}
export interface IDashboardCaseItem {
  name: string;
  due: string;
  highPriority: boolean;
}

export interface IDashboardCaseTaskItem {
  name: string;
  due: string;
}
