import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { IComment } from '@fcs/app/domain/models/task';

@Component({
  selector: 'yh-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input()
  comment: IComment;

  showCommentForm: boolean;

  fgComment: FormGroup;
  fcComment: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgComment = this.fb.group({
      fComment: this.fcComment,
    });

    this.fcComment.setValue(this.comment.comment);
  }
}
