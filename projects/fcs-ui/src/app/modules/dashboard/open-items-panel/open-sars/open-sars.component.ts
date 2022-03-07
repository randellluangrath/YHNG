import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import * as faker from 'faker';
import * as _ from 'lodash';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-open-sars',
  templateUrl: './open-sars.component.html',
  styleUrls: ['./open-sars.component.scss'],
})
export class OpenSarsComponent implements OnInit {
  statuses: SarStatus[] = [
    SarStatus.Rejected,
    SarStatus.Initial,
    SarStatus.Correction,
    SarStatus.Review,
  ];

  openSars: IDashboardSarItem[] = Array.from(new Array(10), () => {
    return {
      name: `SAR Filing Name`,
      due: new Date().toUTCString(),
      status: this.statuses[faker.datatype.number({ min: 0, max: 3 })],
    };
  });

  fgFilter: FormGroup;
  fcFilter: FormControl = new FormControl();

  options: FieldOption<SarStatus>[] = [
    new FieldOption('Initial', SarStatus.Initial),
    new FieldOption('Correction', SarStatus.Correction),
    new FieldOption('Rejected', SarStatus.Rejected),
    new FieldOption('Review', SarStatus.Review),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilter = this.fb.group({
      fcFilter: this.fcFilter,
    });

    this.openSars = _.orderBy(this.openSars, (o) => o.status, ['desc']);
  }
}
export interface IDashboardSarItem {
  name: string;
  due: string;
  status: SarStatus;
}

export enum SarStatus {
  Rejected,
  Initial,
  Correction,
  Review,
}
