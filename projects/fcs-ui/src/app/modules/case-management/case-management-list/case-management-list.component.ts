import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { Case, CaseStatus, CaseType } from '@fcs/app/domain/models/case';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import { ScreenSize, WindowService } from '@fcs/app/services/window.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import * as faker from 'faker';
import * as _ from 'lodash';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@UntilDestroy()
@Component({
  selector: 'yh-case-management-list',
  templateUrl: './case-management-list.component.html',
  styleUrls: ['./case-management-list.component.scss'],
})
export class CaseManagementListComponent implements OnInit {
  @ViewChild(Menu)
  menu: Menu;

  cases: Case[] = [];

  loading: boolean = false;

  indicatorIcon: IconDefinition = faCircle;

  items: MenuItem[] = [
    {
      label: 'Options',
      items: [
        { label: 'Edit', icon: 'pi pi-pencil' },
        {
          label: 'Assign',
          icon: 'pi pi-user-edit',
        },
      ],
    },
    {
      label: 'Change Status',
      items: [
        { label: 'Close', icon: 'pi pi-folder' },
        { label: 'Merge', icon: 'fal fa-code-merge' },
        { label: 'Reopen', icon: 'pi pi-folder-open' },
      ],
    },
    {
      label: 'Add',
      items: [
        { label: 'Task', icon: 'fal fa-tasks' },
        { label: 'Authorized User', icon: 'pi pi-user-plus' },
      ],
    },
  ];

  showDrawer: boolean;
  showDrawerFullscreen: boolean;

  fgFilter: FormGroup;
  fcTerm: FormControl = new FormControl();
  fcChips: FormControl = new FormControl();

  private statuses: string[] = [
    'Open',
    'Closed',
    'Merged',
    'Pending',
    'Reopened',
    'SAR Filed',
  ];
  private types: string[] = [
    'BSA',
    'Fraud',
    'EDD Review',
    'Subpoena Review',
    'Watchlist',
  ];

  clearIcon: IconDefinition = faTimesCircle;

  constructor(
    private windowService: WindowService,
    private mock: MockDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fgFilter = this.fb.group({
      fcTerm: this.fcTerm,
      fcChips: this.fcChips,
    });

    const cases = Array.from(new Array(10), (v, i) => this.mock.createCase());
    this.cases = _.sortBy(
      cases,
      ['highPriority', 'caseStatus.id'],
      ['asc', 'asc']
    );

    this.windowService
      .screenSize()
      .pipe(untilDestroyed(this))
      .subscribe((screenSize: ScreenSize) => {
        if (screenSize === ScreenSize.Small) {
          this.showDrawerFullscreen = true;
        } else {
          this.showDrawerFullscreen = false;
        }
      });
  }

  showFiltersDrawer(): void {
    this.showDrawer = true;
  }

  hideFiltersDrawer(): void {
    this.showDrawer = false;
  }

  onRowSelect(event: any): void {
    alert('selected: ' + event.data.caseName);
  }

  toggleOptionsMenu(event: any): void {
    this.menu.toggle(event);
  }
}
