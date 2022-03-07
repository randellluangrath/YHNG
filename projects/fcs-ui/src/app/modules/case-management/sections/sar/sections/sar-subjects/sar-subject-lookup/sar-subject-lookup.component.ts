import { Component, Input, OnInit } from '@angular/core';
import { ISubject } from '@fcs/app/domain/models/subject';

@Component({
  selector: 'yh-sar-subject-lookup',
  templateUrl: './sar-subject-lookup.component.html',
  styleUrls: ['./sar-subject-lookup.component.scss'],
})
export class SarSubjectLookupComponent implements OnInit {
  @Input()
  subjects: ISubject[] = [];

  @Input()
  selected: ISubject[] = [];

  constructor() {}

  ngOnInit(): void {}

  isSelected(subject: ISubject): boolean {
    return this.selected.find((s) => s === subject) != null;
  }

  /*
  When the actual model is created for the Subject, this behavior should be added to it.
   */
  getSubjectName(subject: ISubject): string {
    if (subject.type === 'Entity') {
      return subject.entityName;
    }

    let name = '';
    if (subject) {
      name = subject.firstName;
      if (subject.middleName) {
        name += ` ${subject.middleName[0]}.`;
      }
      name += subject.lastName;
    }
    return name;
  }
}
