import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IDataPointValue } from '@fcs/app/domain/models/data-point';
import { INaicsCode, naicsCodes } from '@fcs/app/domain/models/naics';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';
import * as _ from 'lodash';
import { TreeNode } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FieldOption } from 'projects/shared/src/lib/models/models';
import { NaicsLookupComponent } from './naics-lookup/naics-lookup.component';

@Component({
  selector: 'yh-risk-enging-naics-scoring-form',
  templateUrl: './risk-enging-naics-scoring-form.component.html',
  styleUrls: ['./risk-enging-naics-scoring-form.component.scss'],
})
export class RiskEngingNaicsScoringFormComponent implements OnInit {
  @Input()
  labelSingular: string;

  @Input()
  labelPlural: string;

  @Input()
  options: FieldOption<string>[] = [];

  fgFilters: FormGroup;
  fcValue: FormControl = new FormControl();

  fgCreate: FormGroup;
  fcCode: FormControl = new FormControl(null, Validators.required);
  fcScore: FormControl = new FormControl(null, Validators.required);

  values: IDataPointValue[] = [];

  filteredOptions: FieldOption<string>[] = [];

  infoIcon: IconDefinition = faInfoCircle;

  showNaicsDrawer: boolean = false;

  selectedCode: INaicsCode[];
  stagedCode: INaicsCode[];

  constructor(private fb: FormBuilder, public dialogService: DialogService) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcValue: this.fcValue,
    });

    this.fgCreate = this.fb.group({
      fcCode: this.fcCode,
      fcScore: this.fcScore,
    });

    this.values = naicsCodes.map((c: INaicsCode, i: number) => {
      return {
        id: i,
        code: c.code.toString(),
        description: c.description,
        score: 30,
      };
    });

    this.filteredOptions = this.options.filter(
      (o) => this.values.find((v) => v.code === o.label) == null
    );
  }

  getValidOptions(dataPoint: IDataPointValue): FieldOption<string>[] {
    return _.orderBy(
      [
        ...this.filteredOptions,
        new FieldOption<string>(dataPoint.code, dataPoint.code),
      ],
      'label'
    );
  }

  getCodeSummary(): string {
    if (this.selectedCode.length > 0) {
      if (this.selectedCode.length > 3) {
        const firstCodes = this.selectedCode.filter((c, i) => {
          return i < 3;
        });
        return `${firstCodes.map((c) => c.code).join(', ')} + ${
          this.selectedCode.length - 3
        } more`;
      }

      return `${this.selectedCode.map((c) => c.code).join(', ')}`;
    }

    return 'No Code(s) Selected';
  }

  codeSelected(code: INaicsCode[]): void {
    this.stagedCode = code;
  }

  handleCodeSelected(): void {
    this.selectedCode = this.stagedCode;
    this.stagedCode = null;
    this.showNaicsDrawer = false;
  }

  showNaicsLookup(): void {
    // const ref = this.dialogService.open(NaicsLookupComponent, {
    //   header: 'Select a NAICS Code',
    //   width: '70%',
    // });
    this.showNaicsDrawer = true;
  }

  addNewItem(): void {
    if (this.fgCreate.valid) {
    } else {
      this.fcCode.markAsDirty();
      this.fcScore.markAsDirty();

      this.fcCode.updateValueAndValidity();
      this.fcScore.updateValueAndValidity();
    }
  }

  handleOnHide(): void {
    this.showNaicsDrawer = false;
  }
  onRowEditInit(point: IDataPointValue) {}

  onRowEditSave(point: IDataPointValue) {}

  onRowEditCancel(point: IDataPointValue, index: number) {}
}
