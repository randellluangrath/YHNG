import { Component, OnInit } from '@angular/core';
import {
  ISetGrouping,
  SetGroupType,
} from '@fcs/app/domain/models/client-account-set';
import * as _ from 'lodash';
import { MenuItem } from 'primeng/api';
import * as faker from 'faker';
import { Router } from '@angular/router';

@Component({
  selector: 'yh-client-account-sets-list',
  templateUrl: './client-account-sets-list.component.html',
  styleUrls: ['./client-account-sets-list.component.scss'],
})
export class ClientAccountSetsListComponent implements OnInit {
  groupings: ISetGrouping[];
  selectedGroup: ISetGrouping;

  items: MenuItem[];
  activeItem: MenuItem;

  names: string[] = [
    'ATM Owners',
    'Elders',
    'MRB',
    'MSB',
    'New Clients',
    'Non-Personal',
    'Non-Resident Aliens',
    'Non-Personal High Risk',
    'Personal',
    'Personal High-Risk',
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.groupings = _.orderBy(
      Array.from(new Array(10), (val, index) => this.generateSet(index)),
      (i) => i.name,
      'desc'
    );

    this.items = [{ label: 'Client Sets' }, { label: 'Account Sets' }];

    this.activeItem = this.items[0];
  }

  handleRowSelected(e: any): void {
    this.router.navigateByUrl('/sets/-1');
  }

  handleRowUnselected(e: any): void {}

  private generateSet(id: number): ISetGrouping {
    return {
      id: id,
      name: this.names[id],
      type: SetGroupType.Client,
      created: '',
      createdBy: `${faker.random.alpha(2)}`.toUpperCase(),
      updated: new Date().toUTCString(),
      updatedBy: '',
      criteria: [],
    };
  }
}
