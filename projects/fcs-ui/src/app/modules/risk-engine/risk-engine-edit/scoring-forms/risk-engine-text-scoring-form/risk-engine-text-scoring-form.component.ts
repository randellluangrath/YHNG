import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IDataPointValue } from '@fcs/app/domain/models/data-point';
import * as faker from 'faker';

@Component({
  selector: 'yh-risk-engine-text-scoring-form',
  templateUrl: './risk-engine-text-scoring-form.component.html',
  styleUrls: ['./risk-engine-text-scoring-form.component.scss'],
})
export class RiskEngineTextScoringFormComponent implements OnInit {
  fgFilters: FormGroup;
  fcValue: FormControl = new FormControl();

  fgCreate: FormGroup;
  fcCode: FormControl = new FormControl();
  fcDescription: FormControl = new FormControl();
  fcScore: FormControl = new FormControl();

  values: IDataPointValue[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcValue: this.fcValue,
    });

    this.fgCreate = this.fb.group({
      fcCode: this.fcCode,
      fcDescription: this.fcCode,
      fcScore: this.fcScore,
    });

    this.values = Array.from(new Array(10), (v, k) => {
      return {
        id: k,
        code: faker.random.alphaNumeric(5),
        description: faker.lorem.words(),
        score: 30,
      };
    });
  }

  onRowEditInit(point: IDataPointValue) {}

  onRowEditSave(point: IDataPointValue) {}

  onRowEditCancel(point: IDataPointValue, index: number) {}
}
