import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-activity-statistics-filters',
  templateUrl: './activity-statistics-filters.component.html',
  styleUrls: ['./activity-statistics-filters.component.scss'],
})
export class ActivityStatisticsFiltersComponent implements OnInit {
  fgFilters: FormGroup;
  fcSubject: FormControl = new FormControl();
  fcAccounts: FormControl = new FormControl();
  fcPlot: FormControl = new FormControl();
  fcCashInOut: FormControl = new FormControl();
  fcMedium: FormControl = new FormControl();
  fcType: FormControl = new FormControl();
  fcCredit: FormControl = new FormControl();
  fcDebit: FormControl = new FormControl();
  fcAmountType: FormControl = new FormControl();
  fcDateRangeFrom: FormControl = new FormControl();
  fcDateRangeTo: FormControl = new FormControl();

  timePeriodOptions: FieldOption<string>[] = [
    new FieldOption('Weekly', 'Weekly'),
    new FieldOption('Bi-Weekly', 'Bi-Weekly'),
    new FieldOption('Monthly', 'Monthly'),
    new FieldOption('Quarterly', 'Quarterly'),
    new FieldOption('Semi-Annually', 'Semi-Annually'),
  ];

  transactionTypeOptions: FieldOption<string>[] = [
    new FieldOption('Credit', 'Credit'),
    new FieldOption('Debit', 'Debit'),
    new FieldOption('Both', 'Both'),
  ];

  amountTypeOptions: FieldOption<string>[] = [
    new FieldOption('Amount', 'Amount'),
    new FieldOption('Volume', 'Volume'),
  ];

  activityTypeOptions: FieldOption<string>[] = [
    new FieldOption('ACH', 'ACH'),
    new FieldOption('ATM', 'ATM'),
    new FieldOption('Cash', 'Cash'),
    new FieldOption('Check', 'Check'),
    new FieldOption('Wire', 'Wire'),
    new FieldOption('Transfer', 'Transfer'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcSubject: this.fcSubject,
      fcAccounts: this.fcAccounts,

      fcCashInOut: this.fcCashInOut,
      fcType: this.fcType,
    });
  }
}
