import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IAccount, AccountType } from '@fcs/app/domain/models/account';
import * as faker from 'faker';

@Component({
  selector: 'yh-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();

  selectedAccount: IAccount;

  accounts: IAccount[] = [];

  showAccountsForm: boolean = false;

  showAddNewDrawer: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
    });

    for (var i = 0, max = 12; i < max; i++) {
      this.accounts.push(this.generateItem(i));
    }
  }
  showAccountsDrawer(): void {
    this.showAddNewDrawer = true;
  }
  hideAccountsDrawer(): void {
    this.showAccountsForm = false;
  }
  selectItem(account: IAccount): void {
    this.showAccountsForm = false;

    if (this.selectedAccount === account) {
      this.selectedAccount = null;
    } else {
      this.selectedAccount = account;
    }
  }
  handleAddNew(): void {
    this.selectedAccount = null;
    this.showAccountsForm = true;
  }

  handleFormClose(event: MouseEvent): void {
    this.showAccountsForm = false;
  }

  handleDetailClose(event: MouseEvent): void {
    this.selectedAccount = null;
  }

  handleEditAccount(account: IAccount): void {
    this.selectedAccount = account;
    this.showAccountsForm = true;
  }

  private generateItem(id: number): IAccount {
    return {
      id: id,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      accountId: `${faker.random.alphaNumeric(4)}:${faker.random.alphaNumeric(
        3
      )}:${faker.datatype.number()}:${faker.random.alpha()}`.toUpperCase(),
      product: 'TS',
      institution: id % 2 == 0 ? 'Internal FI Name' : 'External FI Name',
      type: id % 2 == 0 ? AccountType.Internal : AccountType.External,
      averageBalance: faker.random.float(),
      currentBalance: faker.random.float(),
      naics: 0,
      msb: false,
      notes: Array.from(new Array(2), (v, k) => {
        return {
          id: k,
          title: 'Note Title',
          note: 'Eveniet modi sed. Inventore cupiditate ipsam cupiditate aut ad. Est autem odit ad excepturi molestiae eum minima quam quisquam. Eveniet modi sed sed.',
          created: new Date().toUTCString(),
          createdBy: 'John W.',
          updated: new Date().toUTCString(),
          updatedBy: 'John W.',
          attachmentId: id,
          attachmentName: 'Attachment Name',
          attachmentType: 'pdf',
          isSelected: false,
        };
      }),
      openedDate: new Date().toUTCString(),
      closedDate: null,
      branch: '101',
      relationship: null,
      addedBy: 'Melanie B.',
      addedOnDate: new Date().toUTCString(),
      createdDate: new Date().toUTCString(),
    };
  }
}
