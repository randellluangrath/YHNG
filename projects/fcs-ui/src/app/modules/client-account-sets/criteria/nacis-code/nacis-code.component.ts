import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { INaicsCode, naicsCodes } from '@fcs/app/domain/models/naics';
import { TreeNode } from 'primeng/api';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-nacis-code',
  templateUrl: './nacis-code.component.html',
  styleUrls: ['./nacis-code.component.scss'],
})
export class NacisCodeComponent implements OnInit {
  fgCriteria: FormGroup;
  fcType: FormControl = new FormControl();

  fgAccountIds: FormGroup;
  faAccounts: FormArray;

  treeData: string[] = [];

  cols: any[] = [
    { field: 'code', header: 'Code' },
    { field: 'description', header: 'Description' },
  ];

  options: FieldOption<string>[] = [
    new FieldOption('Include', 'I'),
    new FieldOption('Exclude', 'E'),
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.faAccounts = this.fb.array([this.createItem()]);
    this.fgCriteria = this.fb.group({
      fcType: this.fcType,
      faAccounts: this.faAccounts,
    });

    this.treeData = naicsCodes.map((c: INaicsCode) => {
      return `${c.code} - ${c.description}`;
    });
  }

  addItem(): void {
    this.faAccounts.push(this.createItem());
  }

  nodeSelect(event): void {}

  nodeUnselect(event): void {}

  toggleRowSelection(rowNode: any): void {
    // if (this.isRowSelected(rowNode)) {
    //   this.selectedCodes.splice(this.selectedCodes.indexOf(rowNode.node), 1);
    // } else {
    //   this.selectedCodes.push(rowNode.node);
    // }
    // this.selectedCodes = [...this.selectedCodes];
    // console.log(this.selectedCodes.length);
  }

  private createItem(): FormGroup {
    return this.fb.group({
      fcAccount: '', // needs validators
    });
  }
}
