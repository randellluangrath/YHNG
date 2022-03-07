import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import * as _ from 'lodash';
@Component({
  selector: 'yh-client-account-matches-list',
  templateUrl: './client-account-matches-list.component.html',
  styleUrls: ['./client-account-matches-list.component.scss'],
})
export class ClientAccountMatchesListComponent implements OnInit {
  matches: string[] = _.orderBy(
    Array.from(new Array(30), () => {
      return `${faker.name.firstName()} ${faker.name.lastName()}`;
    })
  );

  constructor() {}

  ngOnInit(): void {}
}
