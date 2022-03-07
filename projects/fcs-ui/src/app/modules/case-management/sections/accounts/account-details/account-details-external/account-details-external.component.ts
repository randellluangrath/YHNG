import { Component, Input, OnInit } from '@angular/core';
import { IAccount } from '@fcs/app/domain/models/account';

@Component({
  selector: 'yh-account-details-external',
  templateUrl: './account-details-external.component.html',
  styleUrls: ['./account-details-external.component.scss'],
})
export class AccountDetailsExternalComponent implements OnInit {
  @Input()
  account: IAccount;

  constructor() {}

  ngOnInit(): void {}
}
