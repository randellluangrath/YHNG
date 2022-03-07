import { Component, Input, OnInit } from '@angular/core';
import { Client } from '@fcs/app/domain/models/clients';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';

@Component({
  selector: 'yh-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
})
export class ClientDetailsComponent implements OnInit {
  @Input()
  client: Client;

  items: MenuItem[];

  selectedFiles: any;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'View', icon: 'pi pi-search', command: (event) => {} },
      { label: 'Unselect', icon: 'pi pi-times', command: (event) => {} },
    ];
  }

  nodeSelect(event) {}

  nodeUnselect(event) {}

  files = [
    {
      label: 'Melissa G Royce',
      data: 'Documents Folder',
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {
          label: 'CQJ75561 Melissa G Royce',
          data: 'Work Folder',
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          children: [
            {
              label: '7910962493:D Melissa G Royce dba Homeland #4181',
              icon: 'pi pi-file',
              data: 'Expenses Document',
              expandedIcon: 'pi pi-folder-open',
              collapsedIcon: 'pi pi-folder',
              children: [
                {
                  label: 'CQJ75561 Melissa G Royce (Primary)',
                  icon: 'pi pi-file',
                  data: 'Expenses Document',
                  expandedIcon: 'pi pi-folder-open',
                  collapsedIcon: 'pi pi-folder',
                  children: [
                    {
                      label: 'Melissa G Royce',
                      icon: 'pi pi-file',
                    },
                  ],
                },
              ],
            },
            {
              label: '3266871456:D Melissa G Royce dba Homeland #4200',
              icon: 'pi pi-file',
              data: 'Expenses Document',
              expandedIcon: 'pi pi-folder-open',
              collapsedIcon: 'pi pi-folder',
              children: [
                {
                  label: 'CQJ75561 Melissa G Royce (Primary)',
                  icon: 'pi pi-file',
                  data: 'Expenses Document',
                  expandedIcon: 'pi pi-folder-open',
                  collapsedIcon: 'pi pi-folder',
                  children: [
                    {
                      label: 'Melissa G Royce',
                      icon: 'pi pi-file',
                    },
                  ],
                },
              ],
            },
            {
              label: '7297874190:D Melissa G Royce dba Homeland #4181',
              icon: 'pi pi-file',
              data: 'Expenses Document',
              expandedIcon: 'pi pi-folder-open',
              collapsedIcon: 'pi pi-folder',
              children: [
                {
                  label: 'CQJ75561 Melissa G Royce (Primary)',
                  icon: 'pi pi-file',
                  data: 'Expenses Document',
                  expandedIcon: 'pi pi-folder-open',
                  collapsedIcon: 'pi pi-folder',
                  children: [
                    {
                      label: 'Melissa G Royce',
                      icon: 'pi pi-file',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
