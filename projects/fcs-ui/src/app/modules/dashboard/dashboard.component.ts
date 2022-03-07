import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  checkIcon: IconDefinition = faCheckCircle;

  constructor() {}

  ngOnInit(): void {}
}
