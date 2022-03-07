import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'yh-scenario-ach-credits',
  templateUrl: './scenario-ach-credits.component.html',
  styleUrls: ['./scenario-ach-credits.component.scss'],
})
export class ScenarioAchCreditsComponent implements OnInit {
  rules: string[] = [
    'ACH Beneficiary Does Not Match CIF',
    'ACH Credit Activity',
    'First ACH Credit',
    'High # Transactions Today',
    'High 30 Day Total # Transactions',
    'High 7 Day Total $',
    'Know Your Customer',
    'Large 30 Day Total $',
    'Large 7 Day Total $',
    'Large Amount',
    'Large Amount (fixed $)',
    'Large Total $ Today',
    'Largest Amount',
    'New Account',
    'Primary Customer is Deceased',
    'Recent Case Created on Account',
    'Recent Fraud on Account',
    'Risk Modifier',
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

  showDrawer: boolean = false;
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
    this.showDrawer = true;
    this.selectedNode = event.node;
  }

  nodeUnselect(event): void {}

  isRowSelected(rowNode: any): boolean {
    return false;
  }

  toggleRowSelection(rowNode: any): void {}

  handleOnHide(): void {
    this.showDrawer = false;
    this.selectedNode = null;
  }
}
