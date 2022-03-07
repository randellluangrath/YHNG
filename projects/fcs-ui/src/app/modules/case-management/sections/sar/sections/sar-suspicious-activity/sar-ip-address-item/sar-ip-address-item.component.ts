import { Component, Input, OnInit } from '@angular/core';
import { ISarSubjectIpAddress } from '@fcs/app/domain/models/sar';

@Component({
  selector: 'yh-sar-ip-address-item',
  templateUrl: './sar-ip-address-item.component.html',
  styleUrls: ['./sar-ip-address-item.component.scss'],
})
export class SarIpAddressItemComponent implements OnInit {
  @Input()
  address: ISarSubjectIpAddress;

  constructor() {}

  ngOnInit(): void {}
}
