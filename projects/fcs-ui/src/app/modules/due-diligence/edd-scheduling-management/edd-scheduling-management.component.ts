import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yh-edd-scheduling-management',
  templateUrl: './edd-scheduling-management.component.html',
  styleUrls: ['./edd-scheduling-management.component.scss'],
})
export class EddSchedulingManagementComponent implements OnInit {
  schedules: IEddSchedulerValue[] = [
    { level: 1, months: 9 },
    { level: 2, months: 18 },
    { level: 3, months: 36 },
  ];

  constructor() {}

  ngOnInit(): void {}
}

export interface IEddSchedulerValue {
  months: number;
  level: number;
}
