import { Component, Input, OnInit } from '@angular/core';
import { ISuspiciousActivityReport } from '@fcs/app/domain/models/sar';

@Component({
  selector: 'yh-sar-item',
  templateUrl: './sar-item.component.html',
  styleUrls: ['./sar-item.component.scss'],
})
export class SarItemComponent implements OnInit {
  @Input()
  sar: ISuspiciousActivityReport;
  constructor() {}

  ngOnInit(): void {}
}
