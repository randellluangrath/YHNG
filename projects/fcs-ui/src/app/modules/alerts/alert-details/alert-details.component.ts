import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'yh-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.scss'],
})
export class AlertDetailsComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Violations (8)',
      icon: 'fal fa-exclamation-triangle',
      command: () => {
        this.viewState$.next(ViewState.Violations);
      },
    },
    {
      label: 'Evidence (20)',
      icon: 'fal fa-search-dollar',
      command: () => {
        this.viewState$.next(ViewState.Evidence);
      },
    },
    {
      label: 'Transactions (32)',
      icon: 'fal fa-barcode-alt',
      command: () => {
        this.viewState$.next(ViewState.Transactions);
      },
    },
    {
      label: 'History (21)',
      icon: 'fal fa-history',
      command: () => {
        this.viewState$.next(ViewState.History);
      },
    },
  ];

  activeItem: MenuItem;

  ViewState = ViewState;

  viewState$: BehaviorSubject<ViewState> = new BehaviorSubject<ViewState>(
    ViewState.Transactions
  );

  constructor() {}

  ngOnInit(): void {}
}

enum ViewState {
  Evidence,
  Transactions,
  History,
  Violations,
}
