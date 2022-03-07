import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ISubjectPhone } from '@fcs/app/domain/models/subject';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-subject-phone-edit',
  templateUrl: './subject-phone-edit.component.html',
  styleUrls: ['./subject-phone-edit.component.scss'],
})
export class SubjectPhoneEditComponent implements OnInit {
  @Input()
  address: ISubjectPhone;

  @Output()
  onSave: EventEmitter<ISubjectPhone> = new EventEmitter<ISubjectPhone>();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter<void>();

  fgPhoneNumbers: FormGroup;
  fcType: FormControl = new FormControl('');
  fcPhone: FormControl = new FormControl('');
  fcExtension: FormControl = new FormControl('');
  fcPhoneType: FormControl = new FormControl(null);
  fcPrimary: FormControl = new FormControl(null);

  phoneTypeOptions: FieldOption<string>[] = [
    new FieldOption('Home', 'Home'),
    new FieldOption('Work', 'Work'),
    new FieldOption('Mobile', 'Mobile'),
    new FieldOption('Fax', 'Fax'),
  ];

  typeOptions: FieldOption<string>[] = [
    new FieldOption('Domestic', 'Domestic'),
    new FieldOption('International', 'International'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgPhoneNumbers = this.fb.group({
      fcPhone: this.fcPhone,
      fcExtension: this.fcExtension,
      fcType: this.fcType,
      fcPrimary: this.fcPrimary,
    });

    this.fcType.setValue('Domestic');
  }

  cancelPhone(): void {
    this.fgPhoneNumbers.reset();
    this.onCancel.emit();
  }

  savePhone() {
    if (this.fgPhoneNumbers.valid) {
      this.onSave.emit({
        phone: this.fcPhone.value,
        extension: this.fcExtension.value,
        type: this.fcPhoneType.value,
      });
    }
  }
}
