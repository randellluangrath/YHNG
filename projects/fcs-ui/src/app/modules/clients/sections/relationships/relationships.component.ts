import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'yh-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.scss'],
})
export class RelationshipsComponent implements OnInit {
  @ViewChild(Menu)
  menu: Menu;

  items: MenuItem[] = [
    {
      label: 'Options',
      items: [
        { label: 'Merge', icon: 'pi pi-users' },
        {
          label: 'Unmerge',
          icon: 'pi pi-user-minus',
        },
      ],
    },
  ];

  altItems: MenuItem[] = [
    {
      label: 'Options',
      items: [
        { label: 'Set Preferred', icon: 'pi pi-check' },
        {
          label: 'Unmerge',
          icon: 'pi pi-user-minus',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleOptionsMenu(event: any): void {
    this.menu.toggle(event);
  }
}
