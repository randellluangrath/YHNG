import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ITask } from '@fcs/app/domain/models/task';

import * as moment from 'moment';

@Component({
  selector: 'yh-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.scss'],
})
export class TaskGroupComponent implements OnInit, AfterViewInit {
  @Input()
  date: string;

  @Input()
  tasks: ITask[] = [];

  @Output()
  onSelected: EventEmitter<ITask> = new EventEmitter<ITask>();

  day: number;
  dayOfWeek: string;
  month: string;

  isToday: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.date) {
      var groupDate = moment(this.date);
      this.dayOfWeek = groupDate.format('ddd');
      this.day = groupDate.date() + 1;
      this.month = groupDate.format('MMM');
      this.isToday = groupDate.isSame(moment(), 'd');
    }
  }

  handleTaskSelected(task: ITask): void {
    this.onSelected.emit(task);
  }
}
