import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { IComment } from '@fcs/app/domain/models/task';

@Component({
  selector: 'yh-task-comment-item',
  templateUrl: './task-comment-item.component.html',
  styleUrls: ['./task-comment-item.component.scss'],
})
export class TaskCommentItemComponent implements OnInit {
  @Input()
  comment: IComment;

  editMode: boolean = false;

  fgNote: FormGroup;
  fcNote: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgNote = this.fb.group({
      fcNote: this.fcNote,
    });

    this.fcNote.setValue(this.comment.comment);
  }

  editNote(): void {
    this.editMode = true;
  }

  cancelNote(): void {
    this.editMode = false;
  }
}
