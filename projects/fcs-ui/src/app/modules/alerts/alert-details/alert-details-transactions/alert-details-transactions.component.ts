import { Component, OnInit } from '@angular/core';
import { ITransaction } from '@fcs/app/domain/models/transaction';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import {
  faBookmark as falBookmark,
  faFlag as falFlag,
} from '@fortawesome/pro-light-svg-icons';
import {
  faBookmark as fasBookmark,
  faFlag as fasFlag,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';
import * as _ from 'lodash';
@Component({
  selector: 'yh-alert-details-transactions',
  templateUrl: './alert-details-transactions.component.html',
  styleUrls: ['./alert-details-transactions.component.scss'],
})
export class AlertDetailsTransactionsComponent implements OnInit {
  transactions: ITransaction[] = [];
  selectedTransactions: ITransaction[] = [];

  unflaggedIcon: IconDefinition = falBookmark;
  flaggedIcon: IconDefinition = fasBookmark;

  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();
  fcMedium: FormControl = new FormControl();
  fcType: FormControl = new FormControl();

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

  flagAllTransactions: boolean;

  constructor(private fb: FormBuilder, private mocks: MockDataService) {}

  ngOnInit(): void {
    this.transactions = Array.from(new Array(100), (v, k) =>
      this.mocks.createTransaction(k)
    );

    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcMedium: this.fcMedium,
      fcType: this.fcType,
    });
  }

  toggleFlaggedItems() {
    this.flagAllTransactions = !this.flagAllTransactions;
    this.transactions.forEach((t) => (t.flagged = this.flagAllTransactions));
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
