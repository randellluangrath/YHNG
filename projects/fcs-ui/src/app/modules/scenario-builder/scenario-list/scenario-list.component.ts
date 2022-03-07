import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '@fcs/app/domain/models/clients';
import * as _ from 'lodash';
import { MenuItem, TreeNode } from 'primeng/api';
import * as faker from 'faker';
import { Menu } from 'primeng/menu';
@Component({
  selector: 'yh-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.scss'],
})
export class ScenarioListComponent implements OnInit {
  @ViewChild(Menu)
  menu: Menu;

  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl('');
  fcType: FormControl = new FormControl();

  scenarios: IScenario[];

  selectedScenario: IScenario;

  showSearchDrawer: boolean;

  items: MenuItem[] = [
    {
      label: 'Options',
      items: [
        { label: 'Edit', icon: 'pi pi-pencil' },
        { label: 'View', icon: 'pi pi-eye' },
        {
          label: 'Clone',
          icon: 'pi pi-copy',
        },
        // {
        //   label: 'Disable',
        //   icon: 'pi pi-ban',

        // },
        {
          label: 'Enable',
          icon: 'pi pi-check-circle',
        },
        {
          separator: true,
        },
        {
          label: 'Delete',
          icon: 'pi pi-trash',
        },
      ],
    },
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcType: this.fcType,
    });

    const items: IScenario[] = [];
    for (var i = 0, max = 100; i < max; i++) {
      items.push(this.generateClientItem(i));
    }

    this.scenarios = _.orderBy(items, (i) => i.updatedOn, 'desc');
  }

  handleRowSelected(e: any): void {
    this.router.navigateByUrl('/scenario-engine/1');
  }

  handleRowUnselected(e: any): void {}

  handleDrawerCancel(): void {
    this.selectedScenario = null;
  }

  handleOnHide(): void {
    this.selectedScenario = null;
    this.showSearchDrawer = false;
  }

  toggleOptionsMenu(event: any): void {
    this.menu.toggle(event);
  }

  private generateClientItem(id: number): IScenario {
    return {
      enabled: true,
      type: 'BSA/AML',
      activityType: 'Structuring',
      name: 'Scenario Name',
      schedule: 'Daily',
      updatedBy: 'John W.',
      updatedOn: new Date().toUTCString(),
    };
  }
}

interface IScenario {
  enabled: boolean;
  type: string;
  activityType: string;
  name: string;
  schedule: string;
  updatedBy: string;
  updatedOn: string;
}
