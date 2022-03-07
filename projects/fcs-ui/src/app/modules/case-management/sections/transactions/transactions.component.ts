import { Component, OnInit } from '@angular/core';
import { ITransaction } from '@fcs/app/domain/models/transaction';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFlag as falFlag } from '@fortawesome/pro-light-svg-icons';
import { faFlag as fasFlag } from '@fortawesome/free-solid-svg-icons';
import * as faker from 'faker';
import * as moment from 'moment';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MockDataService } from '@fcs/app/services/mock-data.service';
@Component({
  selector: 'yh-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions: ITransaction[] = [];

  unflaggedIcon: IconDefinition = falFlag;
  flaggedIcon: IconDefinition = fasFlag;

  /**
   * PrimeNG's documentation for frozen columns isn't correct.
   * The example they show in the code is not how they actually implement it.
   * Using their example that's in the code would be nice vs this approach.
   */
  // Leaving this here as an example.
  frozenColumns: ITableHeader[] = [];

  scrollableColumns: ITableHeader[] = [
    {
      field: 'flagged',
      header: '',
      width: '50px',
    },
    {
      field: 'created',
      header: 'Date',
      width: '75px',
    },
    {
      field: 'account',
      header: 'Account',
      width: '200px',
    },
    {
      field: 'batch',
      header: 'Batch',
      width: '100px',
    },
    {
      field: 'sequence',
      header: 'Sequence',
      width: '100px',
    },
    {
      field: 'effective',
      header: 'Effective',
      width: '100px',
    },
    {
      field: 'description',
      header: 'Description',
      width: '200px',
    },
    {
      field: 'debit',
      header: 'Debit',
      width: '100px',
    },
    {
      field: 'credit',
      header: 'Credit',
      width: '100px',
    },
    {
      field: 'medium',
      header: 'Medium',
      width: '100px',
    },
    {
      field: 'occured',
      header: 'Time',
      width: '100px',
    },
    {
      field: 'serial',
      header: 'Serial',
      width: '100px',
    },
    {
      field: 'code',
      header: 'Code',
      width: '100px',
    },
  ];

  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl('');
  fcBranch: FormControl = new FormControl('');
  fcType: FormControl = new FormControl('');

  constructor(private fb: FormBuilder, private mocks: MockDataService) {}

  ngOnInit(): void {
    this.transactions = Array.from(new Array(100), (v, k) =>
      this.mocks.createTransaction(k)
    );

    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcBranch: this.fcBranch,
      fcType: this.fcType,
    });
  }
}

// PrimeNG sucks.  Their implementation of frozen columns is terrible.

interface ITableHeader {
  field: string;
  header: string;
  width: string;
}
