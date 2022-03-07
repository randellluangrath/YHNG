import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'yh-account-edit-external',
  templateUrl: './account-edit-external.component.html',
  styleUrls: ['./account-edit-external.component.scss'],
})
export class AccountEditExternalComponent implements OnInit {
  @Input()
  inline: boolean = true;

  fgExternalAccount: FormGroup;
  fcAccountTitle: FormControl = new FormControl();
  fcInstitutionTitle: FormControl = new FormControl();
  fcNonUsFinancialInstitution: FormControl = new FormControl();
  fcAccountNumber: FormControl = new FormControl();
  fcClosed: FormControl = new FormControl();
  fcTin: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgExternalAccount = this.fb.group({
      fcInstitutionTitle: this.fcInstitutionTitle,
      fcTin: this.fcTin,
      fcNonUsFinancialInstitution: this.fcNonUsFinancialInstitution,
      fcAccountNumber: this.fcAccountNumber,
      fcAccountTitle: this.fcAccountTitle,
      fcClosed: this.fcClosed,
    });
  }
}
