import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'yh-subject-individual-form',
  templateUrl: './subject-individual-form.component.html',
  styleUrls: ['./subject-individual-form.component.scss'],
})
export class SubjectIndividualFormComponent implements OnInit {
  fgIdentity: FormGroup;
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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgIdentity = this.fb.group({
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
      fcTin: this.fcTin,
      fcTinType: this.fcTinType,
    });
  }
}
