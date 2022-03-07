import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import {
  ISarFinancialIntstitution,
  ISarFinancialIntstitutionBranch,
} from '@fcs/app/domain/models/sar';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@UntilDestroy()
@Component({
  selector: 'yh-sar-financial-institution-edit',
  templateUrl: './sar-financial-institution-edit.component.html',
  styleUrls: ['./sar-financial-institution-edit.component.scss'],
})
export class SarFinancialInstitutionEditComponent implements OnInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  @Input()
  institution: ISarFinancialIntstitution;

  trashed: Set<ISarFinancialIntstitutionBranch> =
    new Set<ISarFinancialIntstitutionBranch>();

  fgInstitution: FormGroup;
  fcName: FormControl = new FormControl();
  fcNameUnknown: FormControl = new FormControl();
  fcType: FormControl = new FormControl();
  fcTypeOther: FormControl = new FormControl({ disabled: true, value: null });

  fcPrimaryFederalRegulator: FormControl = new FormControl();
  faTypeOfGaming: FormArray;
  fcTypeOfGamingOther: FormControl = new FormControl();
  faTypeOfSecurities: FormArray;
  fcTypeOfSecuritiesOther: FormControl = new FormControl();

  fcIdentificationType: FormControl = new FormControl();
  fcIndentificationNumber: FormControl = new FormControl();

  faRole: FormArray;
  fcAlternateName: FormControl = new FormControl();
  fcFileNumber: FormControl = new FormControl();
  fcLoss: FormControl = new FormControl();

  fcTin: FormControl = new FormControl();
  fcTinType: FormControl = new FormControl();
  fcAddress: FormControl = new FormControl();
  fcAddressUnknown: FormControl = new FormControl();
  fcCity: FormControl = new FormControl();
  fcCityUnknown: FormControl = new FormControl();
  fcState: FormControl = new FormControl();
  fcZipCode: FormControl = new FormControl();
  fcZipCodeUnknown: FormControl = new FormControl();
  fcCountry: FormControl = new FormControl();
  fcCountryUnknown: FormControl = new FormControl();

  gamingActivitiesOptions: FieldOption<string>[] = [
    new FieldOption('State licensed casino', ''),
    new FieldOption('Tribal authorized casino', ''),
    new FieldOption('Card club', ''),
    new FieldOption('Other', ''),
  ];
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
  roleOptions: FieldOption<string>[] = [
    new FieldOption('Selling Location', ''),
    new FieldOption('Paying Location', ''),
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.faRole = this.fb.array([]);
    this.faTypeOfGaming = this.fb.array([]);
    this.faTypeOfSecurities = this.fb.array([]);

    this.populateControls(this.roleOptions, this.faRole, null);
    this.populateControls(
      this.gamingActivitiesOptions,
      this.faTypeOfGaming,
      this.fcTypeOfGamingOther
    );
    this.populateControls(
      this.securitiesOptions,
      this.faTypeOfSecurities,
      this.fcTypeOfSecuritiesOther
    );

    this.fgInstitution = this.fb.group({
      fcName: this.fcName,
      fcNameUnknown: this.fcNameUnknown,
      fcType: this.fcType,
      fcTypeOther: this.fcTypeOther,

      fcPrimaryFederalRegulator: this.fcPrimaryFederalRegulator,
      faTypeOfGaming: this.faTypeOfGaming,
      fcTypeOfGamingOther: this.fcTypeOfGamingOther,
      faTypeOfSecurities: this.faTypeOfSecurities,
      fcTypeOfSecuritiesOther: this.fcTypeOfSecuritiesOther,

      fcIdentificationType: this.fcIdentificationType,
      fcIndentificationNumber: this.fcIndentificationNumber,

      faRole: this.faRole,
      fcAlternateName: this.fcAlternateName,
      fcFileNumber: this.fcFileNumber,
      fcLoss: this.fcLoss,

      fcTin: this.fcTin,
      fcTinType: this.fcTinType,
      fcAddress: this.fcAddress,
      fcAddressUnknown: this.fcAddressUnknown,
      fcCity: this.fcCity,
      fcCityUnknown: this.fcCityUnknown,
      fcState: this.fcState,
      fcZipCode: this.fcZipCode,
      fcZipCodeUnknown: this.fcZipCodeUnknown,
      fcCountry: this.fcCountry,
      fcCountryUnknown: this.fcCountryUnknown,
    });
  }

  showFormPanel(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
  }
  saveItem(item: ISarFinancialIntstitutionBranch): void {
    this.institution.branches.push(item);
    this.overlayPanel.hide();
  }
  cancelItem(): void {
    this.overlayPanel.hide();
  }

  markForDelete(id: ISarFinancialIntstitutionBranch): void {
    if (this.trashed.has(id)) {
      this.trashed.delete(id);
    } else {
      this.trashed.add(id);
    }
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
