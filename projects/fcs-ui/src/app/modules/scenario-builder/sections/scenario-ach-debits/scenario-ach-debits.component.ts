import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'yh-scenario-ach-debits',
  templateUrl: './scenario-ach-debits.component.html',
  styleUrls: ['./scenario-ach-debits.component.scss'],
})
export class ScenarioAchDebitsComponent implements OnInit {
  rules: string[] = [
    'ACH Inactivity',
    'Duplicate Serial Number',
    'Dupliate Serial Number (Same Day)',
    'First ACH Debit',
    'High # Transactions Today',
    'High 30 Day Total # Transactions',
    'High 7 Day Total # Transactions',
    'Large 30 Day Total $',
    'Large 7 Day Total $',
    'Large Amount',
    'Large Amount (fixed $)',
    'Large Total $ Today',
    'Largest Amount',
    'New Account',
    'New ACH Originator on Account',
    'New ACH Originator on Institution',
    'Previous Fraud on Originator',
    'Primary Customer is Deceased',
    'Primary Customer is Deceased',
  ];

  treeData: TreeNode[] = [];

  cols: any[] = [
    { field: 'name', header: 'Name' },
    { field: 'value', header: 'Value' },
  ];

  commonChild: TreeNode[] = [
    {
      data: {
        isProperty: true,
        name: 'Active',
        value: false,
      },
    },
    {
      data: { isProperty: true, name: 'Red Flag', value: false },
    },
    {
      data: {
        name: 'Description',
        isProperty: true,
        value: 'Large Amount (fixed $)',
      },
    },
    {
      data: {
        name: 'Amount considered relevant',
        isProperty: true,
        value: 123123.11,
      },
    },
    {
      data: {
        name: 'Large $ Amount',
        isProperty: true,
        value: 123123.11,
      },
    },
    {
      data: {
        name: 'Risk Weight',
        isProperty: true,
        value: 0.05,
      },
    },
  ];

  selectedNode: TreeNode;

  constructor() {}

  ngOnInit(): void {
    this.treeData = this.rules.map((s) => {
      return {
        data: { isRule: true, name: s },
        children: this.commonChild,
      };
    });
  }

  nodeSelect(event): void {
    console.log('node selected');
  }

  nodeUnselect(event): void {}

  isRowSelected(rowNode: any): boolean {
    return false;
  }

  toggleRowSelection(rowNode: any): void {}
}
