import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ITask, TaskState } from '@fcs/app/domain/models/task';

import * as faker from 'faker';
import * as _ from 'lodash';

@Component({
  selector: 'yh-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();

  selectedTask: ITask;

  tasks: ITask[] = [];

  tasksByDay: _.Dictionary<ITask[]>;

  showTaskForm: boolean = false;

  private testTaskNames: string[] = [
    'Obtain Wire Docs from Treasury Management',
    'Contact Teller for Statement',
    'Submit 314(b) Request for ACH Transactions',
    'Review SAR for Submission',
    'Make Noted Corrections to SAR',
  ];
  private testDates: string[] = ['08/06/2021', '08/07/2021', '08/08/2021'];
  private testStates: TaskState[] = [
    TaskState.Unknown,
    TaskState.Started,
    TaskState.Completed,
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
    });

    this.tasks = Array.from(new Array(5), (value, id) => this.generateTask(id));
  }

  //Done this way because faker.js creates invalid dates.  In reality, this isn't needed.
  isValidDate(dateString: string): boolean {
    const d = new Date(dateString);
    return d instanceof Date && !isNaN(d.getTime());
  }

  handleTaskSelected(task: ITask): void {
    this.showTaskForm = false;
    if (this.selectedTask) {
      this.selectedTask.isSelected = false;
    }

    if (this.selectedTask === task) {
      this.selectedTask = null;
    } else {
      this.selectedTask = task;
      this.selectedTask.isSelected = true;
    }
  }
  handleAddNew(): void {
    this.selectedTask = null;
    this.showTaskForm = true;
  }

  handleFormClose(): void {
    this.showTaskForm = false;
  }

  handleDrawerCancel(): void {
    this.showTaskForm = false;
  }

  handleDetailClose(): void {
    this.selectedTask = null;
  }

  private generateTask(id: number): ITask {
    return {
      id: id,
      name: this.testTaskNames[id],
      dueOn: new Date(
        this.testDates[Math.floor(Math.random() * 3)]
      ).toUTCString(),
      note: faker.lorem.paragraph(),
      description: faker.lorem.paragraph(),
      caseId: 1234,
      created: new Date(
        this.testDates[Math.floor(Math.random() * 3)]
      ).toUTCString(),
      createdBy: 'John Wood',
      tags: ['Tag', 'Tag'],
      assignedToUrl: faker.image.avatar(),
      assignedTo: 'jwood',
      state: this.testStates[Math.floor(Math.random() * 4)],
      comments: Array.from(
        new Array(faker.datatype.number({ min: 0, max: 4 })),
        () => {
          return {
            comment: faker.lorem.sentence(),
            createdBy: `${faker.name.firstName()} ${faker.name.lastName()}`,
            createdDate: new Date().toUTCString(),
          };
        }
      ),
      isSelected: false,
    };
  }
}
