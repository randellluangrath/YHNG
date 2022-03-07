import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { AutoCompleteFieldOption } from 'projects/shared/src/lib/models/models';
import { IAccountSuggestion } from '../../../activity/activity.component';
import * as faker from 'faker';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';
import { IExternalAccount } from '@fcs/app/domain/models/account';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';
@Component({
  selector: 'yh-add-accounts',
  templateUrl: './add-accounts.component.html',
  styleUrls: ['./add-accounts.component.scss'],
})
export class AddAccountsComponent implements OnInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  infoIcon: IconDefinition = faInfoCircle;

  fgFilters: FormGroup;
  fcAccounts: FormControl = new FormControl();
  faAccounts: FormArray;
  fcComments: FormControl = new FormControl();
  faSuggestedAccounts: FormArray;

  accounts: IAccountSuggestion[] = [];

  accountsAdded: IAccountSuggestion[] = [];

  accountSuggestions: IAccountSuggestion[] = [];

  accountOptions: AutoCompleteFieldOption[];

  externalAccounts: IExternalAccount[] = [];

  showFindAccountDrawer: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accounts = Array.from(new Array(100), () =>
      this.generateSuggestionItem()
    );

    this.accountOptions = this.accounts.map((suggestion) => {
      return new AutoCompleteFieldOption(
        suggestion.name,
        suggestion.accountId,
        `${suggestion.accountType} - ${suggestion.accountId}`
      );
    });

    this.faAccounts = this.fb.array([]);
    this.faSuggestedAccounts = this.fb.array([]);

    this.fgFilters = this.fb.group({
      fcAccounts: this.fcAccounts,
      fcComments: this.fcComments,
      faAccounts: this.faAccounts,
      faSuggestedAccounts: this.faSuggestedAccounts,
    });

    this.prepopulateSuggestedAccounts(this.accountOptions[0]);
    this.prepopulateSuggestedAccounts(this.accountOptions[1]);
  }

  showForm(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
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
