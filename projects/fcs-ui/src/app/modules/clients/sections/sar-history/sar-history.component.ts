import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ISuspiciousActivityReport } from '@fcs/app/domain/models/sar';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import * as _ from 'lodash';

@Component({
  selector: 'yh-sar-history',
  templateUrl: './sar-history.component.html',
  styleUrls: ['./sar-history.component.scss'],
})
export class SarHistoryComponent implements OnInit {
  @Output()
  selected: EventEmitter<ISuspiciousActivityReport> = new EventEmitter<ISuspiciousActivityReport>();

  sars: ISuspiciousActivityReport[] = [];

  selectedSar: ISuspiciousActivityReport;

  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();
  fcType: FormControl = new FormControl();

  constructor(private mock: MockDataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcType: this.fcType,
    });

    const sars = Array.from(new Array(10), (v, i) => this.mock.createSAR());
    this.sars = _.sortBy(
      sars,
      ['highPriority', 'caseStatus.id'],
      ['asc', 'asc']
    );
    this.selectedSar = this.sars[0];
  }

  selectSar(sar: ISuspiciousActivityReport): void {
    this.selectedSar = sar;
    this.selected.emit(sar);
  }
}
