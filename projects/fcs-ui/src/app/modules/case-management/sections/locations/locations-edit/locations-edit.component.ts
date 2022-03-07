import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { countryOptions } from '@fcs/app/domain/models/countries';
import { ILocation } from '@fcs/app/domain/models/locations';
import { stateOptions } from '@fcs/app/domain/models/states';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-locations-edit',
  templateUrl: './locations-edit.component.html',
  styleUrls: ['./locations-edit.component.scss'],
})
export class LocationsEditComponent implements OnInit {
  @Input()
  location: ILocation;

  countryOptions: FieldOption<string>[] = countryOptions;
  stateOptions: FieldOption<string>[] = stateOptions;

  fgExternalLocation: FormGroup;
  fcName: FormControl = new FormControl();
  fcTin: FormControl = new FormControl();
  fcTinUnknown: FormControl = new FormControl();
  fcTinType: FormControl = new FormControl();
  fcPhone: FormControl = new FormControl();
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
    this.fgExternalLocation = this.fb.group({
      fcName: this.fcName,
      fcTin: this.fcTin,
      fcTinUnknown: this.fcTinUnknown,
      fcTinType: this.fcTinType,
      fcPhone: this.fcPhone,
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
  }
}
