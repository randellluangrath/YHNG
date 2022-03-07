import { Component, OnInit } from '@angular/core';
import { Client } from '@fcs/app/domain/models/clients';
import * as faker from 'faker';

@Component({
  selector: 'yh-unmerge-clients',
  templateUrl: './unmerge-clients.component.html',
  styleUrls: ['./unmerge-clients.component.scss'],
})
export class UnmergeClientsComponent implements OnInit {
  clients: Client[] = [];
  constructor() {}

  ngOnInit(): void {
    const clientA = new Client();
    clientA.clientId = 'VT857:14259';
    clientA.externalId = 'NGUYEN';

    const clientB = new Client();
    clientB.clientId = 'VT857:14260';
    clientB.externalId = 'NGUYEN';

    const clientC = new Client();
    clientC.clientId = 'VT857:NAA0212';
    clientC.externalId = 'HUNG NGUYEN';

    this.clients.push(clientA);
    this.clients.push(clientB);
    this.clients.push(clientC);
  }
}
