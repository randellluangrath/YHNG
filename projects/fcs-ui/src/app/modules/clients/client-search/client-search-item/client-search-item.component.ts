import { Component, Input, OnInit } from '@angular/core';
import { Client } from '@fcs/app/domain/models/clients';

@Component({
  selector: 'yh-client-search-item',
  templateUrl: './client-search-item.component.html',
  styleUrls: ['./client-search-item.component.scss'],
})
export class ClientSearchItemComponent implements OnInit {
  @Input()
  client: Client;

  constructor() {}

  ngOnInit(): void {}
}
