import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/pro-duotone-svg-icons';
import { faStar as falStar } from '@fortawesome/pro-light-svg-icons';
import { MenuItem, Message } from 'primeng/api';

@Component({
  selector: 'yh-case-management-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  tasks: Task[] = [];

  warnIcon: IconDefinition = faExclamationTriangle;
  highPriorityIcon: IconDefinition = faStar;

  actions: MenuItem[] = [
    {
      label: 'Option 1',
      icon: '',
      command: () => {},
    },
    {
      label: 'Option 2',
      icon: '',
      command: () => {},
    },
    {
      label: 'Option 3',
      icon: '',
      command: () => {},
    },
  ];

  constructor() {}

  ngOnInit(): void {
    for (var i = 0, max = 3; i < max; i++) {
      this.tasks.push(this.createTask(i));
    }
  }

  private createTask(id: number): Task {
    const model = new Task();
    model.id = id;
    model.title = `Task 1`;
    model.dueOn = new Date().toUTCString();
    model.assignedTo = 'jwood';
    return model;
  }
}

export class Task {
  id: number;
  isCompleted: boolean;
  title: string;
  dueOn: string;
  assignedTo: string;
}
