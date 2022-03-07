import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { countryOptions } from '@fcs/app/domain/models/countries';
import { stateOptions } from '@fcs/app/domain/models/states';
import { ISubjectAddress } from '@fcs/app/domain/models/subject';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@UntilDestroy()
@Component({
  selector: 'yh-subject-address-edit',
  templateUrl: './subject-address-edit.component.html',
  styleUrls: ['./subject-address-edit.component.scss'],
})
export class SubjectAddressEditComponent implements OnInit {
  @Input()
  address: ISubjectAddress;

  @Output()
  onSave: EventEmitter<ISubjectAddress> = new EventEmitter<ISubjectAddress>();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter<void>();

  countryOptions: FieldOption<string>[] = countryOptions;
  stateOptions: FieldOption<string>[] = stateOptions;

  fgAddress: FormGroup;
  fcType: FormControl = new FormControl();
  fcTypeUnknown: FormControl = new FormControl();
  fcAddress: FormControl = new FormControl('');
  fcAddressUnknown: FormControl = new FormControl('');
  fcAddressTwo: FormControl = new FormControl('');
  fcAddressThree: FormControl = new FormControl('');
  fcCity: FormControl = new FormControl('');
  fcCityUnknown: FormControl = new FormControl('');
  fcState: FormControl = new FormControl();
  fcStateUnknown: FormControl = new FormControl('');
  fcZipCode: FormControl = new FormControl('');
  fcZipCodeUnknown: FormControl = new FormControl('');
  fcCountry: FormControl = new FormControl();
  fcCountryUnknown: FormControl = new FormControl('');

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgAddress = this.fb.group({
      fcType: this.fcType,
      fcTypeUnknown: this.fcTypeUnknown,
      fcAddress: this.fcAddress,
      fcAddressUnknown: this.fcAddressUnknown,
      fcAddressTwo: this.fcAddressTwo,
      fcAddressThree: this.fcAddressThree,
      fcCity: this.fcCity,
      fcCityUnknown: this.fcCityUnknown,
      fcState: this.fcState,
      fcStateUnknown: this.fcStateUnknown,
      fcZipCode: this.fcZipCode,
      fcZipCodeUnknown: this.fcZipCodeUnknown,
      fcCountry: this.fcCountry,
      fcCountryUnknown: this.fcCountryUnknown,
    });

    this.fcAddressUnknown.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: boolean) => {
        if (value) {
          this.fcAddress.disable();
        } else {
          this.fcAddress.enable();
        }
      });

    this.fcCityUnknown.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: boolean) => {
        if (value) {
          this.fcCity.disable();
        } else {
          this.fcCity.enable();
        }
      });

    this.fcStateUnknown.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: boolean) => {
        if (value) {
          this.fcState.disable();
        } else {
          this.fcState.enable();
        }
      });

    this.fcZipCodeUnknown.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: boolean) => {
        if (value) {
          this.fcZipCode.disable();
        } else {
          this.fcZipCode.enable();
        }
      });

    this.fcCountryUnknown.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: boolean) => {
        if (value) {
          this.fcCountry.disable();
        } else {
          this.fcCountry.enable();
        }
      });
  }

  cancelAddress(): void {
    this.fgAddress.reset();
    this.onCancel.emit();
  }

  saveAddress() {
    if (this.fgAddress.valid) {
      this.onSave.emit({
        id: 1,
        address: this.fcAddress.value,
        addressUnknown: this.fcAddressUnknown.value,
        city: this.fcCity.value,
        cityUnknown: this.fcCityUnknown.value,
        state: this.fcState.value,
        stateUnknown: this.fcStateUnknown.value,
        zipCode: this.fcZipCode.value,
        zipCodeUnknown: this.fcZipCodeUnknown.value,
        country: this.fcCountry.value,
        countryUnknown: this.fcCountryUnknown.value,
      });
    }
  }
}
