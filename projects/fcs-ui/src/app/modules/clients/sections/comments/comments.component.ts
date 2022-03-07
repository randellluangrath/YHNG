import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IComment } from '@fcs/app/domain/models/task';
import * as faker from 'faker';
@Component({
  selector: 'yh-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: IComment[] = Array.from(new Array(10), () => {
    return {
      comment: faker.lorem.sentences(3),
      createdBy: 'John W',
      createdDate: new Date().toUTCString(),
    };
  });

  fgComment: FormGroup;
  fcComment: FormControl = new FormControl();

  showCommentForm: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgComment = this.fb.group({
      fComment: this.fcComment,
    });
  }
}
