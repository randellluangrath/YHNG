import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Client } from '@fcs/app/domain/models/clients';
import * as _ from 'lodash';
import * as faker from 'faker';
import { Router } from '@angular/router';

@Component({
  selector: 'yh-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl('');
  fcSort: FormControl = new FormControl();

  clients: Client[];

  selectedClient: Client;

  showSearchDrawer: boolean;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcSort: this.fcSort,
    });

    const items: Client[] = [];
    for (var i = 0, max = 100; i < max; i++) {
      items.push(this.generateClientItem(i));
    }

    this.clients = _.orderBy(items, (i) => i.riskScore, 'desc');
  }

  handleRowSelected(e: any): void {
    this.router.navigateByUrl('/client-management/1');
  }

  handleRowUnselected(e: any): void {}

  handleDrawerCancel(): void {
    this.selectedClient = null;
  }

  handleOnHide(): void {
    this.selectedClient = null;
    this.showSearchDrawer = false;
  }

  private generateClientItem(id: number): Client {
    const client = new Client();
    client.title = faker.name.findName();
    client.type = 'Individual';
    client.tin = faker.datatype.number(10000);
    client.riskScore = faker.datatype.number(100);
    return client;
  }
}
