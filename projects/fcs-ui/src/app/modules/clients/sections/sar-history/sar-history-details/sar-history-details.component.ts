import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISuspiciousActivityReport } from '@fcs/app/domain/models/sar';

@Component({
  selector: 'yh-sar-history-details',
  templateUrl: './sar-history-details.component.html',
  styleUrls: ['./sar-history-details.component.scss'],
})
export class SarHistoryDetailsComponent implements OnInit {
  @Input()
  sar: ISuspiciousActivityReport;

  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  subjects: string[] = [
    'John Smith',
    'John Doe',
    'John Mayer',
    'John Bayer',
    'John Smith',
    'John Doe',
    'John Mayer',
    'John Bayer',
    'John Smith',
    'John Doe',
    'John Mayer',
    'John Bayer',
  ];

  constructor() {}

  ngOnInit(): void {}

  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
