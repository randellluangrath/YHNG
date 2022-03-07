import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { Client, IClient } from '@fcs/app/domain/models/clients';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';
import * as faker from 'faker';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'yh-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss'],
})
export class ClientSearchComponent implements OnInit {
  @Output()
  onSelected: EventEmitter<Client> = new EventEmitter<Client>();

  fgLookup: FormGroup;
  fcTerm: FormControl = new FormControl();

  hasSearched: boolean;

  infoIcon: IconDefinition = faInfoCircle;

  client: Client;

  clientList: Client[] = Array.from(new Array(15), () => {
    return this.mock.createClient();
  });

  associatedAccounts: string[] = [
    '1324387634524',
    '543233246345',
    '1235412687756432',
    '12345677643',
    '125676434',
  ];

  items: MenuItem[] = [
    {
      label: 'Clients (8)',
      icon: 'fal fa-user',
      command: () => {
        this.viewState$.next(ViewState.Clients);
      },
    },
    {
      label: 'Accounts (20)',
      icon: 'fal money-bill',
      command: () => {
        this.viewState$.next(ViewState.Accounts);
      },
    },
  ];

  activeItem: MenuItem;

  ViewState = ViewState;

  viewState$: BehaviorSubject<ViewState> = new BehaviorSubject<ViewState>(
    ViewState.Clients
  );

  constructor(private fb: FormBuilder, private mock: MockDataService) {}

  ngOnInit(): void {
    this.fgLookup = this.fb.group({
      fcTerm: this.fcTerm,
    });

    this.fcTerm.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((term: string) => {
        this.hasSearched = true;
      });
  }
}

enum ViewState {
  Clients,
  Accounts,
}

export interface IClientLookup {
  name: string;
  type: string;
}
