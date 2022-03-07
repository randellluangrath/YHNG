import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ITransaction } from '@fcs/app/domain/models/transaction';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as _ from 'lodash';
import { FieldOption } from 'projects/shared/src/lib/models/models';
import {
  faBookmark as falBookmark,
  faFlag as falFlag,
} from '@fortawesome/pro-light-svg-icons';
import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
import { IAlertHistoryRecord } from '@fcs/app/domain/models/alerts';
import * as moment from 'moment';
@Component({
  selector: 'yh-alert-details-history',
  templateUrl: './alert-details-history.component.html',
  styleUrls: ['./alert-details-history.component.scss'],
})
export class AlertDetailsHistoryComponent implements OnInit {
  records: IAlertHistoryRecord[] = [];
  selectedRecords: IAlertHistoryRecord[] = [];

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
    this.records = Array.from(new Array(100), (v, k) =>
      this.mocks.createAlertHistoryRecord()
    );

    this.records = _.orderBy(this.records, (r) => moment(r.created), ['desc']);

    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcMedium: this.fcMedium,
      fcType: this.fcType,
    });
  }

  isSelected(transaction: IAlertHistoryRecord) {
    return this.selectedRecords.indexOf(transaction) > -1;
  }
}
