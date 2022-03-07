import { Component, Input, OnInit } from '@angular/core';
import { ISubjectIdentification } from '@fcs/app/domain/models/subject';

/**
 * Presentational component to display the subject's identification
 */
@Component({
  selector: 'yh-subject-identification-item',
  templateUrl: './subject-identification-item.component.html',
  styleUrls: ['./subject-identification-item.component.scss'],
})
export class SubjectIdentificationItemComponent implements OnInit {
  @Input()
  identification: ISubjectIdentification;

  constructor() {}

  ngOnInit(): void {}
}
