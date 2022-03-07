import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '@fcs/app/domain/models/task';
import { FileTypeIconType } from 'projects/shared/src/lib/components/presentation/file-type-icon/file-type-icon.component';

@Component({
  selector: 'yh-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  @Input()
  task: ITask;

  @Output()
  onClose: EventEmitter<void> = new EventEmitter<void>();

  FileTypeIconType = FileTypeIconType;
  constructor() {}

  ngOnInit(): void {}

  handleClose(): void {
    this.onClose.emit();
  }
}
