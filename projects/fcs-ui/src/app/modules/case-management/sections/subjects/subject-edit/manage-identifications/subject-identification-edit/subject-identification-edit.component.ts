import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { ISubjectIdentification } from '@fcs/app/domain/models/subject';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@UntilDestroy()
@Component({
  selector: 'yh-subject-identification-edit',
  templateUrl: './subject-identification-edit.component.html',
})
export class SubjectIdentificationEditComponent implements OnInit {
  @Input()
  identification: ISubjectIdentification;

  @Output()
  onSave: EventEmitter<ISubjectIdentification> = new EventEmitter<ISubjectIdentification>();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter<void>();

  fgIdentification: FormGroup;
  fcType: FormControl = new FormControl();
  fcTypeOther: FormControl = new FormControl({ value: null, disabled: true });
  fcNumber: FormControl = new FormControl();
  fcCountry: FormControl = new FormControl();
  fcState: FormControl = new FormControl();

  typeOptions: FieldOption<string>[] = [
    new FieldOption(' ', ' '),
    new FieldOption(
      "Driver's Liciense / State Id",
      "Driver's Liciense / State Id"
    ),
    new FieldOption('Passport', 'Passport'),
    new FieldOption('Alien', 'Alien'),
    new FieldOption('Other', 'Other'),
  ];

  stateOptions: FieldOption<string>[] = [
    new FieldOption(' ', ' '),
    new FieldOption('TN', 'TN'),
  ];
  countryOptions: FieldOption<string>[] = [
    new FieldOption(' ', ' '),
    new FieldOption('USA', 'USA'),
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgIdentification = this.fb.group({
      fcType: this.fcType,
      fcTypeOther: this.fcTypeOther,
      fcNumber: this.fcNumber,
      fcCountry: this.fcCountry,
      fcState: this.fcState,
    });

    this.fcType.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: string) => {
        if (value === 'Other') {
          this.fcTypeOther.enable();
        } else {
          this.fcTypeOther.disable();
        }
      });
  }

  cancelIdentification(): void {
    this.fgIdentification.reset();
    this.onCancel.emit();
  }

  saveIdentification(): void {
    if (this.fgIdentification.valid) {
      this.onSave.emit({
        type: this.fcType.value,
        typeOther: this.fcTypeOther.value,
        number: this.fcNumber.value,
        country: this.fcCountry.value,
        state: this.fcState.value,
      });
    }
  }
}
