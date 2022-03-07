import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-account-id-criteria',
  templateUrl: './account-id-criteria.component.html',
  styleUrls: ['./account-id-criteria.component.scss'],
})
export class AccountIdCriteriaComponent implements OnInit {
  fgCriteria: FormGroup;
  fcType: FormControl = new FormControl();

  fgAccountIds: FormGroup;
  faAccounts: FormArray;

  options: FieldOption<string>[] = [
    new FieldOption('Matches', 'Matches'),
    new FieldOption('Includes', 'Includes'),
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.faAccounts = this.fb.array([this.createItem()]);
    this.fgCriteria = this.fb.group({
      fcType: this.fcType,
      faAccounts: this.faAccounts,
    });
  }

  addItem(): void {
    this.faAccounts.push(this.createItem());
  }

  private createItem(): FormGroup {
    return this.fb.group({
      fcAccount: '', // needs validators
    });
  }
}
