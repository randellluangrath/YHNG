import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'yh-scenario-tags',
  templateUrl: './scenario-tags.component.html',
  styleUrls: ['./scenario-tags.component.scss'],
})
export class ScenarioTagsComponent implements OnInit {
  @ViewChild(Menu)
  menu: Menu;
  items: MenuItem[] = [
    {
      label: 'Options',
      items: [
        { label: 'Edit', icon: 'pi pi-pencil' },
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

  tags: IScenarioTag[] = Array.from(new Array(10), (v, k) => {
    return {
      name: `Tag ${k}`,
      scenarios: ['Scenario A', 'Scenario B', 'Scenario C'],
    };
  });

  fgAddTag: FormGroup;
  fcAddTag: FormControl = new FormControl();

  showDrawer: boolean;

  selectedTag: IScenarioTag;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgAddTag = this.fb.group({
      fcAddTag: this.fcAddTag,
    });
  }

  toggleOptionsMenu(event: any): void {
    this.menu.toggle(event);
  }
}

export interface IScenarioTag {
  name: string;
  scenarios: string[];
}
