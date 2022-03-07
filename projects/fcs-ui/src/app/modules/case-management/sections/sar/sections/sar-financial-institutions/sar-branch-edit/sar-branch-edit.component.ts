import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ISarFinancialIntstitutionBranch } from '@fcs/app/domain/models/sar';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-sar-branch-edit',
  templateUrl: './sar-branch-edit.component.html',
  styleUrls: ['./sar-branch-edit.component.scss'],
})
export class SarBranchEditComponent implements OnInit {
  @Output()
  onSave: EventEmitter<ISarFinancialIntstitutionBranch> = new EventEmitter<ISarFinancialIntstitutionBranch>();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter<void>();

  fgBranch: FormGroup;
  fcAddress: FormControl = new FormControl();
  faRole: FormArray;
  fcCity: FormControl = new FormControl();
  fcState: FormControl = new FormControl();
  fcZipCode: FormControl = new FormControl();
  fcCountry: FormControl = new FormControl();
  fcRssdNumber: FormControl = new FormControl();

  roleOptions: FieldOption<string>[] = [
    new FieldOption('Selling Location', ''),
    new FieldOption('Paying Location', ''),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.faRole = this.fb.array([new FormControl(), new FormControl()]);

    this.fgBranch = this.fb.group({
      fcAddress: this.fcAddress,
      fcCity: this.fcCity,
      fcState: this.fcState,
      fcZipCode: this.fcZipCode,
      fcCountry: this.fcCountry,
      faRole: this.faRole,
      fcRssdNumber: this.fcRssdNumber,
    });
  }

  cancelItem(): void {
    this.fgBranch.reset();
    this.onCancel.emit();
  }

  saveItem(): void {
    if (this.fgBranch.valid) {
      this.onSave.emit({
        address: this.fcAddress.value,
        city: this.fcCity.value,
        state: this.fcState.value,
        country: this.fcCountry.value,
        zipCode: this.fcZipCode.value,
        role: this.faRole.value,
        rssdNumber: this.fcRssdNumber.value,
      });
    }
  }
}
