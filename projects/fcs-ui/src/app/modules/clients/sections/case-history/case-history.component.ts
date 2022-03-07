import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Case } from '@fcs/app/domain/models/case';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import * as _ from 'lodash';

@Component({
  selector: 'yh-case-history',
  templateUrl: './case-history.component.html',
  styleUrls: ['./case-history.component.scss'],
})
export class CaseHistoryComponent implements OnInit {
  @Output()
  selected: EventEmitter<Case> = new EventEmitter<Case>();

  cases: Case[] = [];

  selectedCase: Case;

  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();
  fcType: FormControl = new FormControl();

  constructor(private mock: MockDataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcType: this.fcType,
    });

    const cases = Array.from(new Array(10), (v, i) => this.mock.createCase());
    this.cases = _.sortBy(
      cases,
      ['highPriority', 'caseStatus.id'],
      ['asc', 'asc']
    );
    this.selectedCase = this.cases[0];
  }

  selectCase(selectedCase: Case): void {
    this.selectedCase = selectedCase;
    this.selected.emit(selectedCase);
  }
}
