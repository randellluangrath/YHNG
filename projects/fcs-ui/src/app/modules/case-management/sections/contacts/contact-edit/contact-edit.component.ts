import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ContactType } from '@fcs/app/domain/models/contact';
import { ISubject } from '@fcs/app/domain/models/subject';
import {
  faExclamationCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  subject: ISubject = null;

  errorIcon: IconDefinition = faExclamationCircle;

  typeOptions: FieldOption<ContactType>[] = [
    new FieldOption('Law Enforcement', ContactType.LawEnforcement),
    new FieldOption('Internal Contact', ContactType.InternalContact),
    new FieldOption(
      'External Contact / 314(b)',
      ContactType.ExternalContact314b
    ),
    new FieldOption('Victim', ContactType.Victim),
    new FieldOption('Other', ContactType.Other),
  ];

  tinTypeOptions: FieldOption<string>[] = [
    new FieldOption('EIN', 'EIN'),
    new FieldOption('SSN-ITIN', 'SSN-ITIN'),
    new FieldOption('Foreign', 'Foreign'),
  ];

  ContactType = ContactType;

  fgContact: FormGroup;
  fcType: FormControl = new FormControl(null);
  fcComment: FormControl = new FormControl();
  fgSubject: FormGroup;

  fcOccupationOrBusinessType: FormControl = new FormControl();
  fcNaicsCode: FormControl = new FormControl('');
  fcTin: FormControl = new FormControl('');
  fcTinUnknown: FormControl = new FormControl('');
  fcTinType: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgContact = this.fb.group({
      fcComment: this.fcComment,
      fcType: this.fcType,
      fcNaicsCode: this.fcNaicsCode,
      fcTin: this.fcTin,
      fcTinUnknown: this.fcTinUnknown,
      fcTinType: this.fcTinType,
    });
  }

  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
