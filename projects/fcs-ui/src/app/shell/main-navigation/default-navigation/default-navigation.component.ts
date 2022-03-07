import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-regular-svg-icons';

import {
  faAddressCard,
  faBoxOpen,
  faChartPie,
  faClipboardList,
  faCogs,
  faColumns,
  faExclamation,
  faFileInvoice,
  faFlag,
  faList,
  faSearchLocation,
  faTachometer,
  faUsers,
} from '@fortawesome/pro-light-svg-icons';
import {
  INavigationGroup,
  INavigationItem,
} from 'projects/shared/src/lib/components/layout/main-navigation/models';

@Component({
  selector: 'yh-default-navigation',
  templateUrl: './default-navigation.component.html',
  styleUrls: ['./default-navigation.component.scss'],
})
export class DefaultNavigationComponent implements OnInit {
  @Output()
  onExpanded: EventEmitter<boolean> = new EventEmitter<boolean>();

  dashboardIcon: IconDefinition = faStar;

  groups: INavigationGroup[] = [
    {
      name: '',
      items: [
        {
          location: '/dashboard',
          title: 'Dashboard',
          icon: faTachometer,
        },
      ],
    },
    {
      name: 'Main',
      items: [
        {
          location: '/alerts',
          title: 'Alerts',
          icon: faFlag,
        },
        {
          location: '/risk',
          title: 'Risk',
          icon: faExclamation,
        },
        {
          location: '/optimization',
          title: 'Optimization',
          icon: faCogs,
        },
        {
          location: '/case-management/1/overview',
          title: 'Case Management',
          icon: faAddressCard,
        },
        {
          location: '/ctr',
          title: 'CTR',
          icon: faFileInvoice,
        },
        {
          location: '/sar',
          title: 'SAR',
          icon: faFileInvoice,
        },
        {
          location: '/client-management',
          title: 'Clients',
          icon: faUsers,
        },
        {
          location: '/watchlist',
          title: 'Watch List',
          icon: faClipboardList,
        },
      ],
    },
    {
      name: 'Administration',
      items: [
        {
          location: '/due-diligence',
          title: 'Due Diligence',
          icon: faSearchLocation,
        },
        {
          location: '/due-diligence/edd-schedule-management',
          title: 'EDD Scheduling',
          icon: faSearchLocation,
        },
        {
          location: '/reports',
          title: 'Reports',
          icon: faChartPie,
        },
        {
          location: '/sets',
          title: 'Client & Account Sets',
          icon: faList,
        },
        {
          location: '/sandbox',
          title: 'Sandbox',
          icon: faBoxOpen,
        },
        {
          location: '/scenario-engine',
          title: 'Scenario Builder',
          icon: faColumns,
          children: [
            {
              location: '/scenario-engine/general',
              title: 'General',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'ACH Credits',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'ACH Debits',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'ACH Organizations',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'ATM Debits DDA',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'Deposits DDA',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'EFT',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'Faster Payments',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'Money Laundering',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'On Us Checks DDA',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'Point of Sale Debits DDA',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'Teller Interface',
              icon: faColumns,
            },
            {
              location: '/scenario-engine/general',
              title: 'Wire Organizations',
              icon: faColumns,
            },
          ],
        },
        {
          location: '/risk-engine/1',
          title: 'Risk Engine',
          icon: faColumns,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleExpanded(isExpanded: boolean): void {
    this.onExpanded.emit(isExpanded);
  }
}
