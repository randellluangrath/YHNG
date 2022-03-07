import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import * as faker from 'faker';
@Component({
  selector: 'yh-client-account-sets-edit',
  templateUrl: './client-account-sets-edit.component.html',
  styleUrls: ['./client-account-sets-edit.component.scss'],
})
export class ClientAccountSetsEditComponent implements OnInit {
  fgSet: FormGroup;
  fcName: FormControl = new FormControl();
  fcClientName: FormControl = new FormControl();

  items: MenuItem[] = [
    {
      label: 'Criteria',
      command: () => {
        this._viewState = ViewState.Criteria;
      },
    },
    {
      label: 'Manually Entered',
      command: () => {
        this._viewState = ViewState.Manual;
      },
    },
  ];
  activeItem: MenuItem = this.items[0];

  criteria: number[] = Array.from(new Array(3), (v, k) => k);

  ViewState = ViewState;
  _viewState: ViewState = ViewState.Criteria;

  actions: MenuItem[] = [
    {
      label: 'Cancel',
      icon: 'pi pi-times',
      command: () => {},
    },
    {
      separator: true,
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {},
    },
  ];

  names: string[] = Array.from(
    new Array(5),
    () => `${faker.name.firstName()} ${faker.name.lastName()}`
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgSet = this.fb.group({
      fcName: this.fcName,
      fcClientName: this.fcClientName,
    });
  }
}
enum ViewState {
  Criteria,
  Manual,
}
