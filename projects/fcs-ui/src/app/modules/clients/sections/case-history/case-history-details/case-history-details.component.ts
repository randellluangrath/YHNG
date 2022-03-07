import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Case } from '@fcs/app/domain/models/case';

@Component({
  selector: 'yh-case-history-details',
  templateUrl: './case-history-details.component.html',
  styleUrls: ['./case-history-details.component.scss'],
})
export class CaseHistoryDetailsComponent implements OnInit {
  @Input()
  case: Case;

  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}

  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
