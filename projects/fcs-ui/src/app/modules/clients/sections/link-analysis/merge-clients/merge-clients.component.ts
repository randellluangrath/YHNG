import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Client } from '@fcs/app/domain/models/clients';
import * as faker from 'faker';

@Component({
  selector: 'yh-merge-clients',
  templateUrl: './merge-clients.component.html',
  styleUrls: ['./merge-clients.component.scss'],
})
export class MergeClientsComponent implements OnInit {
  clients: Client[] = [];

  fgMerge: FormGroup;
  fcCip: FormControl = new FormControl();
  fcRanking: FormControl = new FormControl();
  fcSearch: FormControl = new FormControl('');

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgMerge = this.fb.group({
      fcCip: this.fcCip,
      fcRanking: this.fcRanking,
      fcSearch: this.fcSearch,
    });

    this.clients = Array.from(new Array(5), () => this.generateClientItem());
  }

  private generateClientItem(): Client {
    const client = new Client();
    client.id = faker.datatype.number(10000);
    client.title = faker.name.findName();
    client.type = 'Individual';
    client.tin = faker.datatype.number(10000);
    client.externalId = faker.datatype.number(10000);
    client.clientAsOf = new Date().toUTCString();
    return client;
  }
}
