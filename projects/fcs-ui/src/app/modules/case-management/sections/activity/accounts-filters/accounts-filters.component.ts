import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { AutoCompleteFieldOption } from 'projects/shared/src/lib/models/models';
import * as faker from 'faker';
import { IExternalAccount } from '@fcs/app/domain/models/account';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';
import { UntilDestroy } from '@fcs/app/@core';
import { IAccountSuggestion } from '../activity.component';
import * as _ from 'lodash';

@UntilDestroy()
@Component({
  selector: 'yh-accounts-filters',
  templateUrl: './accounts-filters.component.html',
  styleUrls: ['./accounts-filters.component.scss'],
})
export class AccountsFiltersComponent implements OnInit {
  infoIcon: IconDefinition = faInfoCircle;

  fgFilters: FormGroup;
  fcAccounts: FormControl = new FormControl();
  faAccounts: FormArray;
  fcComments: FormControl = new FormControl();
  faSuggestedAccounts: FormArray;
  faCaseAccounts: FormArray;

  accounts: IAccountSuggestion[] = [];

  accountsAdded: IAccountSuggestion[] = [];

  accountSuggestions: IAccountSuggestion[] = [];

  accountOptions: AutoCompleteFieldOption[];

  caseAccounts: IAccountSuggestion[] = [];

  showFindAccountDrawer: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accounts = _.orderBy(
      Array.from(new Array(100), () => this.generateSuggestionItem()),
      (a) => a.name
    );

    this.accountOptions = this.accounts.map((suggestion) => {
      return new AutoCompleteFieldOption(
        suggestion.name,
        suggestion.accountId,
        `${suggestion.accountType} - ${suggestion.accountId}`
      );
    });

    this.faAccounts = this.fb.array([]);
    this.faCaseAccounts = this.fb.array([]);
    this.faSuggestedAccounts = this.fb.array([]);

    this.fgFilters = this.fb.group({
      fcAccounts: this.fcAccounts,
      fcComments: this.fcComments,
      faAccounts: this.faAccounts,
      faSuggestedAccounts: this.faSuggestedAccounts,
      faCaseAccounts: this.faCaseAccounts,
    });

    this.prepopulateSuggestedAccounts(this.accountOptions[0]);
    this.prepopulateSuggestedAccounts(this.accountOptions[1]);

    for (var i = 2, max = 8; i < max; i++) {
      this.prepopulateCaseAccounts(this.accountOptions[i]);
    }
  }

  showForm(event: MouseEvent): void {}

  prepopulateCaseAccounts(option: AutoCompleteFieldOption): void {
    this.caseAccounts.push(
      this.accounts.find((a) => a.accountId === option.value)
    );
    this.faCaseAccounts.push(new FormControl(false));
  }

  prepopulateSuggestedAccounts(option: AutoCompleteFieldOption): void {
    this.accountSuggestions.push(
      this.accounts.find((a) => a.accountId === option.value)
    );
    this.faSuggestedAccounts.push(new FormControl(false));
  }

  handleSelection(option: AutoCompleteFieldOption): void {
    this.accountsAdded.push(
      this.accounts.find((a) => a.accountId === option.value)
    );
    this.fcAccounts.reset();

    this.faAccounts.push(new FormControl(true));
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
