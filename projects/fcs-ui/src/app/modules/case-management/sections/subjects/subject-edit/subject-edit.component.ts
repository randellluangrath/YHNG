import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ISubject, ISubjectAddress } from '@fcs/app/domain/models/subject';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FieldOption } from 'projects/shared/src/lib/models/models';

import * as faker from 'faker';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faExclamationCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { INaicsCode, naicsCodes } from '@fcs/app/domain/models/naics';

@Component({
  selector: 'yh-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.scss'],
})
export class SubjectEditComponent implements OnInit {
  @ViewChild(OverlayPanel)
  overlayPanel: OverlayPanel;

  errorIcon: IconDefinition = faExclamationCircle;
  warningIcon: IconDefinition = faExclamationTriangle;

  // Stubbed for testing
  @Input()
  subject: ISubject = {
    id: -1,
    type: 'Individual',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: null,
    dateOfBirth: null,
    gender: 'Male',
    alternateNames: [],
    phoneNumbers: [],
    websites: [],
    emailAddresses: [],
    identifications: [],
    addresses: [],
    isSelected: false,
  };

  fgSubject: FormGroup;
  fcType: FormControl = new FormControl('');
  fcLastName: FormControl = new FormControl('');
  fcLastNameUnknown: FormControl = new FormControl('');
  fcFirstName: FormControl = new FormControl('');
  fcFirstNameUnknown: FormControl = new FormControl('');
  fcMiddleName: FormControl = new FormControl('');
  fcSuffix: FormControl = new FormControl('');
  fcSuffixUnknown: FormControl = new FormControl('');
  fcDateOfBirth: FormControl = new FormControl('');
  fcGender: FormControl = new FormControl();
  fcOccupationOrBusinessType: FormControl = new FormControl();
  fcNaicsCode: FormControl = new FormControl('');
  fcTin: FormControl = new FormControl('');
  fcTinUnknown: FormControl = new FormControl('');
  fcTinType: FormControl = new FormControl();
  fcComments: FormControl = new FormControl('');

  faWebsites: FormArray;
  faPhoneNumbers: FormArray;

  fgAddress: FormGroup;
  fcAddress: FormControl = new FormControl('');
  fcAddressUnknown: FormControl = new FormControl('');
  fcCity: FormControl = new FormControl('');
  fcCityUnknown: FormControl = new FormControl('');
  fcState: FormControl = new FormControl('');
  fcStateUnknown: FormControl = new FormControl('');
  fcZipCode: FormControl = new FormControl('');
  fcZipCodeUnknown: FormControl = new FormControl('');
  fcCountry: FormControl = new FormControl('');
  fcCountryUnknown: FormControl = new FormControl('');

  tinTypeOptions: FieldOption<string>[] = [
    new FieldOption('EIN', 'EIN'),
    new FieldOption('SSN-ITIN', 'SSN-ITIN'),
    new FieldOption('Foreign', 'Foreign'),
  ];

  typeOptions: FieldOption<string>[] = [
    new FieldOption('Individual', 'Individual'),
    new FieldOption('Entity', 'Entity'),
  ];

  addresses: ISubjectAddress[] = [];

  filteredSubjects: IExistingSubject[] = [];

  existingSubjects: IExistingSubject[] = [];

  naicsOptions: FieldOption<string>[] = naicsCodes.map((c: INaicsCode) => {
    return new FieldOption(`${c.code} - ${c.description}`, c.code.toString());
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.faWebsites = this.fb.array([this.createNameItem()]);

    this.faPhoneNumbers = this.fb.array([this.createPhoneNumberItem()]);

    this.fgSubject = this.fb.group({
      fcType: this.fcType,
      fcFirstName: this.fcFirstName,
      fcFirstNameUnknown: this.fcFirstNameUnknown,
      fcLastName: this.fcLastName,
      fcLastNameUnknown: this.fcLastNameUnknown,
      fcMiddleName: this.fcMiddleName,
      fcSuffix: this.fcSuffix,
      fcSuffixUnknown: this.fcSuffixUnknown,
      fcDateOfBirth: this.fcDateOfBirth,
      fcGender: this.fcGender,
      fcOccupationOrBusinessType: this.fcOccupationOrBusinessType,
      fcNaicsCode: this.fcNaicsCode,
      fcTin: this.fcTin,
      fcTinUnknown: this.fcTinUnknown,
      fcTinType: this.fcTinType,
      faWebsites: this.faWebsites,
      faPhoneNumbers: this.faPhoneNumbers,
      fcComments: this.fcComments,
    });

    this.fgAddress = this.fb.group({
      fcAddress: this.fcAddress,
      fcAddressUnknown: this.fcAddressUnknown,
      fcCity: this.fcCity,
      fcCityUnknown: this.fcCityUnknown,
      fcState: this.fcState,
      fcStateUnknown: this.fcStateUnknown,
      fcZipCode: this.fcZipCode,
      fcZipCodeUnknown: this.fcZipCodeUnknown,
      fcCountry: this.fcCountry,
      fcCountryUnknown: this.fcCountryUnknown,
    });

    this.existingSubjects = Array.from(new Array(100), () => {
      return {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
      };
    });
  }

  ngAfterViewInit(): void {
    if (this.subject) {
      this.addresses = Array.from(this.subject.addresses);
    }
  }

  filterSubjects(event): void {
    let query: string = event.query;

    this.filteredSubjects = this.existingSubjects.filter(
      (i) => i.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  addWebsiteNameItem(): void {
    this.faWebsites.push(this.createNameItem());
  }

  addPhoneNumberItem(): void {
    this.faPhoneNumbers.push(this.createPhoneNumberItem());
  }

  private createNameItem(): FormGroup {
    return this.fb.group({
      fcName: '',
    });
  }

  private createPhoneNumberItem(): FormGroup {
    return this.fb.group({
      fcPhone: '',
      fcExtension: '',
      fcType: '',
    });
  }
}

export interface IExistingSubject {
  name: string;
}
