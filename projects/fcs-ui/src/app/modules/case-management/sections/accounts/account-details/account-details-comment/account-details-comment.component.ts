import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INote } from '@fcs/app/domain/models/note';

@Component({
  selector: 'yh-account-details-comment',
  templateUrl: './account-details-comment.component.html',
  styleUrls: ['./account-details-comment.component.scss'],
})
export class AccountDetailsCommentComponent implements OnInit {
  @Input()
  note: INote;

  fcComment: FormControl = new FormControl('');

  showCommentsForm: boolean;

  constructor() {}

  ngOnInit(): void {}
}
