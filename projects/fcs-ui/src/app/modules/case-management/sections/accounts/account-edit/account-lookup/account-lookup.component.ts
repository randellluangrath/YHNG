import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {
  AutoCompleteFieldOption,
  FieldOption,
} from 'projects/shared/src/lib/models/models';
import { IAccountSuggestion } from '../../../activity/activity.component';
import * as faker from 'faker';

@Component({
  selector: 'yh-account-lookup',
  templateUrl: './account-lookup.component.html',
  styleUrls: ['./account-lookup.component.scss'],
})
export class AccountLookupComponent implements OnInit {
  fgFilters: FormGroup;
  fcAccounts: FormControl = new FormControl();

  accounts: IAccountSuggestion[] = [];

  fcType: FormControl = new FormControl(null);

  options: FieldOption<string>[] = [
    new FieldOption('Internal', 'Internal'),
    new FieldOption('External', 'External'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accounts = Array.from(new Array(100), () =>
      this.generateSuggestionItem()
    );

    this.fgFilters = this.fb.group({
      fcAccounts: this.fcAccounts,
      fcType: this.fcType,
    });
  }

  handleSelection(option: AutoCompleteFieldOption): void {
    // this.accountsAdded.push(
    //   this.accounts.find((a) => a.accountId === option.value)
    // );
    // this.fcAccounts.reset();
    // this.faAccounts.push(new FormControl(true));
  }

  private generateSuggestionItem(): IAccountSuggestion {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      accountId: faker.finance.account(14),
      accountType: 'Checking',
      suggested: false,
      selected: false,
    };
  }
}
