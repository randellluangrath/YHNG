import { Component, Input, OnInit } from '@angular/core';
import { ISubjectPhone } from '@fcs/app/domain/models/subject';

@Component({
  selector: 'yh-subject-phone-item',
  templateUrl: './subject-phone-item.component.html',
  styleUrls: ['./subject-phone-item.component.scss'],
})
export class SubjectPhoneItemComponent implements OnInit {
  @Input()
  phone: ISubjectPhone;

  constructor() {}

  ngOnInit(): void {}
}
