import { Component, Input, OnInit } from '@angular/core';
import { IDashboardCaseTaskItem } from '../open-cases.component';

@Component({
  selector: 'yh-case-task-item',
  templateUrl: './case-task-item.component.html',
  styleUrls: ['./case-task-item.component.scss'],
})
export class CaseTaskItemComponent implements OnInit {
  @Input()
  task: IDashboardCaseTaskItem;

  constructor() {}

  ngOnInit(): void {}
}
