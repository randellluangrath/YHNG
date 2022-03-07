import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AccountType, IAccount } from '@fcs/app/domain/models/account';

@Component({
  selector: 'yh-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss'],
})
export class AccountEditComponent implements OnInit {
  @Input()
  account: IAccount;

  @Output()
  onSave: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter<void>();

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

  save(): void {}
  cancel(): void {
    this.onCancel.emit();
  }
  handleClose(): void {
    this.cancel();
  }
}
