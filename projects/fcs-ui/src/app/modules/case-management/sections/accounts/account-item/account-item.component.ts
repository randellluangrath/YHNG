import { Component, Input, OnInit } from '@angular/core';
import { AccountType, IAccount } from '@fcs/app/domain/models/account';
import { faInfoCircle, IconDefinition } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'yh-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.scss'],
})
export class AccountItemComponent implements OnInit {
  @Input()
  account: IAccount;

  @Input()
  selected: boolean;

  AccountType = AccountType;

  informationIcon: IconDefinition = faInfoCircle;

  constructor() {}

  ngOnInit(): void {}
}
