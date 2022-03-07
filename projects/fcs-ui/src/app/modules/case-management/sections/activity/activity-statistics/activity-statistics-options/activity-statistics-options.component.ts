import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@UntilDestroy()
@Component({
  selector: 'yh-activity-statistics-options',
  templateUrl: './activity-statistics-options.component.html',
  styleUrls: ['./activity-statistics-options.component.scss'],
})
export class ActivityStatisticsOptionsComponent implements OnInit {
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
  fcHistoricalPeriod: FormControl = new FormControl();
  fcHistoricalPeriodOther: FormControl = new FormControl({
    value: 0,
    disabled: true,
  });

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

  historicalPeriodOptions: FieldOption<string>[] = [
    new FieldOption('3 months', '3'),
    new FieldOption('6 months', '6'),
    new FieldOption('9 months', '9'),
    new FieldOption('12 months', '12'),
    new FieldOption('Other', 'Other'),
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
      fcPlot: this.fcPlot,
      fcCashInOut: this.fcCashInOut,
      fcType: this.fcType,
      fcMedium: this.fcMedium,

      fcAmountType: this.fcAmountType,
      fcDateRangeFrom: this.fcDateRangeFrom,
      fcHistoricalPeriod: this.fcHistoricalPeriod,
      fcHistoricalPeriodOther: this.fcHistoricalPeriodOther,
    });

    this.fcHistoricalPeriod.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: string) => {
        if (value === 'Other') {
          this.fcHistoricalPeriodOther.enable();
        } else {
          this.fcHistoricalPeriodOther.disable();
        }
      });

    this.fcHistoricalPeriodOther.valueChanges.subscribe((value: string) => {
      console.log(value);
    });
  }
}
