import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { Case } from '@fcs/app/domain/models/case';
import { ISuspiciousActivityReport } from '@fcs/app/domain/models/sar';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'yh-client-history',
  templateUrl: './client-history.component.html',
  styleUrls: ['./client-history.component.scss'],
})
export class ClientHistoryComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Cases',
      command: () => {
        this.reset();
        this.viewState$.next(ViewState.Case);
      },
    },
    {
      label: 'Alerts',
      command: () => {
        this.reset();
        this.viewState$.next(ViewState.Alert);
      },
    },
    {
      label: 'Risk',
      command: () => {
        this.reset();
        this.viewState$.next(ViewState.Risk);
      },
    },
    {
      label: 'SAR',
      command: () => {
        this.reset();
        this.viewState$.next(ViewState.Sar);
      },
    },
  ];

  activeItem: MenuItem = this.items[0];

  viewState$: BehaviorSubject<ViewState> = new BehaviorSubject<ViewState>(
    ViewState.Case
  );

  ViewState = ViewState;

  selectedCase: Case;
  selectedSar: ISuspiciousActivityReport;

  constructor() {}

  ngOnInit(): void {
    // this.viewState$.pipe(untilDestroyed(this)).subscribe((view: ViewState) => {
    //   this.reset();
    // });
  }

  selectCase(selectedCase: Case): void {
    this.selectedCase = selectedCase;
  }

  selectSar(selectedSar: ISuspiciousActivityReport): void {
    this.selectedSar = selectedSar;
  }

  reset(): void {
    this.selectedCase = null;
    this.selectedSar = null;
  }
}

enum ViewState {
  Case,
  Alert,
  Risk,
  Sar,
}
