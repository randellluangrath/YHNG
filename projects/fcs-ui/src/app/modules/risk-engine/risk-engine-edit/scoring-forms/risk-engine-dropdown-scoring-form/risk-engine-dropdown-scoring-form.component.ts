import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IDataPointValue } from '@fcs/app/domain/models/data-point';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';
import * as _ from 'lodash';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-risk-engine-dropdown-scoring-form',
  templateUrl: './risk-engine-dropdown-scoring-form.component.html',
  styleUrls: ['./risk-engine-dropdown-scoring-form.component.scss'],
})
export class RiskEngineDropdownScoringFormComponent implements OnInit {
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcValue: this.fcValue,
    });

    this.fgCreate = this.fb.group({
      fcCode: this.fcCode,
      fcScore: this.fcScore,
    });

    // this.values = Array.from(new Array(10), (v, k) => {
    //   return {
    //     id: k,
    //     code: this.options[k].label,
    //     score: 30,
    //   };
    // });

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

  addNewItem(): void {
    if (this.fgCreate.valid) {
    } else {
      this.fcCode.markAsDirty();
      this.fcScore.markAsDirty();

      this.fcCode.updateValueAndValidity();
      this.fcScore.updateValueAndValidity();
    }
  }
  onRowEditInit(point: IDataPointValue) {}

  onRowEditSave(point: IDataPointValue) {}

  onRowEditCancel(point: IDataPointValue, index: number) {}
}
