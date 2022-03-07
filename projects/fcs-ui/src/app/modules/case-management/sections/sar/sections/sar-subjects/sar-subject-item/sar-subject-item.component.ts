import { Component, Input, OnInit } from '@angular/core';
import { ISubject } from '@fcs/app/domain/models/subject';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faGlobe,
  faPhone,
  faUserSecret,
} from '@fortawesome/pro-light-svg-icons';
@Component({
  selector: 'yh-sar-subject-item',
  templateUrl: './sar-subject-item.component.html',
  styleUrls: ['./sar-subject-item.component.scss'],
})
export class SarSubjectItemComponent implements OnInit {
  @Input()
  subject: ISubject;

  websiteIcon: IconDefinition = faGlobe;
  emailIcon: IconDefinition = faEnvelope;
  phoneIcon: IconDefinition = faPhone;
  namesIcon: IconDefinition = faUserSecret;

  constructor() {}

  ngOnInit(): void {}
  /*
  When the actual model is created for the Subject, this behavior should be added to it.
   */
  getSubjectName(): string {
    if (this.subject.type === 'Entity') {
      return this.subject.entityName;
    }

    let name = '';
    if (this.subject) {
      name = this.subject.firstName;
      if (this.subject.middleName) {
        name += ` ${this.subject.middleName[0]}.`;
      }
      name += this.subject.lastName;
    }
    return name;
  }

  /*
  When the actual model is created for the Subject, this behavior should be added to it.
   */
  getSubjectInitials(): string {
    if (this.subject.type === 'Entity') {
      return this.subject.entityName;
    }

    let initials = '';
    if (this.subject) {
      if (this.subject.firstName) {
        initials += this.subject.firstName[0];
      }

      if (this.subject.lastName) {
        initials += this.subject.lastName[0];
      }
    }
    return initials;
  }
}
