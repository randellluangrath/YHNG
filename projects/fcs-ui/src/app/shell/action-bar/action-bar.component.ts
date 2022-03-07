import { Component, OnInit } from '@angular/core';
import { Client } from '@fcs/app/domain/models/clients';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faCog,
  faSearch,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'yh-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnInit {
  searchIcon: IconDefinition = faSearch;
  notificationIcon: IconDefinition = faBell;
  tasksIcon: IconDefinition = faTasks;
  settingsIcon: IconDefinition = faCog;

  constructor() {}

  ngOnInit(): void {}
}
