import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@UntilDestroy()
@Component({
  selector: 'yh-sar-filing-institution',
  templateUrl: './sar-filing-institution.component.html',
  styleUrls: ['./sar-filing-institution.component.scss'],
})
export class SarFilingInstitutionComponent implements OnInit {
  fgContact: FormGroup;
  fcType: FormControl = new FormControl();
  fcTypeOther: FormControl = new FormControl({ disabled: true, value: null });
  fcFederalRegulator: FormControl = new FormControl();
  fcFilerName: FormControl = new FormControl();
  fcTin: FormControl = new FormControl();
  fcTinType: FormControl = new FormControl();
  faSecurities: FormArray;
  fcSecuritiesOther: FormControl = new FormControl();
  fcIdentificationType: FormControl = new FormControl();
  fcIdentificationNumber: FormControl = new FormControl();

  fcAddress: FormControl = new FormControl();
  fcCity: FormControl = new FormControl();
  fcState: FormControl = new FormControl();
  fcZipCode: FormControl = new FormControl();
  fcCountry: FormControl = new FormControl();

  fcAlternateName: FormControl = new FormControl();
  fcFileNumber: FormControl = new FormControl();
  fcLeAgency: FormControl = new FormControl();
  fcLeName: FormControl = new FormControl();
  fcLePhone: FormControl = new FormControl();
  fcLePhoneExt: FormControl = new FormControl();
  fcLeContactDate: FormControl = new FormControl();

  fcInstitutionContactOffice: FormControl = new FormControl();
  fcInstitutionContactPhone: FormControl = new FormControl();
  fcInstitutionContactPhoneExt: FormControl = new FormControl();

  securitiesOptions: FieldOption<string>[] = [
    new FieldOption('Clearing broker-securities', ''),
    new FieldOption('Execution-only broker securities', ''),
    new FieldOption('Futures Commission Merchant', ''),
    new FieldOption('Holding company', ''),
    new FieldOption('Introducing broker-commodities', ''),
    new FieldOption('Introducing broker-securities', ''),
    new FieldOption('Investment cdviser', ''),
    new FieldOption('Investment company', ''),
    new FieldOption('Retail foreign exchange dealer', ''),
    new FieldOption('self-clearing broker securities', ''),
    new FieldOption('Subsidiary of financial/bank holding comapny', ''),
    new FieldOption('Other', ''),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.faSecurities = this.fb.array([]);
    this.populateControls(
      this.securitiesOptions,
      this.faSecurities,
      this.fcSecuritiesOther
    );

    this.fgContact = this.fb.group({
      fcType: this.fcType,
      fcTypeOther: this.fcTypeOther,
      fcFederalRegulator: this.fcFederalRegulator,
      fcFilerName: this.fcFilerName,
      fcTin: this.fcTin,
      fcTinType: this.fcTinType,
      faSecurities: this.faSecurities,
      fcSecuritiesOther: this.fcSecuritiesOther,
      fcIdentificationType: this.fcIdentificationType,
      fcIdentificationNumber: this.fcIdentificationNumber,

      fcAddress: this.fcAddress,
      fcCity: this.fcCity,
      fcState: this.fcState,
      fcZipCode: this.fcZipCode,
      fcCountry: this.fcCountry,

      fcAlternateName: this.fcAlternateName,
      fcFileNumber: this.fcFileNumber,
      fcLeAgency: this.fcLeAgency,
      fcLeName: this.fcLeName,
      fcLePhone: this.fcLePhone,
      fcLePhoneExt: this.fcLePhoneExt,
      fcLeContactDate: this.fcLeContactDate,
      fcInstitutionContactOffice: this.fcInstitutionContactOffice,
      fcInstitutionContactPhone: this.fcInstitutionContactPhone,
      fcInstitutionContactPhoneExt: this.fcInstitutionContactPhone,
    });
  }
  private populateControls(
    options: FieldOption<string>[],
    formArray: FormArray,
    otherFormControl: FormControl
  ): void {
    options.forEach((o) => formArray.controls.push(new FormControl()));

    if (otherFormControl == null) return;

    formArray.controls[options.length - 1].valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: boolean) => {
        if (value) {
          otherFormControl.enable();
        } else {
          otherFormControl.disable();
        }
      });
  }
}
