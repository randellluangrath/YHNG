import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';
import * as faker from 'faker';
@Component({
  selector: 'yh-task-assignment-form',
  templateUrl: './task-assignment-form.component.html',
  styleUrls: ['./task-assignment-form.component.scss'],
})
export class TaskAssignmentFormComponent implements OnInit {
  fgAssign: FormGroup;
  fcAssignee: FormControl = new FormControl();

  assigneeOptions: FieldOption<string>[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgAssign = this.fb.group({
      fcAssignee: this.fcAssignee,
    });

    this.assigneeOptions = Array.from(new Array(25), (k, i) => {
      return new FieldOption(
        `${faker.name.firstName()} ${faker.name.lastName()}`,
        i.toString()
      );
    });
  }
}
