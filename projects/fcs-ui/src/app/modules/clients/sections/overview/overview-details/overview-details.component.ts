import { Component, Input, OnInit } from '@angular/core';
import { Client } from '@fcs/app/domain/models/clients';

@Component({
  selector: 'yh-overview-details',
  templateUrl: './overview-details.component.html',
  styleUrls: ['./overview-details.component.scss'],
})
export class OverviewDetailsComponent implements OnInit {
  @Input()
  client: Client;

  constructor() {}

  ngOnInit(): void {}
}
