import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { Case, CaseStatus, CaseType } from '@fcs/app/domain/models/case';
import { IRiskScenario } from '@fcs/app/domain/models/risk';
import { ScreenSize, WindowService } from '@fcs/app/services/window.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import * as faker from 'faker';
import * as _ from 'lodash';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@UntilDestroy()
@Component({
  selector: 'yh-risk-engine-list',
  templateUrl: './risk-engine-list.component.html',
  styleUrls: ['./risk-engine-list.component.scss'],
})
export class RiskEngineListComponent implements OnInit {
  @ViewChild(Menu)
  menu: Menu;

  scenarios: IRiskScenario[] = [];

  loading: boolean = false;

  indicatorIcon: IconDefinition = faCircle;

  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();

  items: MenuItem[] = [
    {
      label: 'Options',
      items: [
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
    });
    this.scenarios = Array.from(new Array(10), () => {
      return this.generateItem();
    });
  }

  onRowSelect(event: any): void {
    alert('selected: ' + event.data.name);
  }

  toggleOptionsMenu(event: any): void {
    this.menu.toggle(event);
  }

  private generateItem(): IRiskScenario {
    return {
      type: 'Custom',
      name: 'Personal Risk',
      schedule: 'Daily',
      updated: new Date().toUTCString(),
    };
  }
}
