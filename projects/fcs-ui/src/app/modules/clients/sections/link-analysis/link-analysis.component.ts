import { Component, OnInit, ViewChild } from '@angular/core';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faBriefcase,
  faCreditCard,
  faEllipsisH,
  faFilter,
  faUser,
  faUsers,
  faUserSecret,
} from '@fortawesome/pro-light-svg-icons';
import { PanZoomConfig } from 'ngx-panzoom';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

import {
  faFileExport as falFileExport,
  faFlag as falFlag,
} from '@fortawesome/pro-light-svg-icons';
import {
  faFileExport as fasFileExport,
  faFlag as fasFlag,
} from '@fortawesome/free-solid-svg-icons';
import { ITransaction } from '@fcs/app/domain/models/transaction';
import { MockDataService } from '@fcs/app/services/mock-data.service';

@Component({
  selector: 'yh-link-analysis',
  templateUrl: './link-analysis.component.html',
  styleUrls: ['./link-analysis.component.scss'],
})
export class LinkAnalysisComponent implements OnInit {
  @ViewChild(Menu)
  menu: Menu;

  selectedClientId: any;

  cols: any[];

  RelationshipType = RelationshipType;

  contextMenuIcon: IconDefinition = faEllipsisH;

  items: MenuItem[];

  clientMenuItems: MenuItem[];

  aliasMenuItems: MenuItem[];

  accountIcon: IconDefinition = faCreditCard;
  aliasIcon: IconDefinition = faUserSecret;
  casesIcon: IconDefinition = faBriefcase;
  customerIcon: IconDefinition = faUsers;
  alertsIcon: IconDefinition = faBell;
  filterIcon: IconDefinition = faFilter;

  unflaggedIcon: IconDefinition = falFlag;
  flaggedIcon: IconDefinition = fasFlag;

  panZoomConfig: PanZoomConfig = new PanZoomConfig();

  transactions: ITransaction[] = [];

  showDrawer: boolean;

  data = [
    {
      label: 'Client',
      type: 'person',
      expanded: true,
      data: { name: 'Jane Smith' },
      children: [
        {
          label: 'Accounts',
          type: 'accounts',
          isSelected: false,
          expanded: true,
          children: [
            {
              type: 'account',
              data: { number: '283847572:D', name: 'Melissa G Royce' },
            },
            {
              type: 'account',
              data: { number: '283847572:D', name: 'Melissa G Royce' },
            },
          ],
        },
        {
          label: 'Cases',
          type: 'cases',
          expanded: true,
          isSelected: false,
          children: [
            {
              type: 'case',
              data: { number: '123456', name: 'Melissa G Royce' },
            },
            {
              type: 'case',
              data: { number: '654321', name: 'Melissa G Royce' },
            },
          ],
        },
        {
          label: 'Customers',
          type: 'customers',
          expanded: true,
          isSelected: false,
          children: [
            {
              type: 'customer',
              data: { number: '123456', name: 'John Smith' },
            },
            {
              type: 'customer',
              data: { number: '654321', name: 'Mary Smith' },
            },
            {
              type: 'customer',
              data: { number: '123456', name: 'John Smith' },
            },
            {
              type: 'customer',
              data: { number: '654321', name: 'Mary Smith' },
            },
          ],
        },
        {
          label: 'Alerts',
          type: 'alerts',
          expanded: true,
          isSelected: false,
          children: [
            {
              type: 'alert',
              data: { number: '123456', name: 'John Smith' },
            },
            {
              type: 'alert',
              data: { number: '654321', name: 'Mary Smith' },
            },
            {
              type: 'alert',
              data: { number: '123456', name: 'John Smith' },
            },
            {
              type: 'alert',
              data: { number: '654321', name: 'Mary Smith' },
            },
          ],
        },
      ],
    },
  ];

  constructor(
    private confirmationService: ConfirmationService,
    private mocks: MockDataService
  ) {}

  ngOnInit(): void {
    this.transactions = Array.from(new Array(100), (v, k) =>
      this.mocks.createTransaction(k)
    );

    this.cols = [
      { field: 'label', header: '' },
      { field: 'type', header: '' },
      { field: 'secondaryType', header: '' },
    ];
    this.clientMenuItems = [
      {
        label: 'Options',
        items: [
          {
            label: 'Merge',
            icon: 'pi pi-users',
            command: () => (this.showDrawer = true),
          },
          { label: 'Unmerge', icon: 'pi pi-user-minus' },
        ],
      },
    ];

    this.aliasMenuItems = [
      {
        label: 'Options',
        items: [{ label: 'Make Primary', icon: 'fal fa-credit-card' }],
      },
    ];

    this.panZoomConfig.zoomOnDoubleClick = false;
  }

  handleOnHide(): void {
    this.showDrawer = false;
  }

  handleDrawerCancel(): void {
    this.showDrawer = false;
  }

  toggleOptionsMenu(rowData: any, event: any): void {
    if (rowData.type === RelationshipType.Client) {
      this.items = this.clientMenuItems;
    } else if (rowData.type === RelationshipType.Alias) {
      this.items = this.aliasMenuItems;
    }

    this.menu.toggle(event);
  }

  onNodeSelect(event) {
    event.node.isSelected = true;
  }

  relationships = [
    {
      data: {
        label: 'Melissa G Royce',
        type: RelationshipType.Client,
        root: true,
        icon: 'fal fa-user-circle',
      },
      children: [
        {
          data: {
            label: 'SL:MGR0374 Melissa G Royce',
            type: RelationshipType.Alias,
            primary: true,
            root: false,
            icon: 'fal fa-user-secret',
          },
          selectable: false,
          children: [
            {
              data: {
                label: '283847572:D Melissa G Royce',
                type: RelationshipType.Account,
                root: false,
                icon: 'fal fa-credit-card',
              },

              selectable: false,
              children: [
                {
                  data: {
                    label: 'MGR0374 Melissa G Royce',
                    secondaryType: 'Primary',
                    type: RelationshipType.Alias,
                    root: false,
                    icon: 'fal fa-user-secret',
                  },
                  selectable: false,
                  children: [
                    {
                      data: {
                        label: 'Melissa G Royce',
                        type: RelationshipType.Client,
                        root: false,
                        icon: 'fal fa-user-circle',
                      },
                    },
                  ],
                },
              ],
            },
            {
              data: {
                label: '394837947:D Melissa and David Royce',
                type: RelationshipType.Account,
                root: false,
                icon: 'fal fa-credit-card',
              },
              children: [
                {
                  data: {
                    label: 'DJR3347 David Royce',
                    secondaryType: 'Primary',
                    type: RelationshipType.Alias,
                    root: false,
                    icon: 'fal fa-user-secret',
                  },
                  children: [
                    {
                      data: {
                        label: 'David G Royce',
                        type: RelationshipType.Client,
                        root: false,
                        icon: 'fal fa-user-circle',
                      },
                    },
                  ],
                },
                {
                  data: {
                    label: 'MGR0374 Melissa Royce',
                    secondaryType: 'Joint',
                    type: RelationshipType.Account,
                    root: false,
                    icon: 'fal fa-user-secret',
                  },

                  children: [
                    {
                      data: {
                        label: 'Melissa G Royce',
                        type: RelationshipType.Client,
                        root: false,
                        icon: 'fal fa-user-circle',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          data: {
            label: 'VT:MGR0374 Melissa G Royce',
            type: RelationshipType.Alias,
            primary: false,
            root: false,
            icon: 'fal fa-user-secret',
          },

          selectable: false,
        },
      ],
    },
  ];
}

enum RelationshipType {
  Client,
  Account,
  Alias,
}
