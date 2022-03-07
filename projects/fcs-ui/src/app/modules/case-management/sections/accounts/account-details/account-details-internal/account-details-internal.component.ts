import { Component, Input, OnInit } from '@angular/core';
import { IAccount } from '@fcs/app/domain/models/account';

@Component({
  selector: 'yh-account-details-internal',
  templateUrl: './account-details-internal.component.html',
  styleUrls: ['./account-details-internal.component.scss'],
})
export class AccountDetailsInternalComponent implements OnInit {
  @Input()
  account: IAccount;

  constructor() {}

  ngOnInit(): void {}
}
