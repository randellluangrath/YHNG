import { Component, OnInit } from '@angular/core';
import { Client } from '@fcs/app/domain/models/clients';
import { MockDataService } from '@fcs/app/services/mock-data.service';

@Component({
  selector: 'yh-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  client: Client = this.mock.createClient();

  constructor(private mock: MockDataService) {}

  ngOnInit(): void {}
}
