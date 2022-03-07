import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'yh-task-comment-form',
  templateUrl: './task-comment-form.component.html',
  styleUrls: ['./task-comment-form.component.scss'],
})
export class TaskCommentFormComponent implements OnInit {
  fgNote: FormGroup;
  fcNote: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgNote = this.fb.group({
      fcNote: this.fcNote,
    });
  }
}
