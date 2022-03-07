import { Component, Input, OnInit } from '@angular/core';
import { ISuspiciousActivityReport } from '@fcs/app/domain/models/sar';

@Component({
  selector: 'yh-sar-history-item',
  templateUrl: './sar-history-item.component.html',
  styleUrls: ['./sar-history-item.component.scss'],
})
export class SarHistoryWorkComponent implements OnInit {
  @Input()
  sar: ISuspiciousActivityReport;

  @Input()
  selected: boolean;

  constructor() {}

  ngOnInit(): void {}
}
