import { Component, Input, OnInit } from '@angular/core';
import { IExternalAccount } from '@fcs/app/domain/models/account';

@Component({
  selector: 'yh-account-details-external-item',
  templateUrl: './account-details-external-item.component.html',
  styleUrls: ['./account-details-external-item.component.scss'],
})
export class AccountDetailsExternalItemComponent implements OnInit {
  @Input()
  account: IExternalAccount;

  constructor() {}

  ngOnInit(): void {}
}
