import { Component, Input, OnInit } from '@angular/core';
import { Case } from '@fcs/app/domain/models/case';

@Component({
  selector: 'yh-case-history-item',
  templateUrl: './case-history-item.component.html',
  styleUrls: ['./case-history-item.component.scss'],
})
export class CaseHistoryItemComponent implements OnInit {
  @Input()
  case: Case;

  @Input()
  selected: boolean;

  constructor() {}

  ngOnInit(): void {}
}
