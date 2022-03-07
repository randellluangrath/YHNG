import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ITransaction } from '@fcs/app/domain/models/transaction';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FieldOption } from 'projects/shared/src/lib/models/models';
import {
  faFileExport as falFileExport,
  faFlag as falFlag,
} from '@fortawesome/pro-light-svg-icons';
import {
  faFileExport as fasFileExport,
  faFlag as fasFlag,
} from '@fortawesome/free-solid-svg-icons';
import * as faker from 'faker';
import * as moment from 'moment';
import * as _ from 'lodash';
import { MockDataService } from '@fcs/app/services/mock-data.service';
@Component({
  selector: 'yh-activity-transactions',
  templateUrl: './activity-transactions.component.html',
  styleUrls: ['./activity-transactions.component.scss'],
})
export class ActivityTransactionsComponent implements OnInit {
  showFilters: boolean;
  exportIconLight: IconDefinition = falFileExport;

  transactions: ITransaction[] = [];

  unflaggedIcon: IconDefinition = falFlag;
  flaggedIcon: IconDefinition = fasFlag;

  selectedTransactions: ITransaction[] = [];

  isExpanded: boolean;

  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();
  fcMedium: FormControl = new FormControl();
  fcType: FormControl = new FormControl();
  fcDateRange: FormControl = new FormControl();

  mediumOptions: FieldOption<string>[] = [
    new FieldOption('ACH', 'ACH'),
    new FieldOption('Cash', 'Cash'),
    new FieldOption('Check', 'Check'),
    new FieldOption('Wire', 'Wire'),
  ];

  transactionTypeOptions: FieldOption<string>[] = [
    new FieldOption('Credit', 'Credit'),
    new FieldOption('Debit', 'Debit'),
  ];

  constructor(private fb: FormBuilder, private mocks: MockDataService) {}

  ngOnInit(): void {
    this.transactions = Array.from(new Array(100), (v, k) =>
      this.mocks.createTransaction(k)
    );

    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcMedium: this.fcMedium,
      fcType: this.fcType,
      fcDateRange: this.fcDateRange,
    });
  }

  handleAddNew(): void {}

  handleDrawerCancel(): void {}

  handleOnHide(): void {}

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  isSelected(transaction: ITransaction) {
    return this.selectedTransactions.indexOf(transaction) > -1;
  }

  getSelectedTransactionsTotal(): number {
    if (!this.selectedTransactions) {
      return 0;
    }
    return _.sum(this.selectedTransactions.map((t) => t.credit));
  }
}
