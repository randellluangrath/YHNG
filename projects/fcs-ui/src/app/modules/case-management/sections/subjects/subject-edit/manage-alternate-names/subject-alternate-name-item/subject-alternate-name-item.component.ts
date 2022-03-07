import { Component, Input, OnInit } from '@angular/core';
import { ISubjectAlternateName } from '@fcs/app/domain/models/subject';

@Component({
  selector: 'yh-subject-alternate-name-item',
  templateUrl: './subject-alternate-name-item.component.html',
  styleUrls: ['./subject-alternate-name-item.component.scss'],
})
export class SubjectAlternateNameItemComponent implements OnInit {
  @Input()
  name: ISubjectAlternateName;

  constructor() {}

  ngOnInit(): void {}
}
