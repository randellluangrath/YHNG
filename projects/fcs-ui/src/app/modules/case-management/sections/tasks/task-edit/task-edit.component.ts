import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {
  @Output()
  onClose: EventEmitter<void> = new EventEmitter<void>();

  fgTask: FormGroup;
  fcName: FormControl = new FormControl('');
  fcStatus: FormControl = new FormControl();
  fcDueOn: FormControl = new FormControl('');
  fcNote: FormControl = new FormControl('');
  fcReminder: FormControl = new FormControl('');
  fcAssignedTo: FormControl = new FormControl();
  fcAttachment: FormControl = new FormControl('');
  fcTags: FormControl = new FormControl('');

  tagOptions: FieldOption<string>[] = [
    new FieldOption('Tag One', 'Tag One'),
    new FieldOption('Tag Two', 'Tag Two'),
    new FieldOption('Tag Three', 'Tag Three'),
  ];

  statusOptions: FieldOption<string>[] = [
    new FieldOption('Open', 'Open'),
    new FieldOption('On Hold', 'On Hold'),
    new FieldOption('Complete', 'Complete'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgTask = this.fb.group({
      fcName: this.fcName,
      fcStatus: this.fcStatus,
      fcDueOn: this.fcDueOn,
      fcAssignedTo: this.fcAssignedTo,
      fcReminder: this.fcReminder,
      fcNote: this.fcNote,
      fcAttachment: this.fcAttachment,
      fcTags: this.fcTags,
    });
  }

  handleClose(): void {
    this.onClose.emit();
  }
}
