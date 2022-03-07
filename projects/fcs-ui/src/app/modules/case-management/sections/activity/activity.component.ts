import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'yh-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  activeItem: MenuItem;

  items: MenuItem[] = [
    {
      label: 'Evidence',
      icon: 'fal fa-search-dollar',
      command: () => {
        this._viewState = ViewState.Evidence;
      },
    },
    {
      label: 'Transactions',
      icon: 'fal fa-barcode-alt',
      command: () => {
        this._viewState = ViewState.Transactions;
      },
    },
    {
      label: 'Statistics',
      icon: 'fal fa-file-spreadsheet',
      command: () => {
        this._viewState = ViewState.Statistics;
      },
    },
  ];

  _viewState = ViewState.Evidence;

  ViewState = ViewState;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  handleAddNew(): void {}

  handleDrawerCancel(): void {}

  handleOnHide(): void {}
}

enum ViewState {
  Evidence,
  Transactions,
  Statistics,
}

export interface IAccountSuggestion {
  name: string;
  accountId: string;
  accountType: string;
  suggested: boolean;
  selected: boolean;
}
